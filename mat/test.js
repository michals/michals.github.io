const test = require('node:test');
const assert = require('node:assert');
const { MathGameEngine, MathGenerator, StatsManager } = require('./engine.js');
const { LevelsConfig } = require('./levels.js');

const defaultConfig = {
    level: 1,
    maxHealth: 3,
    streakRecovery: 3,
    basePoints: 10,
    streakBonus: 2,
    tasksCount: 10,
    quiz: 0
};

test('MathGameEngine - Basic Scoring and Streak', (t) => {
    const engine = new MathGameEngine(defaultConfig);
    
    // 1st correct
    engine.submitAnswer(true);
    assert.strictEqual(engine.score, 10);
    assert.strictEqual(engine.streak, 1);
    
    // 2nd correct
    engine.submitAnswer(true);
    assert.strictEqual(engine.score, 22); // 10 + (10 + 1*2)
    assert.strictEqual(engine.streak, 2);
    
    // 3rd incorrect
    engine.submitAnswer(false);
    assert.strictEqual(engine.streak, 0);
    assert.strictEqual(engine.health, 2);
});

test('MathGameEngine - Recovery logic', (t) => {
    const engine = new MathGameEngine(defaultConfig);
    engine.submitAnswer(false); 
    assert.strictEqual(engine.health, 2);
    
    // Recover with 3 correct answers
    engine.submitAnswer(true); 
    engine.submitAnswer(true); 
    const res = engine.submitAnswer(true); 
    
    assert.strictEqual(engine.health, 3);
    assert.strictEqual(res.healthChanged, 1);
});

test('MathGameEngine - Game Over', (t) => {
    const engine = new MathGameEngine({ ...defaultConfig, maxHealth: 2 });
    engine.submitAnswer(false);
    engine.submitAnswer(false);
    
    assert.strictEqual(engine.health, 0);
    assert.strictEqual(engine.isGameOver, true);
    
    // Should not allow further points
    const res = engine.submitAnswer(true);
    assert.strictEqual(res.pointsAdded, 0);
});

test('MathGameEngine - Victory', (t) => {
    const engine = new MathGameEngine({ ...defaultConfig, tasksCount: 2 });
    engine.submitAnswer(true);
    assert.strictEqual(engine.isVictory, false);
    engine.submitAnswer(true);
    assert.strictEqual(engine.isVictory, true);
});

test('MathGameEngine - Progress History Tracking', (t) => {
    const engine = new MathGameEngine(defaultConfig);
    engine.submitAnswer(true);
    engine.submitAnswer(false);
    engine.submitAnswer(true);
    
    assert.deepStrictEqual(engine.progressHistory, [true, false, true]);
    assert.strictEqual(engine.tasksCompleted, 3);
});

test('MathGenerator - Addition with largerFirst', (t) => {
    const config = {
        operations: [{ type: '+', range1: [1, 5], range2: [20, 25], resultRange: [0, 50], largerFirst: true }],
        quiz: 0
    };
    
    // Run multiple times to catch random swap
    for(let i=0; i<20; i++) {
        const task = MathGenerator.generateTask(config);
        assert.ok(task.num1 >= task.num2, `Expected ${task.num1} >= ${task.num2}`);
    }
});

test('MathGenerator - Subtraction ensures num1 >= num2', (t) => {
    const config = {
        operations: [{ type: '-', range1: [1, 5], range2: [20, 25], resultRange: [0, 50] }],
        quiz: 0
    };
    
    for(let i=0; i<20; i++) {
        const task = MathGenerator.generateTask(config);
        assert.ok(task.num1 >= task.num2, `Expected ${task.num1} >= ${task.num2} in subtraction`);
        assert.strictEqual(task.correctAnswer, task.num1 - task.num2);
    }
});

test('MathGenerator - Division is always clean', (t) => {
    const config = {
        operations: [{ type: '/', range1: [1, 50], range2: [1, 10], resultRange: [1, 50] }],
        quiz: 0
    };
    
    for(let i=0; i<20; i++) {
        const task = MathGenerator.generateTask(config);
        assert.strictEqual(task.num1 % task.num2, 0, `Expected clean division: ${task.num1} / ${task.num2}`);
        assert.strictEqual(task.correctAnswer, task.num1 / task.num2);
    }
});

test('MathGenerator - Quiz Options generation', (t) => {
    const config = {
        quiz: 4,
        operations: [{ type: '+', range1: [1, 5], range2: [1, 5], resultRange: [0, 20] }]
    };
    
    const task = MathGenerator.generateTask(config);
    assert.ok(Array.isArray(task.options), "Options should be an array");
    assert.strictEqual(task.options.length, 4, "Should have 4 options");
    assert.ok(task.options.includes(task.correctAnswer), "Correct answer must be in options");
    
    // Check uniqueness
    const uniqueOptions = new Set(task.options);
    assert.strictEqual(uniqueOptions.size, 4, "Options should be unique");
});

test('MathGenerator - All operators coverage', (t) => {
    // Level 43 is the first level of "Wielki Mistrz (Wszystko)"
    const config = LevelsConfig[43];
    const operatorsFound = new Set();
    
    // Run enough times to hit all operators in Level 1 config
    for(let i=0; i<100; i++) {
        const task = MathGenerator.generateTask(config);
        operatorsFound.add(task.operator);
    }
    
    assert.ok(operatorsFound.has('+'), 'Should have +');
    assert.ok(operatorsFound.has('-'), 'Should have -');
    assert.ok(operatorsFound.has('*'), 'Should have *');
    assert.ok(operatorsFound.has('/'), 'Should have /');
});

test('StatsManager - Point Aggregation', (t) => {
    const today = new Date().toISOString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    
    const mockHistory = [
        { points: 100, timestamp: today },
        { points: 50, timestamp: today },
        { points: 30, timestamp: yesterday },
        { points: 0, timestamp: today }
    ];

    assert.strictEqual(StatsManager.getTotalPoints(mockHistory), 180, 'Total points should be 180');
    assert.strictEqual(StatsManager.getDailyPoints(mockHistory), 150, 'Daily points should be 150');
    assert.strictEqual(StatsManager.getTotalPoints([]), 0, 'Empty history should result in 0 points');
    assert.strictEqual(StatsManager.getDailyPoints(null), 0, 'Null history should result in 0 points');
});
