// Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    
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

    const rows = document.querySelectorAll('.sheet-row');
    rows.forEach((row, index) => {
        row.style.animationDelay = `${1.5 + index * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.willChange = 'transform';
            } else {
                entry.target.style.willChange = 'auto';
            }
        });
    });

    document.querySelectorAll('.experience-item, .project-item').forEach(item => {
        observer.observe(item);
    });
});

function initializePortfolio() {
    if (!window.PORTFOLIO_DATA) {
        console.error('Portfolio data not loaded');
        return;
    }

    const data = window.PORTFOLIO_DATA;
    
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = createHeader(data.personal);
    }
    
    const bioContent = document.getElementById('bio-content');
    if (bioContent) {
        bioContent.innerHTML = `<p class="bio-text">${data.personal.bio}</p>`;
    }
    
    const educationContent = document.getElementById('education-content');
    if (educationContent) {
        educationContent.innerHTML = createEducationList(data.education);
    }
    
    const experienceContent = document.getElementById('experience-content');
    if (experienceContent) {
        experienceContent.innerHTML = createExperienceList(data.experience);
    }
    
    const projectsContent = document.getElementById('projects-content');
    if (projectsContent) {
        projectsContent.innerHTML = createProjectsGrid(data.projects);
    }
    
    const awardsContent = document.getElementById('awards-content');
    if (awardsContent) {
        awardsContent.innerHTML = createAwardsList(data.awards);
    }
    
    const techStackContent = document.getElementById('techstack-content');
    if (techStackContent) {
        techStackContent.innerHTML = createTechStack(data.techStack);
    }
    
    const interestsContent = document.getElementById('interests-content');
    if (interestsContent) {
        interestsContent.innerHTML = createInterestsGrid(data.interests);
    }
    
    const leadershipContent = document.getElementById('leadership-content');
    if (leadershipContent) {
        leadershipContent.innerHTML = createLeadershipList(data.leadership);
    }
    
    new ThemeManager();
    new FormHandler();
}

window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});
