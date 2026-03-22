class RobotMat {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.svg = null;
        this.currentMood = 'neutral';
        
    }

    async init() {
        if (!this.container) return;
        try {
            const response = await fetch('img/mat.svg');
            const svgText = await response.text();
            this.container.innerHTML = svgText;
            this.svg = this.container.querySelector('svg');
            
            // Punkt obrotu fikołka Mata
            gsap.set("#mat-hero", { svgOrigin: "200 200" });
        } catch(e) {
            console.error('Błąd ładowania mat.svg:', e);
        }
    }

    setMood(mood) {
        if (!this.svg) return;
        if (mood === this.currentMood && mood !== 'happy') return; // Happy can re-trigger flip
        
        const data = this._getMoodData(mood);
        const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.inOut" } });

        // Animacje twarzy
        tl.to("#brow-l", { attr: { d: data.browL } }, 0)
          .to("#brow-r", { attr: { d: data.browR } }, 0)
          .to("#mouth-top", { attr: { d: data.mouthTop } }, 0)
          .to("#mouth-bottom", { attr: { d: data.mouthBottom } }, 0)
          .to("#mouth-fill", { attr: { d: data.mouthFill }, opacity: data.fillOpacity }, 0)
          .to("#pupil-l", { attr: { r: data.pupilL }, duration: 0.4, ease: "back.out" }, 0)
          .to("#pupil-r", { attr: { r: data.pupilR }, duration: 0.4, ease: "back.out" }, 0);

        if (mood === 'happy') {
            tl.to("#mat-hero", { 
                rotation: "+=360", 
                duration: 0.8, 
                ease: "back.inOut(1.2)" 
            });
        } else {
            gsap.set("#mat-hero", { rotation: 0 });
        }
        
        this.currentMood = mood;
    }

    _getMoodData(moodId) {
        const group = this.svg.querySelector(`#template-${moodId}`);
        return {
            browL: group.querySelector('.t-brow-l').getAttribute('d'),
            browR: group.querySelector('.t-brow-r').getAttribute('d'),
            mouthTop: group.querySelector('.t-mouth-top').getAttribute('d'),
            mouthBottom: group.querySelector('.t-mouth-bottom').getAttribute('d'),
            mouthFill: group.querySelector('.t-mouth-fill').getAttribute('d'),
            pupilL: group.querySelector('.t-pupil-l').getAttribute('r'),
            pupilR: group.querySelector('.t-pupil-r').getAttribute('r'),
            fillOpacity: group.querySelector('.t-meta').getAttribute('data-fill-opacity')
        };
    }
}

// Eksport dla przeglądarki
window.RobotMat = RobotMat;
