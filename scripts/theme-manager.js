// Theme Management System
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }
    
    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
    }
    
    applyTheme(theme) {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            this.updateToggleButton('☀️', 'Light');
        } else {
            document.body.removeAttribute('data-theme');
            this.updateToggleButton('🌙', 'Dark');
        }
    }
    
    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
    
    updateToggleButton(icon, text) {
        const iconElement = document.getElementById('theme-icon');
        const textElement = document.getElementById('theme-text');
        
        if (iconElement) iconElement.textContent = icon;
        if (textElement) textElement.textContent = text;
    }
    
    bindEvents() {
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                this.toggle();
            });
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Global toggle function for backwards compatibility
function toggleTheme() {
    if (window.themeManager) {
        window.themeManager.toggle();
    }
}
