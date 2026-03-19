/**
 * Generator poziomów dla gry "Mat".
 * Uruchom: node levels_gen.js > levels_data.json
 */

const categories = [
    { name: "Dodawanie (+)", types: ['+'] },
    { name: "Odejmowanie (-)", types: ['-'] },
    { name: "Dodawanie i Odejmowanie (+ -)", types: ['+', '-'] },
    { name: "Mnożenie (×)", types: ['*'] },
    { name: "Mix (+ - ×)", types: ['+', '-', '*'] },
    { name: "Dzielenie (÷)", types: ['/'] },
    { name: "Mnożenie i Dzielenie (× ÷)", types: ['*', '/'] },
    { name: "Wielki Mistrz (+ - × ÷)", types: ['+', '-', '*', '/'] }
];

const difficultySteps = [
    { quiz: 3, hint: true,  tasksCount: 10, label: "Łatwy (Quiz 3, Podpowiedzi)" },
    { quiz: 3, hint: false, tasksCount: 10, label: "Średni (Quiz 3, Bez hinta)" },
    { quiz: 5, hint: true,  tasksCount: 12, label: "Trudny (Quiz 5, Podpowiedzi)" },
    { quiz: 5, hint: false, tasksCount: 12, label: "Ekspert (Quiz 5, Bez hinta)" },
    { quiz: 0, hint: true,  tasksCount: 15, label: "Mistrz (Wpisuj, Podpowiedzi)" },
    { quiz: 0, hint: false, tasksCount: 15, label: "Arcymistrz (Wpisuj, Bez hinta)" }
];

const bgGradients = [
    "linear-gradient(to bottom, #ebf8ff, #bee3f8)", // Blue
    "linear-gradient(to bottom, #fff5f5, #fed7d7)", // Red
    "linear-gradient(to bottom, #f0fff4, #c6f6d5)", // Green
    "linear-gradient(to bottom, #faf5ff, #e9d8fd)", // Purple
    "linear-gradient(to bottom, #fffaf0, #feebc8)", // Orange
    "linear-gradient(to bottom, #f5f5f5, #e2e8f0)", // Gray
    "linear-gradient(to bottom, #ebf4ff, #c3dafe)", // Indigo
    "linear-gradient(to bottom, #fff5f7, #fed7e2)"  // Pink
];

const config = {};
let globalLevelId = 1;

categories.forEach((cat, catIdx) => {
    difficultySteps.forEach((step, stepIdx) => {
        const levelId = globalLevelId++;
        const rangeBoost = stepIdx * 4; 
        
        const operations = cat.types.map(type => {
            let r1 = [1, 10 + rangeBoost];
            let r2 = [1, 10 + rangeBoost];
            let resR = [1, 100];

            if (type === '-') {
                r1 = [10 + rangeBoost, 20 + rangeBoost * 2];
                r2 = [1, 10 + rangeBoost];
                resR = [1, 50];
            } else if (type === '*') {
                r1 = [1, 3 + Math.floor(stepIdx / 2)];
                r2 = [1, 5 + stepIdx];
                resR = [2, 100];
            } else if (type === '/') {
                r1 = [1, 5 + stepIdx];
                r2 = [2, 5 + Math.floor(stepIdx / 2)];
                resR = [1, 50];
            }

            return {
                type,
                range1: r1,
                range2: r2,
                resultRange: resR,
                hint: step.hint,
                largerFirst: type === '+'
            };
        });

        config[levelId] = {
            level: levelId,
            categoryName: cat.name,
            difficultyLabel: step.label,
            tasksCount: step.tasksCount,
            maxHealth: 3,
            streakRecovery: 5,
            basePoints: 10,
            streakBonus: 2,
            background: bgGradients[catIdx],
            quiz: step.quiz,
            operations: operations
        };
    });
});

console.log(`const LevelsConfig = ` + JSON.stringify(config, null, 2) + `;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LevelsConfig };
} else {
    window.LevelsConfig = LevelsConfig;
}`);
