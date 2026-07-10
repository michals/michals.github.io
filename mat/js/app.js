function loadUserData(user) {
    const key = `math_game_${user}`;
    let data = { user: user, unlockedLevels: [1], history: [] };
    const stored = localStorage.getItem(key);
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed === 'object') {
                if (Array.isArray(parsed.unlockedLevels)) data.unlockedLevels = parsed.unlockedLevels;
                if (Array.isArray(parsed.history)) data.history = parsed.history;
            }
        } catch(e) {}
    }
    
    // Auto-heal unlocked levels based on history
    let dirty = false;
    
    // 1. Every level in history should be unlocked
    data.history.forEach(entry => {
        if (entry.level && !data.unlockedLevels.includes(entry.level)) {
            data.unlockedLevels.push(entry.level);
            dirty = true;
        }
        // 2. The level after any completed level should also be unlocked
        const nextLvl = entry.level + 1;
        if (window.LevelsConfig[nextLvl] && !data.unlockedLevels.includes(nextLvl)) {
            data.unlockedLevels.push(nextLvl);
            dirty = true;
        }
    });
    
    // 3. Keep levels contiguous (if lvl is unlocked, all levels < lvl must be unlocked)
    if (data.unlockedLevels.length > 0) {
        const maxUnlocked = Math.max(...data.unlockedLevels);
        for (let i = 1; i <= maxUnlocked; i++) {
            if (window.LevelsConfig[i] && !data.unlockedLevels.includes(i)) {
                data.unlockedLevels.push(i);
                dirty = true;
            }
        }
    }

    // Sort unlocked levels for cleanliness
    data.unlockedLevels.sort((a, b) => a - b);
    
    if (dirty) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    
    return data;
}

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
        this.levelMetricBox = document.getElementById('level-metric-box');
        this.progressContainer = document.getElementById('progress-container');
        this.healthContainer = document.getElementById('health-container');
        this.hintsContainer = document.getElementById('hints-container');
        
        // Equation
        this.eqNum1 = document.getElementById('eq-num1');
        this.eqOp = document.getElementById('eq-op');
        this.eqNum2 = document.getElementById('eq-num2');
        this.eqResult = document.getElementById('eq-result');
        this.musicToggle = document.getElementById('music-toggle');
        
        // Controls
        this.inputControl = document.getElementById('answer-input');
        this.buttonsControl = document.getElementById('buttons-container');
        
        // Screens overlays
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.victoryScreen = document.getElementById('victory-screen');

        // Robot Mat
        this.mat = new RobotMat('mat-container');
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

        if (this.musicToggle) {
            this.musicToggle.addEventListener('click', () => {
                this.bgmEnabled = !this.bgmEnabled;
                localStorage.setItem('mat_bgm_enabled', this.bgmEnabled);
                if (this.bgmEnabled) {
                    this.sounds.bgm.play().catch(() => {});
                } else {
                    this.sounds.bgm.pause();
                }
                this.updateMusicToggleUI();
            });
        }

        const totalPointsStat = document.getElementById('total-points-stat');
        if (totalPointsStat) {
            totalPointsStat.addEventListener('dblclick', async () => {
                const user = localStorage.getItem('mat_curr_user') || 'default';
                const key = `math_game_${user}`;
                const stored = localStorage.getItem(key);
                if (!stored) {
                    alert("Brak danych do wygenerowania kopii!");
                    return;
                }
                try {
                    const compressed = await window.BackupManager.compress(stored);
                    
                    const d = new Date();
                    const yyyy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    const formattedDate = `${yyyy}-${mm}-${dd}`;
                    
                    const backupUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(user)}&import=${encodeURIComponent(compressed)}`;
                    
                    const container = document.getElementById('backup-link-container');
                    if (container) {
                        container.innerHTML = `
                            <a href="${backupUrl}" class="backup-link" title="Przeciągnij ten link na pasek zakładek lub kliknij prawym przyciskiem myszy, aby go zapisać">
                                💾 Kopia: ${user} - ${formattedDate}
                            </a>
                        `;
                    }
                } catch (e) {
                    console.error(e);
                    alert("Błąd podczas tworzenia kopii zapasowej!");
                }
            });
        }
    }
    showSelection() {
        this.gameScreen.classList.add('hidden');
        this.selectionScreen.classList.remove('hidden');
        
        // Render Stats
        const user = localStorage.getItem('mat_curr_user') || 'default';
        const data = loadUserData(user);
        const history = data.history;
        const unlockedLevels = data.unlockedLevels;

        const totalPointsVal = document.getElementById('total-points-val');
        if (totalPointsVal) totalPointsVal.innerText = StatsManager.getTotalPoints(history);
        const userNameVal = document.getElementById('user-name-val');
        const dailyPointsVal = document.getElementById('daily-points-val');
        if (userNameVal) userNameVal.innerText = user;
        if (dailyPointsVal) dailyPointsVal.innerText = StatsManager.getDailyPoints(history);

        this.renderLevelSelection(unlockedLevels, history);
    }

    renderLevelSelection(unlockedLevels, history) {
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
                
                const maxPoints = MathGameEngine.computeMaxPoints(lvl);
                const details = `${lvl.categoryName}\n${lvl.difficultyLabel}\nMax: ${maxPoints} pkt`;
                tile.title = details;
                
                const maxLabel = document.createElement('div');
                maxLabel.className = 'level-tile-max';
                maxLabel.innerText = `MAX: ${maxPoints}`;
                
                const bestScore = history
                    .filter(h => h.level === lvl.level)
                    .reduce((max, h) => Math.max(max, h.points || 0), 0);
                
                const scoreLabel = document.createElement('div');
                scoreLabel.className = 'level-tile-score';
                if (bestScore > 0) {
                    scoreLabel.innerText = (bestScore >= maxPoints) ? '⭐️' : bestScore;
                }

                tile.appendChild(maxLabel);
                tile.appendChild(num);
                tile.appendChild(scoreLabel);

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
        this.updateMusicToggleUI();
        this.renderHealth();
        this.renderProgress();
        this.scoreEl.innerText = this.engine.score;
        
        if (this.levelEl) this.levelEl.innerText = this.config.level;
        
        if (this.levelMetricBox) {
            this.levelMetricBox.title = `${this.config.categoryName}\n${this.config.difficultyLabel}`;
        }

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
        this.hintsContainer.innerHTML = '';
        if (this.inputControl) this.inputControl.value = '';
        this.mat.setMood('thinking');
        
        const task = MathGenerator.generateTask(this.config);
        this.currentTask = task; // Assign to currentTask for consistency

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
        
        // this.avatar.innerText = '🤔'; // Replaced by mat.setMood('thinking')
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
        } else if (task.operator === '^') {
            this.eqNum1.className = 'val-purple'; this.eqNum2.className = 'val-purple';
            const hintText = document.createElement('div');
            hintText.className = 'hint-power-text';
            if (task.num2 === 0) {
                hintText.innerHTML = `${task.num1}<sup>0</sup> = 1`;
            } else if (task.num2 === 1) {
                hintText.innerHTML = `${task.num1}<sup>1</sup> = ${task.num1}`;
            } else {
                const factors = Array(task.num2).fill(task.num1).join(' × ');
                hintText.innerHTML = `${task.num1}<sup>${task.num2}</sup> = ${factors}`;
            }
            wrapper.appendChild(hintText);
        }
        this.hintsContainer.appendChild(wrapper);
    }

    handleAnswer(answer) {
        const isCorrect = answer === this.currentTask.correctAnswer;
        const res = this.engine.submitAnswer(isCorrect, {
            num1: this.currentTask.num1,
            num2: this.currentTask.num2,
            operator: this.currentTask.operator,
            userAnswer: answer,
            correctAnswer: this.currentTask.correctAnswer
        });
        
        if (isCorrect) {
            if (res.healthChanged > 0) {
                this.sounds.taskPassBonus.play().catch(() => {});
            } else {
                this.sounds.taskPass.play().catch(() => {});
            }
            this.eqResult.innerText = answer;
            this.eqResult.className = 'val-result-ok';
            this.mat.setMood('happy');
            this.mat.container.classList.add('animate-pop');
            setTimeout(() => this.mat.container.classList.remove('animate-pop'), 400);
            this.scoreEl.innerText = this.engine.score;
            this.scoreEl.classList.add('animate-pop');
            setTimeout(() => this.scoreEl.classList.remove('animate-pop'), 400);

            this.showPointsAnimation(this.config.basePoints, res.streakBonusAdded);
        } else {
            this.sounds.taskFail.play().catch(() => {});
            this.mat.setMood('sad');
            this.mat.container.classList.add('shake');
            setTimeout(() => this.mat.container.classList.remove('shake'), 400);
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
            }, 2000);
        } else {
            const quizBtns = this.buttonsControl.querySelectorAll('button');
            quizBtns.forEach(b => b.disabled = true);
            this.inputControl.disabled = true;
            setTimeout(() => {
                this.inputControl.disabled = false;
                if (!this.engine.isGameOver) this.nextTask();
            }, isCorrect ? 2500 : 3000);
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
            const data = this.engine.progressHistory[i];
            const isCompleted = i < this.engine.progressHistory.length;
            
            div.className = 'progress-item ' + (isCompleted ? (data.isCorrect ? 'progress-success' : 'progress-fail') : 'progress-empty');
            div.innerText = i + 1;
            
            if (isCompleted) {
                div.style.cursor = 'help';
                div.addEventListener('click', (e) => this.showTaskDetail(e, i));
            }
            
            this.progressContainer.appendChild(div);
        }
    }

    showTaskDetail(event, index) {
        const data = this.engine.progressHistory[index];
        if (!data) return;

        // Remove existing popup if any
        const oldPopup = document.getElementById('task-detail-popup');
        if (oldPopup) oldPopup.remove();

        const popup = document.createElement('div');
        popup.id = 'task-detail-popup';
        popup.className = 'task-detail-popup animate-task-popup';
        
        // Symbols
        let displayOp = data.operator;
        if (displayOp === '*') displayOp = '×';
        if (displayOp === '/') displayOp = '÷';
        
        if (data.isCorrect) {
            popup.innerHTML = `
                <div class="popup-row ok">
                    ${data.num1} ${displayOp} ${data.num2} = <span class="val">${data.correctAnswer}</span> 😀
                </div>
            `;
        } else {
            popup.innerHTML = `
                <div class="popup-row err">
                    ${data.num1} ${displayOp} ${data.num2} = <span class="val">${data.userAnswer}</span> 😔
                </div>
                <div class="popup-row ok">
                    ${data.num1} ${displayOp} ${data.num2} = <span class="val">${data.correctAnswer}</span>
                </div>
            `;
        }

        // Position popup near the clicked element (BELOW)
        const rect = event.target.getBoundingClientRect();
        popup.style.left = `${rect.left + rect.width / 2}px`;
        popup.style.top = `${rect.bottom + 10}px`;

        document.body.appendChild(popup);

        const closePopup = (e) => {
            if (!popup.contains(e.target) && e.target !== event.target) {
                popup.remove();
                document.removeEventListener('click', closePopup);
            }
        };
        setTimeout(() => document.addEventListener('click', closePopup), 10);
    }

    saveScore() {
        const user = localStorage.getItem('mat_curr_user') || 'default';
        const key = `math_game_${user}`;
        const data = loadUserData(user);
        
        data.history.push({
            timestamp: new Date().toISOString(),
            level: this.config.level,
            points: this.engine.score,
            accuracy: this.engine.progressHistory.filter(x => x).length / this.engine.progressHistory.length
        });

        // Ensure the current level is in unlockedLevels
        if (!data.unlockedLevels.includes(this.config.level)) {
            data.unlockedLevels.push(this.config.level);
        }

        if (this.engine.isVictory) {
            const nextLvl = this.config.level + 1;
            if (window.LevelsConfig[nextLvl] && !data.unlockedLevels.includes(nextLvl)) {
                data.unlockedLevels.push(nextLvl);
            }
        }

        // Keep levels contiguous
        const maxUnlocked = Math.max(...data.unlockedLevels);
        for (let i = 1; i <= maxUnlocked; i++) {
            if (window.LevelsConfig[i] && !data.unlockedLevels.includes(i)) {
                data.unlockedLevels.push(i);
            }
        }
        data.unlockedLevels.sort((a, b) => a - b);

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
    
    updateMusicToggleUI() {
        if (this.musicToggle) {
            this.musicToggle.innerText = this.bgmEnabled ? '🔈' : '🔇';
        }
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for Backup/Import first
    const importData = urlParams.get('import');
    const urlUser = urlParams.get('user');
    if (importData && urlUser) {
        try {
            const decompressed = await window.BackupManager.decompress(importData);
            const parsed = JSON.parse(decompressed);
            if (window.BackupManager.validate(parsed)) {
                const confirmed = confirm(`Czy chcesz wczytać zapisane postępy dla gracza "${urlUser}"? Zastąpi to obecne dane.`);
                if (confirmed) {
                    localStorage.setItem(`math_game_${urlUser}`, JSON.stringify(parsed));
                    localStorage.setItem('mat_curr_user', urlUser);
                    alert("Import zakończony pomyślnie!");
                }
            } else {
                alert("Nieprawidłowy format danych kopii zapasowej!");
            }
        } catch (e) {
            console.error(e);
            alert("Błąd podczas odczytywania kopii zapasowej!");
        }
        
        // Clean URL parameters and reload/redirect
        urlParams.delete('import');
        const newQuery = urlParams.toString();
        const newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '');
        window.location.replace(newUrl);
        return; // Stop further execution
    }

    // User Persistence Logic
    if (urlUser) {
        localStorage.setItem('mat_curr_user', urlUser);
    }
    const user = localStorage.getItem('mat_curr_user') || 'default';

    // Handle level unlocking hacks
    const unlockVal = urlParams.get('unlock');
    if (unlockVal) {
        const key = `math_game_${user}`;
        const data = loadUserData(user);
        
        if (unlockVal === 'all') {
            const allLevelIds = Object.keys(window.LevelsConfig).map(Number);
            allLevelIds.forEach(id => {
                if (!data.unlockedLevels.includes(id)) {
                    data.unlockedLevels.push(id);
                }
            });
        } else if (unlockVal === 'first') {
            const firstLevels = {};
            Object.values(window.LevelsConfig).forEach(lvl => {
                const cat = lvl.categoryName;
                if (firstLevels[cat] === undefined || lvl.level < firstLevels[cat]) {
                    firstLevels[cat] = lvl.level;
                }
            });
            Object.values(firstLevels).forEach(id => {
                if (!data.unlockedLevels.includes(id)) {
                    data.unlockedLevels.push(id);
                }
            });
        } else {
            const lvlNum = parseInt(unlockVal, 10);
            if (!isNaN(lvlNum) && window.LevelsConfig[lvlNum]) {
                if (!data.unlockedLevels.includes(lvlNum)) {
                    data.unlockedLevels.push(lvlNum);
                }
            }
        }
        
        localStorage.setItem(key, JSON.stringify(data));
        
        // Redirect to clean the URL
        urlParams.delete('unlock');
        const newQuery = urlParams.toString();
        const newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '');
        window.location.replace(newUrl);
        return; // Stop initialization
    }

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
        await ui.mat.init();
        ui.start();
    } else {
        await ui.mat.init();
        ui.showSelection();
    }
});
