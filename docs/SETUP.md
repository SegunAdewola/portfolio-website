# Portfolio Website Setup Guide

## Quick Start

1. **Test locally**:
   ```bash
   python3 -m http.server 8000
   # Open http://localhost:8000
   ```

2. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

3. **Create GitHub repository**:
   - Go to GitHub and create new repository named `portfolio-website`
   - Make it public (required for free GitHub Pages)
   - Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Repository Settings > Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)

5. **Configure custom domain** (optional):
   - Purchase domain from Namecheap (~$11/year)
   - Configure DNS records
   - Add CNAME file to repository

Your website will be live at:
- GitHub: `https://YOUR_USERNAME.github.io/portfolio-website`
- Custom domain: `https://segunadewola.com`

## DNS Configuration (if using custom domain)

Add these records at your domain provider:

```
A Record: @ → 185.199.108.153
A Record: @ → 185.199.109.153
A Record: @ → 185.199.110.153
A Record: @ → 185.199.111.153
CNAME: www → yourusername.github.io
```
