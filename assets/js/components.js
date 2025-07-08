// Reusable Component Functions

// Header Component
function createHeader(data) {
    return `
        <h1 class="name">${data.name}</h1>
        <p class="title">${data.title}</p>
        <p class="location">📍 ${data.location}</p>
        
        <div class="contact-links">
            <a href="${data.linkedin}" class="contact-link" target="_blank" rel="noopener">💼 LinkedIn</a>
            <a href="${data.github}" class="contact-link" target="_blank" rel="noopener">💻 GitHub</a>
            <a href="#contact" class="contact-link" onclick="scrollToContact()">📧 Contact Me</a>
        </div>
        
        <a href="./assets/documents/segun-adewola-resume.pdf" class="download-btn" target="_blank" rel="noopener">
            📄 Download Resume
        </a>
    `;
}

// Education Component
function createEducationList(educationData) {
    return `
        <div class="education-list">
            ${educationData.map(edu => `
                <div class="education-item">
                    <span class="icon">🏫</span>
                    <div class="education-details">
                        <div class="education-school">${edu.school}</div>
                        <div class="education-degree">${edu.degree}</div>
                        <div class="education-period">${edu.period}${edu.location ? ` | ${edu.location}` : ''}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</div>
                        ${edu.highlights.length > 0 ? `
                            <div class="education-highlights">
                                ${edu.highlights.map(highlight => `<small>• ${highlight}</small>`).join('<br>')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Experience Component
function createExperienceList(experienceData) {
    return `
        <div class="experience-list">
            ${experienceData.map(exp => `
                <div class="experience-item" onclick="toggleDropdown('${exp.id}')">
                    <div class="experience-header">
                        <span class="icon">${exp.icon}</span>
                        <div class="experience-details">
                            <div class="experience-title">${exp.title}</div>
                            <div class="experience-company">
                                ${exp.companyUrl !== '#' ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${exp.company}</a>` : exp.company}
                            </div>
                            <div class="experience-period">${exp.period}</div>
                        </div>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="experience-dropdown">
                        <div class="dropdown-content">
                            <ul>
                                ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Projects Component
function createProjectsGrid(projectsData) {
    return `
        <div class="projects-grid">
            ${projectsData.map(project => `
                <div class="project-item" onclick="toggleDropdown('${project.id}')">
                    <div class="project-header">
                        <div class="project-info">
                            <span class="icon">${project.icon}</span>
                            <div class="project-title">${project.title}</div>
                        </div>
                        <div class="project-links">
                            ${project.links.map(link => `
                                <a href="${link.url}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                                    ${link.label}
                                </a>
                            `).join('')}
                            <span class="expand-icon">▼</span>
                        </div>
                    </div>
                    <div class="project-dropdown">
                        <div class="dropdown-content">
                            <p style="margin-bottom: 10px; color: var(--text-secondary); font-style: italic;">${project.period}</p>
                            <p style="margin-bottom: 15px; color: var(--text-secondary);">${project.description}</p>
                            <p style="margin-bottom: 10px; font-weight: 600;">Technologies: ${project.technologies.join(', ')}</p>
                            <ul>
                                ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Other components...
function createAwardsList(awardsData) {
    return `
        <div class="awards-list">
            ${awardsData.map(award => `
                <div class="award-item">
                    <span class="icon">${award.icon}</span>
                    <div>
                        <strong>${award.title}</strong><br>
                        <small style="color: var(--text-secondary);">${award.subtitle}</small><br>
                        <small style="color: var(--text-tertiary);">${award.description}</small>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function createTechStack(techStackData) {
    const categories = [
        { title: 'Languages', icon: '💬', items: techStackData.languages },
        { title: 'Frameworks & Libraries', icon: '🏗️', items: techStackData.frameworks },
        { title: 'Tools & Platforms', icon: '🛠️', items: techStackData.tools },
        { title: 'Databases', icon: '🗄️', items: techStackData.databases }
    ];

    return `
        <div class="tech-stack-container">
            ${categories.map(category => `
                <div class="tech-category">
                    <div class="tech-category-title">
                        <span class="icon">${category.icon}</span>
                        ${category.title}
                    </div>
                    <div class="tech-grid">
                        ${category.items.map(item => `
                            <div class="tech-item">
                                <span class="icon">${item.icon}</span>
                                ${item.name}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function createInterestsGrid(interestsData) {
    return `
        <div class="interests-grid">
            ${interestsData.map(interest => `
                <div class="interest-item" ${interest.link ? `onclick="window.open('${interest.link}', '_blank')"` : ''}>
                    <span class="icon">${interest.icon}</span>
                    ${interest.name}
                </div>
            `).join('')}
        </div>
    `;
}

function createLeadershipList(leadershipData) {
    return `
        <div class="leadership-list">
            ${leadershipData.map(item => `
                <div class="leadership-item">
                    <span class="icon">${item.icon}</span>
                    <div>
                        <strong>${item.title}</strong><br>
                        <small style="color: var(--text-secondary);">${item.subtitle}</small><br>
                        <small style="color: var(--text-tertiary);">${item.period}</small>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Utility Functions
function toggleDropdown(id) {
    const item = document.querySelector(`[onclick*="${id}"]`);
    if (item) {
        item.classList.toggle('expanded');
    }
}

function scrollToContact() {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Theme and Form Management Classes
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        this.applyTheme(initialTheme);
        this.bindEvents();
    }

    toggle() {
        const current = document.body.hasAttribute('data-theme') ? 'dark' : 'light';
        const newTheme = current === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
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

    updateToggleButton(icon, text) {
        const iconElement = document.getElementById('theme-icon');
        const textElement = document.getElementById('theme-text');
        if (iconElement) iconElement.textContent = icon;
        if (textElement) textElement.textContent = text;
    }

    bindEvents() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }
    }
}

class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.formMessage = document.getElementById('formMessage');
        this.init();
    }

    init() {
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        const inputs = this.form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldValidation(input));
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) return;
        
        this.setLoadingState(true);
        
        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                this.showMessage('Thank you! Your message has been sent successfully.', 'success');
                this.form.reset();
                this.clearAllValidation();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (!name) {
            this.setFieldError(document.getElementById('name'));
            isValid = false;
        }
        
        if (!email || !this.isValidEmail(email)) {
            this.setFieldError(document.getElementById('email'));
            isValid = false;
        }
        
        if (!subject) {
            this.setFieldError(document.getElementById('subject'));
            isValid = false;
        }
        
        if (!message) {
            this.setFieldError(document.getElementById('message'));
            isValid = false;
        }
        
        if (!isValid) {
            this.showMessage('Please fill in all required fields correctly.', 'error');
        }
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        
        if (!value) {
            this.setFieldError(field);
            return false;
        }
        
        if (field.type === 'email' && !this.isValidEmail(value)) {
            this.setFieldError(field);
            return false;
        }
        
        this.setFieldSuccess(field);
        return true;
    }

    setFieldError(field) {
        field.classList.add('error');
        field.classList.remove('success');
    }

    setFieldSuccess(field) {
        field.classList.add('success');
        field.classList.remove('error');
    }

    clearFieldValidation(field) {
        field.classList.remove('error', 'success');
    }

    clearAllValidation() {
        const inputs = this.form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => this.clearFieldValidation(input));
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }

    showMessage(message, type) {
        this.formMessage.textContent = message;
        this.formMessage.className = `form-message ${type}`;
        this.formMessage.style.display = 'block';
        
        setTimeout(() => {
            this.formMessage.style.display = 'none';
        }, 5000);
    }
}

// Make functions available globally
window.toggleDropdown = toggleDropdown;
window.scrollToContact = scrollToContact;
window.ThemeManager = ThemeManager;
window.FormHandler = FormHandler;
