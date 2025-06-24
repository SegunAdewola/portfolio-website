// Tooltip Management System
class TooltipManager {
    constructor() {
        this.currentTooltip = null;
        this.tooltips = new Map();
        this.init();
    }
    
    init() {
        this.createTooltips();
        this.bindEvents();
    }
    
    createTooltips() {
        // Create tooltip container
        const container = document.createElement('div');
        container.id = 'tooltip-container';
        document.body.appendChild(container);
        
        // Create all tooltips
        const tooltipData = {
            'experience-1': {
                title: '🚀 Software Engineer - RPGMaster',
                content: `
                    <ul>
                        <li>Selected by <span class="tooltip-highlight">Qualcomm and Microsoft</span> judges post-hackathon</li>
                        <li>Developing AI DungeonMaster experience inspired by <span class="tooltip-highlight">Dungeons & Dragons</span></li>
                        <li>Designed for next-gen <span class="tooltip-highlight">Snapdragon X-Elite</span> edge devices</li>
                        <li>Leading cross-functional team in AI gaming innovation</li>
                    </ul>
                `
            },
            'experience-2': {
                title: '📊 Data Scientist, FX Pricing',
                content: `
                    <ul>
                        <li>Developed Python-based FX rate tracker using <span class="tooltip-highlight">Playwright and Requests</span></li>
                        <li>Reduced manual data collection time by <span class="tooltip-highlight">50%</span></li>
                        <li>Led to <span class="tooltip-highlight">$150K revenue increase</span> in first month</li>
                        <li>Increased pricing-related product activations by <span class="tooltip-highlight">12%</span></li>
                        <li>Designed Power BI dashboards, increasing team productivity by <span class="tooltip-highlight">22%</span></li>
                    </ul>
                `
            },
            'tech-python': {
                title: '🐍 Python',
                content: `
                    <strong>Projects:</strong> LLMConquest 4, Remit-Track, Project Hot-sauce, FX Rate Tracker<br>
                    <strong>Libraries:</strong> Pandas, NumPy, Matplotlib, PyTorch, Requests, Playwright<br>
                    <strong>Experience:</strong> 3+ years in data science, automation, and AI/ML
                `
            },
            'interest-arsenal': {
                title: '⚽ Arsenal FC',
                content: `
                    Passionate supporter of Arsenal Football Club since childhood.<br>
                    Follow Premier League closely and enjoy discussing tactics and player development.<br>
                    <strong>Click to visit Arsenal's official website!</strong>
                `
            }
            // Add more tooltips as needed
        };
        
        Object.entries(tooltipData).forEach(([id, data]) => {
            const tooltip = this.createTooltip(id, data);
            container.appendChild(tooltip);
            this.tooltips.set(id, tooltip);
        });
    }
    
    createTooltip(id, data) {
        const tooltip = document.createElement('div');
        tooltip.className = 'hover-tooltip';
        tooltip.id = `tooltip-${id}`;
        tooltip.innerHTML = `
            <div class="tooltip-title">${data.title}</div>
            <div class="tooltip-content">${data.content}</div>
        `;
        return tooltip;
    }
    
    show(element, tooltipId) {
        this.hide(); // Hide any existing tooltip
        
        const tooltip = this.tooltips.get(tooltipId);
        if (!tooltip) return;
        
        this.currentTooltip = tooltip;
        this.positionTooltip(element, tooltip);
        tooltip.classList.add('show');
    }
    
    hide() {
        if (this.currentTooltip) {
            this.currentTooltip.classList.remove('show');
            this.currentTooltip = null;
        }
    }
    
    positionTooltip(element, tooltip) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 10;
        
        // Boundary checks
        left = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
        if (top < 10) top = rect.bottom + 10;
        
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }
    
    bindEvents() {
        document.addEventListener('mouseover', (e) => {
            const element = e.target.closest('.hoverable-item');
            if (element) {
                const tooltipId = element.getAttribute('data-tooltip');
                if (tooltipId) {
                    this.show(element, tooltipId);
                }
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.hoverable-item')) {
                this.hide();
            }
        });
        
        window.addEventListener('scroll', () => {
            this.hide();
        });
    }
}

// Initialize tooltip manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tooltipManager = new TooltipManager();
});
