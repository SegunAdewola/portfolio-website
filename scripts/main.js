// Main Application Controller
class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupLoadingAnimation();
        this.setupStaggeredAnimations();
        this.setupPerformanceOptimizations();
    }
    
    setupLoadingAnimation() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingOverlay = document.getElementById('loadingOverlay');
                if (loadingOverlay) {
                    loadingOverlay.classList.add('fade-out');
                    setTimeout(() => {
                        loadingOverlay.style.display = 'none';
                    }, 500);
                }
            }, 1000);
        });
    }
    
    setupStaggeredAnimations() {
        const rows = document.querySelectorAll('.sheet-row');
        rows.forEach((row, index) => {
            row.style.animationDelay = `${1.5 + index * 0.1}s`;
        });
    }
    
    setupPerformanceOptimizations() {
        // Intersection Observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.willChange = 'transform';
                } else {
                    entry.target.style.willChange = 'auto';
                }
            });
        });

        document.querySelectorAll('.hoverable-item').forEach(item => {
            observer.observe(item);
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});
