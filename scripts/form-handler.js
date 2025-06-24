// Contact Form Handler
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
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldValidation(input);
            });
        });
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        this.setLoadingState(true);
        
        try {
            const formData = new FormData(this.form);
            
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
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
            this.setFieldError(document.getElementById('name'), 'Name is required');
            isValid = false;
        }
        
        if (!email) {
            this.setFieldError(document.getElementById('email'), 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.setFieldError(document.getElementById('email'), 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject) {
            this.setFieldError(document.getElementById('subject'), 'Subject is required');
            isValid = false;
        }
        
        if (!message) {
            this.setFieldError(document.getElementById('message'), 'Message is required');
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
            this.setFieldError(field, `${this.getFieldLabel(field)} is required`);
            return false;
        }
        
        if (field.type === 'email' && !this.isValidEmail(value)) {
            this.setFieldError(field, 'Please enter a valid email address');
            return false;
        }
        
        this.setFieldSuccess(field);
        return true;
    }
    
    setFieldError(field, message) {
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
        inputs.forEach(input => {
            this.clearFieldValidation(input);
        });
    }
    
    getFieldLabel(field) {
        const label = this.form.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent : field.name;
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
        
        // Hide message after 5 seconds
        setTimeout(() => {
            this.formMessage.style.display = 'none';
        }, 5000);
    }
}

// Initialize form handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.formHandler = new FormHandler();
});
