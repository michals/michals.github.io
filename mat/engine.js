class MathGameEngine {
    constructor(config) {
        this.config = config;
        this.reset();
    }

    reset() {
        this.health = this.config.maxHealth;
        this.streak = 0;
        this.score = 0;
        this.tasksCompleted = 0;
        this.progressHistory = []; // add tracking
        this.isGameOver = false;
        this.isVictory = false;
    }

    submitAnswer(isCorrect) {
        if (this.isGameOver || this.isVictory) return { pointsAdded: 0, healthChanged: 0 };

        let pointsAdded = 0;
        let streakBonusAdded = 0;
        let healthChanged = 0;

        this.progressHistory.push(isCorrect);
        this.tasksCompleted += 1; // Always increment

        if (isCorrect) {
            streakBonusAdded = this.streak * this.config.streakBonus;
            pointsAdded = this.config.basePoints + streakBonusAdded;
            this.score += pointsAdded;
            this.streak += 1;
            
            // Recovery logic
            if (this.streak > 0 && this.streak % this.config.streakRecovery === 0) {
                if (this.health < this.config.maxHealth) {
                    this.health += 1;
                    healthChanged = 1;
                }
            }
        } else {
            this.streak = 0;
            this.health -= 1;
            healthChanged = -1;
            if (this.health <= 0) {
                this.isGameOver = true;
                this.health = 0;
            }
        }

        if (!this.isGameOver && this.tasksCompleted >= this.config.tasksCount) {
            this.isVictory = true;
        }

        return { pointsAdded, streakBonusAdded, healthChanged };
    }

    static computeMaxPoints(config) {
        if (!config) return 0;
        const n = config.tasksCount;
        const b = config.basePoints;
        const s = config.streakBonus;
        // Suma: n*b + s*(0 + 1 + 2 + ... + n-1)
        // Suma 0..n-1 to n*(n-1)/2
        return n * b + Math.round(s * (n * (n - 1)) / 2);
    }
}

class MathGenerator {
    static generateTask(config) {
        const opIndex = Math.floor(Math.random() * config.operations.length);
        const op = config.operations[opIndex];
        
        let a, b, result;
        let attempts = 0;
        
        do {
            a = this.getRandomInt(op.range1[0], op.range1[1]);
            b = this.getRandomInt(op.range2[0], op.range2[1]);
            
            if (op.type === '+') {
                if (op.largerFirst && a < b) { const temp = a; a = b; b = temp; }
                result = a + b;
            } else if (op.type === '-') {
                if (a < b) { const temp = a; a = b; b = temp; }
                result = a - b;
            } else if (op.type === '*') {
                result = a * b;
            } else if (op.type === '/') {
                if (b === 0) b = 1;
                result = a;
                a = result * b;
            }
            attempts++;
            if(attempts > 50) break;
        } while (result < op.resultRange[0] || result > op.resultRange[1]);

        const task = {
            num1: a,
            num2: b,
            operator: op.type,
            correctAnswer: result,
            hint: op.hint
        };

        if (config.quiz > 1) {
            task.options = this.generateOptions(result, config.quiz, op.resultRange);
        }

        return task;
    }

    static generateOptions(correct, count, range) {
        const options = new Set();
        options.add(correct);
        
        let attempts = 0;
        while (options.size < count && attempts < 100) {
            const fake = this.getRandomInt(range[0], range[1]);
            options.add(fake);
            attempts++;
        }
        
        // Przetasowanie (Shuffle)
        return Array.from(options).sort(() => Math.random() - 0.5);
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/**
 * Zarządza statystykami gracza na podstawie historii gier.
 */
class StatsManager {
    /**
     * Oblicza sumaryczną liczbę punktów ze wszystkich gier.
     * @param {Array} history - Tablica obiektów historii.
     * @returns {number}
     */
    static getTotalPoints(history) {
        if (!Array.isArray(history)) return 0;
        return history.reduce((sum, entry) => sum + (Number(entry.points) || 0), 0);
    }

    /**
     * Oblicza liczbę punktów zdobytych w dniu dzisiejszym (według czasu lokalnego).
     * @param {Array} history - Tablica obiektów historii.
     * @returns {number}
     */
    static getDailyPoints(history) {
        if (!Array.isArray(history)) return 0;
        const today = new Date().toLocaleDateString();
        return history
            .filter(entry => {
                if (!entry.timestamp) return false;
                return new Date(entry.timestamp).toLocaleDateString() === today;
            })
            .reduce((sum, entry) => sum + (Number(entry.points) || 0), 0);
    }
}

// Eksport dla Node.js oraz przeglądarki
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MathGameEngine, MathGenerator, StatsManager };
} else {
    window.MathGameEngine = MathGameEngine;
    window.MathGenerator = MathGenerator;
    window.StatsManager = StatsManager;
}
