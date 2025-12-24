class HomeAnimation {
    constructor() {
        this.typewriter = null;
        this.init();
    }

    init() {
        const quoteElement = document.getElementById('quote-display');
        this.typewriter = new Typewriter(quoteElement);
        this.animateEntrance();
        this.setupInteractions();
    }

    animateEntrance() {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to('.logo-container', {
            opacity: 1,
            y: 0,
            duration: 1.2
        })
            .to('.quote-section', {
                opacity: 1,
                y: 0,
                duration: 1,
                onComplete: () => {
                    setTimeout(() => {
                        this.typewriter.start();
                    }, 800);
                }
            }, '-=0.3')
            .to('.cta-section', {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.2');

        gsap.to('.main-logo', {
            filter: 'drop-shadow(0 0 25px rgba(200, 165, 93, 0.5))',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    setupInteractions() {
        const logoContainer = document.querySelector('.logo-container');
        let isLogoAnimating = false;

        logoContainer.addEventListener('click', () => {
            if (isLogoAnimating) return;

            isLogoAnimating = true;

            gsap.to(logoContainer, {
                scale: 1.05,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    isLogoAnimating = false;
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HomeAnimation();
});