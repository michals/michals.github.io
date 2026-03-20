class UIController {
    constructor(engine, config) {
        this.engine = engine;
        this.config = config;
        this.currentTask = null;
        
        // Screens
        this.gameScreen = document.getElementById('game-screen');
        this.selectionScreen = document.getElementById('level-selection-screen');
        this.levelsGrid = document.getElementById('levels-grid-container');

        // HUD
        this.scoreEl = document.getElementById('score-display');
        this.levelEl = document.getElementById('level-display');
        this.progressContainer = document.getElementById('progress-container');
        this.healthContainer = document.getElementById('health-container');
        this.avatar = document.getElementById('avatar');
        this.hintsContainer = document.getElementById('hints-container');
        
        // Equation
        this.eqNum1 = document.getElementById('eq-num1');
        this.eqOp = document.getElementById('eq-op');
        this.eqNum2 = document.getElementById('eq-num2');
        this.eqResult = document.getElementById('eq-result');
        
        // Controls
        this.inputControl = document.getElementById('answer-input');
        this.buttonsControl = document.getElementById('buttons-container');
        
        // Screens overlays
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.victoryScreen = document.getElementById('victory-screen');
        this.finalScore = document.getElementById('final-score');
        
        // Audio
        this.sounds = {
            taskNew: new Audio('snd/task-new.mp3'),
            taskPass: new Audio('snd/task-pass.mp3'),
            taskPassBonus: new Audio('snd/task-pass-with-bonus.mp3'),
            taskFail: new Audio('snd/task-fail.mp3'),
            levelPass: new Audio('snd/level-pass.mp3'),
            levelFail: new Audio('snd/level-fail.mp3'),
            bgm: new Audio('snd/bg.mp3')
        };
        this.sounds.bgm.loop = true;
        this.sounds.bgm.volume = 0.5;

        this.bgmEnabled = localStorage.getItem('mat_bgm_enabled') !== 'false';

        this.initListeners();
    }

    initListeners() {
        if (this.inputControl) {
            this.inputControl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); 
                    if (this.inputControl.value === '') return;
                    const answer = parseInt(this.inputControl.value, 10);
                    this.handleAnswer(answer);
                }
            });
        }

        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                window.location.href = window.location.pathname; // Back to menu
            });
        }

        const nextLvlBtn = document.getElementById('next-lvl-btn');
        if (nextLvlBtn) {
            nextLvlBtn.addEventListener('click', () => {
                // Po zwycięstwie wracamy do menu, by zobaczyć odblokowany poziom
                window.location.href = window.location.pathname;
            });
        }

        const progressWrapper = document.querySelector('.progress-wrapper');
        if (progressWrapper) {
            progressWrapper.style.cursor = 'pointer';
            progressWrapper.title = 'Włącz/wyłącz muzykę';
            progressWrapper.addEventListener('click', () => {
                this.bgmEnabled = !this.bgmEnabled;
                localStorage.setItem('mat_bgm_enabled', this.bgmEnabled);
                if (this.bgmEnabled) {
                    this.sounds.bgm.play().catch(() => {});
                } else {
                    this.sounds.bgm.pause();
                }
            });
        }
    }
    showSelection() {
        this.gameScreen.classList.add('hidden');
        this.selectionScreen.classList.remove('hidden');
        
        // Render Stats
        const user = localStorage.getItem('mat_curr_user') || 'default';
        const key = `math_game_${user}`;
        let history = [];
        let unlockedLevels = [1];
        try {
            const stored = localStorage.getItem(key);
            if (stored) {
                const data = JSON.parse(stored);
                if (data && data.history) history = data.history;
                if (data && data.unlockedLevels) unlockedLevels = data.unlockedLevels;
            }
        } catch(e) {}

        const totalPointsVal = document.getElementById('total-points-val');
        const userNameVal = document.getElementById('user-name-val');
        const dailyPointsVal = document.getElementById('daily-points-val');

        if (totalPointsVal) totalPointsVal.innerText = StatsManager.getTotalPoints(history);
        if (userNameVal) userNameVal.innerText = user;
        if (dailyPointsVal) dailyPointsVal.innerText = StatsManager.getDailyPoints(history);

        this.renderLevelSelection(unlockedLevels);
    }

    renderLevelSelection(unlockedLevels) {
        this.levelsGrid.innerHTML = '';
        
        // Group by category
        const categories = {};
        Object.values(window.LevelsConfig).forEach(lvl => {
            if (!categories[lvl.categoryName]) categories[lvl.categoryName] = [];
            categories[lvl.categoryName].push(lvl);
        });

        Object.keys(categories).forEach(catName => {
            const group = document.createElement('div');
            group.className = 'category-group';
            
            const title = document.createElement('h2');
            title.className = 'category-title';
            title.innerText = catName;
            group.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'level-grid';

            categories[catName].forEach(lvl => {
                const isUnlocked = unlockedLevels.includes(lvl.level);
                
                const tile = document.createElement(isUnlocked ? 'a' : 'div');
                tile.className = 'level-tile' + (isUnlocked ? '' : ' locked');
                if (lvl.background && isUnlocked) tile.style.background = lvl.background;
                if (isUnlocked) tile.href = `?level=${lvl.level}`;
                
                const num = document.createElement('div');
                num.className = 'level-num';
                num.innerText = lvl.level;
                
                const label = document.createElement('div');
                label.className = 'level-label';
                label.innerText = lvl.difficultyLabel.split('(')[0].trim();
                
                const maxPoints = MathGameEngine.computeMaxPoints(lvl);
                const maxLabel = document.createElement('div');
                maxLabel.className = 'level-max-pts';
                maxLabel.innerText = `Max: ${maxPoints}`;
                
                tile.appendChild(num);
                tile.appendChild(label);
                tile.appendChild(maxLabel);

                if (!isUnlocked) {
                    const lock = document.createElement('div');
                    lock.className = 'level-lock';
                    lock.innerText = '🔒';
                    tile.appendChild(lock);
                }

                grid.appendChild(tile);
            });

            group.appendChild(grid);
            this.levelsGrid.appendChild(group);
        });
    }

    start() {
        this.selectionScreen.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');

        this.engine.reset();
        this.renderHealth();
        this.renderProgress();
        this.scoreEl.innerText = this.engine.score;
        
        if (this.levelEl) this.levelEl.innerText = this.config.level;
        const catEl = document.getElementById('category-display');
        const diffEl = document.getElementById('difficulty-display');
        if (catEl && this.config.categoryName) catEl.innerText = this.config.categoryName;
        if (diffEl && this.config.difficultyLabel) diffEl.innerText = this.config.difficultyLabel;

        this.gameOverScreen.classList.add('hidden');
        this.victoryScreen.classList.add('hidden');

        // Start BGM if enabled
        if (this.bgmEnabled) {
            this.sounds.bgm.currentTime = 0;
            this.sounds.bgm.play().catch(e => console.log("Audio play blocked by browser:", e));
        }

        this.nextTask();
    }

    nextTask() {
        this.sounds.taskNew.play().catch(() => {});
        this.inputControl.value = '';
        this.currentTask = MathGenerator.generateTask(this.config);
        
        this.eqNum1.innerText = this.currentTask.num1;
        
        let displayOp = this.currentTask.operator;
        if (displayOp === '*') displayOp = '×';
        if (displayOp === '/') displayOp = '÷';
        this.eqOp.innerText = displayOp;
        
        this.eqNum2.innerText = this.currentTask.num2;
        
        this.eqResult.innerText = '?';
        this.eqResult.className = 'eq-result';
        
        this.renderHints(this.currentTask);

        if (this.config.quiz <= 1) {
            this.inputControl.classList.remove('hidden');
            this.buttonsControl.classList.add('hidden');
            this.inputControl.focus();
        } else {
            this.inputControl.classList.add('hidden');
            this.buttonsControl.classList.remove('hidden');
            this.renderQuizButtons(this.currentTask.options);
        }
        
        this.avatar.innerText = '🤔';
    }

    renderQuizButtons(options) {
        this.buttonsControl.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-quiz';
            btn.innerText = opt;
            btn.onclick = () => this.handleAnswer(opt);
            this.buttonsControl.appendChild(btn);
        });
    }

    renderHints(task) {
        this.hintsContainer.innerHTML = '';
        this.eqNum1.className = '';
        this.eqNum2.className = '';
        this.eqOp.className = 'eq-op';

        if (!task.hint) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'hint-wrapper';

        const createCircle = (num, colorClass) => {
            const div = document.createElement('div');
            div.className = `hint-circle ${colorClass}`;
            div.innerText = num;
            return div;
        };

        if (task.operator === '+') {
            this.eqNum1.className = 'val-blue';
            this.eqNum2.className = 'val-green';
            const r1 = document.createElement('div'); r1.className = 'hint-row justify-start';
            for (let i = 1; i <= task.num1; i++) r1.appendChild(createCircle(i, 'bg-blue'));
            const r2 = document.createElement('div'); r2.className = 'hint-row justify-start';
            for (let i = 1; i <= task.num2; i++) r2.appendChild(createCircle(task.num1 + i, 'bg-green'));
            wrapper.appendChild(r1); wrapper.appendChild(r2);
        } else if (task.operator === '-') {
            this.eqNum1.className = 'val-blue';
            this.eqNum2.className = 'val-red';
            const r1 = document.createElement('div'); r1.className = 'hint-row justify-end';
            for (let i = 1; i <= task.num1; i++) r1.appendChild(createCircle(i, 'bg-blue'));
            const r2 = document.createElement('div'); r2.className = 'hint-row justify-end';
            for (let i = 1; i <= task.num2; i++) r2.appendChild(createCircle(i, 'bg-red'));
            wrapper.appendChild(r1); wrapper.appendChild(r2);
        } else if (task.operator === '*') {
            this.eqNum1.className = 'val-purple'; this.eqNum2.className = 'val-purple';
            let currentNum = 1;
            const gridRow = document.createElement('div'); gridRow.className = 'hint-group-col';
            for(let r=0; r<task.num1; r++) {
                const groupDiv = document.createElement('div'); groupDiv.className = 'hint-group-box-purple';
                for(let c=1; c<=task.num2; c++) groupDiv.appendChild(createCircle(currentNum++, 'bg-purple'));
                gridRow.appendChild(groupDiv);
            }
            wrapper.appendChild(gridRow);
        } else if (task.operator === '/') {
            this.eqNum1.className = 'val-orange'; this.eqNum2.className = 'val-orange';
            const groups = task.num2; const itemsPerGroup = task.num1 / task.num2;
            let currentNum = 1;
            const gridRow = document.createElement('div'); gridRow.className = 'hint-group-col';
            for(let g=0; g<groups; g++) {
                const groupDiv = document.createElement('div'); groupDiv.className = 'hint-group-box-orange';
                for(let c=1; c<=itemsPerGroup; c++) groupDiv.appendChild(createCircle(currentNum++, 'bg-orange'));
                gridRow.appendChild(groupDiv);
            }
            wrapper.appendChild(gridRow);
        }
        this.hintsContainer.appendChild(wrapper);
    }

    handleAnswer(answer) {
        const isCorrect = answer === this.currentTask.correctAnswer;
        const res = this.engine.submitAnswer(isCorrect);
        
        if (isCorrect) {
            if (res.healthChanged > 0) {
                this.sounds.taskPassBonus.play().catch(() => {});
            } else {
                this.sounds.taskPass.play().catch(() => {});
            }
            this.eqResult.innerText = answer;
            this.eqResult.className = 'val-result-ok';
            this.avatar.innerText = '😀';
            this.avatar.classList.add('animate-pop');
            setTimeout(() => this.avatar.classList.remove('animate-pop'), 400);
            this.scoreEl.innerText = this.engine.score;
            this.scoreEl.classList.add('animate-pop');
            setTimeout(() => this.scoreEl.classList.remove('animate-pop'), 400);

            this.showPointsAnimation(this.config.basePoints, res.streakBonusAdded);
        } else {
            this.sounds.taskFail.play().catch(() => {});
            this.avatar.innerText = '😔';
            this.avatar.classList.add('animate-shake');
            setTimeout(() => this.avatar.classList.remove('animate-shake'), 400);
            this.eqResult.innerText = this.currentTask.correctAnswer;
            this.eqResult.className = 'val-result-err';
        }

        if (res.healthChanged !== 0) this.renderHealth();
        this.renderProgress();

        if (this.engine.isGameOver) {
            this.sounds.bgm.pause();
            this.sounds.levelFail.play().catch(() => {});
            this.gameOverScreen.classList.remove('hidden');
        } else if (this.engine.isVictory) {
            this.sounds.bgm.pause();
            this.sounds.levelPass.play().catch(() => {});
            
            // Wait 1s for the last point cloud to be seen
            setTimeout(() => {
                this.finalScore.innerText = this.engine.score;
                this.victoryScreen.classList.remove('hidden');
                this.saveScore();
            }, 1000);
        } else {
            const quizBtns = this.buttonsControl.querySelectorAll('button');
            quizBtns.forEach(b => b.disabled = true);
            this.inputControl.disabled = true;
            setTimeout(() => {
                this.inputControl.disabled = false;
                if (!this.engine.isGameOver) this.nextTask();
            }, isCorrect ? 1500 : 4000);
        }
    }

    renderHealth() {
        this.healthContainer.innerHTML = '';
        for (let i = 0; i < this.config.maxHealth; i++) {
            const div = document.createElement('div');
            div.className = i < this.engine.health ? 'health-item health-full' : 'health-item health-empty';
            this.healthContainer.appendChild(div);
        }
    }

    renderProgress() {
        this.progressContainer.innerHTML = '';
        for (let i = 0; i < this.config.tasksCount; i++) {
            const div = document.createElement('div');
            div.className = 'progress-item ' + (i < this.engine.progressHistory.length ? (this.engine.progressHistory[i] ? 'progress-success' : 'progress-fail') : 'progress-empty');
            div.innerText = i + 1;
            this.progressContainer.appendChild(div);
        }
    }

    saveScore() {
        const user = localStorage.getItem('mat_curr_user') || 'default';
        const key = `math_game_${user}`;
        let data = { user: user, unlockedLevels: [1], history: [] };
        const oldDataStr = localStorage.getItem(key);
        if(oldDataStr) { try { data = JSON.parse(oldDataStr); } catch(e){} }
        
        data.history.push({
            timestamp: new Date().toISOString(),
            level: this.config.level,
            points: this.engine.score,
            accuracy: this.engine.progressHistory.filter(x => x).length / this.engine.progressHistory.length
        });

        if (this.engine.isVictory) {
            const nextLvl = this.config.level + 1;
            if (window.LevelsConfig[nextLvl] && !data.unlockedLevels.includes(nextLvl)) {
                data.unlockedLevels.push(nextLvl);
            }
        }

        localStorage.setItem(key, JSON.stringify(data));
    }

    showPointsAnimation(points, bonus) {
        const cloud = document.createElement('div');
        cloud.className = 'points-cloud';
        
        let content = `<div class="base-pts">+${points}</div>`;
        if (bonus > 0) {
            content += `<div class="streak-pts">+${bonus}</div>`;
        }
        cloud.innerHTML = content;
        
        document.body.appendChild(cloud);
        
        // Remove after animation finishes (2.4s)
        setTimeout(() => {
            if (cloud.parentNode) cloud.parentNode.removeChild(cloud);
        }, 2400);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // User Persistence Logic
    const urlUser = urlParams.get('user');
    if (urlUser) {
        localStorage.setItem('mat_curr_user', urlUser);
    }
    const user = localStorage.getItem('mat_curr_user') || 'default';

    let lvlId = urlParams.get('level');
    
    // UI controller needs access to DOM
    const ui = new UIController(null, null);
    ui.currentUser = user; // Store for convenience

    if (lvlId && window.LevelsConfig[lvlId]) {
        const config = window.LevelsConfig[lvlId];
        if (config.background) document.getElementById('app-bg').style.background = config.background;
        
        const engine = new window.MathGameEngine(config);
        ui.engine = engine;
        ui.config = config;
        ui.start();
    } else {
        ui.showSelection();
    }
});
