# Content Update Guide

## Easy Updates

All content is in `/assets/js/portfolio-data.js`. Edit this file to update your portfolio.

### Adding New Experience

```javascript
{
    id: "exp-5", // Make unique
    title: "Your Job Title",
    company: "Company Name",
    companyUrl: "https://company.com",
    period: "Jan 2025 - Present",
    icon: "💻",
    highlights: [
        "Built <span class=\"highlight\">amazing things</span>",
        "Improved performance by <span class=\"highlight\">50%</span>"
    ]
}
```

### Adding New Project

```javascript
{
    id: "proj-5", // Make unique
    title: "Project Name",
    icon: "🚀",
    period: "Jan 2025 - Mar 2025",
    description: "What your project does",
    technologies: ["Python", "React", "AWS"],
    achievements: [
        "Built <span class=\"highlight\">cool feature</span>"
    ],
    links: [
        { type: "github", url: "https://github.com/you/repo", label: "GitHub" }
    ]
}
```

### Deploy Changes

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your website updates automatically in 1-2 minutes!
