# Segun Adewola - Portfolio Website

A modern, interactive portfolio website showcasing my experience as a Software Engineer and Data Scientist.

## 🚀 Features

- **Interactive Design**: Spreadsheet-inspired layout with hover tooltips
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Contact Form**: Working contact form with validation
- **Performance**: Optimized loading animations and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Custom Properties (CSS Variables)
- **Forms**: FormSubmit.co for backend processing
- **Hosting**: GitHub Pages ready

## 📁 Project Structure

```
segun-adewola-portfolio/
├── index.html              # Main page
├── thank-you.html          # Form success page
├── styles/
│   └── main.css           # All styles
├── scripts/
│   ├── data.js            # Portfolio data
│   ├── theme-manager.js   # Theme switching
│   ├── tooltip-manager.js # Tooltip system
│   ├── form-handler.js    # Contact form
│   └── main.js           # Main app logic
├── assets/
│   ├── documents/         # Resume and documents
│   ├── images/           # Profile images
│   └── icons/            # Favicons
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine rules
└── CNAME                 # Custom domain (optional)
```

## 🚀 Deployment

### GitHub Pages
1. Create repository named: `yourusername.github.io`
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Site will be live at: `https://yourusername.github.io`

### Custom Domain
1. Add your domain to the CNAME file
2. Configure DNS with your domain provider:
   ```
   Type: CNAME, Name: www, Value: yourusername.github.io
   Type: A, Name: @, Values: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   ```

## 📊 Analytics Setup

1. Replace `GA_MEASUREMENT_ID` in index.html with your Google Analytics ID
2. Set up Google Search Console for SEO monitoring

## 📧 Contact Form Setup

The contact form uses FormSubmit.co and is configured to:
- Send emails to: segunadewolai@gmail.com
- Redirect to: thank-you.html after submission
- Include spam protection via honeypot

## 🎨 Customization

### Adding New Experience
Edit `scripts/data.js` and add tooltip data, then update the HTML structure.

### Changing Colors
Modify CSS custom properties in `styles/main.css`:
```css
:root {
    --accent-color: #your-color;
    --bg-primary: #your-background;
}
```

### Adding New Sections
Follow the existing `.sheet-row` pattern in `index.html`.

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Segun Adewola
