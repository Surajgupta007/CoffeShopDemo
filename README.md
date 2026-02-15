# Brew & Bean - Premium Coffee Shop Website

A modern, responsive website for Brew & Bean coffee shop. This project showcases an ethically-sourced premium coffee business with a beautiful, user-friendly interface built with HTML5, CSS3, and JavaScript.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Gallery** - Filterable image gallery with smooth animations
- **Hero Carousel** - Eye-catching carousel on the homepage
- **Modern UI** - Clean, professional design with smooth transitions
- **Social Media Integration** - Direct links to Facebook and Instagram
- **Contact Information** - Easy-to-find business details and contact options
- **Service Highlights** - Showcase your unique selling points
- **Accessibility** - Built with semantic HTML and accessibility best practices

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and gradients
- **JavaScript (Vanilla)** - Interactive features without dependencies
- **Bootstrap 5** - Responsive grid and components
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Playfair Display & Poppins typography

## 📁 Project Structure

```
coffeeshop/
├── index.html          # Homepage
├── about.html          # About Us page
├── menu.html           # Menu page
├── gallery.html        # Image gallery
├── contact.html        # Contact page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── pexels-*.jpg    # Gallery images
│   └── ...
└── README.md           # Project documentation
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brew-bean.git
   cd brew-bean
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **View the website**
   - Open `http://localhost:8000` in your browser

## 📖 Usage

### Navigation
- Use the navigation bar to move between pages
- Responsive menu for mobile devices (hamburger menu)

### Gallery
- Filter images by category: All, Interior, Drinks, Events
- Hover over images to see the magnifying glass icon
- Smooth transitions between filter changes

### Contact
- Fill out the contact form on the Contact page
- Find business location and phone number
- Connect via social media (Facebook & Instagram)

## 📄 Pages

### Home (index.html)
- Hero carousel with call-to-action buttons
- Featured section highlighting why Brew & Bean stands out
- Quick navigation to other pages

### About (about.html)
- Company story and mission
- Team information
- Values and commitments

### Menu (menu.html)
- Coffee offerings with descriptions
- Pricing information
- Specialty drinks

### Gallery (gallery.html)
- Filterable image gallery
- Multiple categories (Interior, Drinks, Events)
- High-quality images showcasing the café

### Contact (contact.html)
- Contact form for inquiries
- Business location and hours
- Phone and email information
- Social media links

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6F4E37;      /* Coffee brown */
    --primary-dark: #523226;
    --accent-color: #C19A6B;       /* Gold accent */
    --accent-light: #D4AF85;
    /* ... other colors ... */
}
```

### Fonts
Modify Google Fonts imports in HTML `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Images
Replace images in the `images/` folder and update references in HTML files.

### Social Media Links
Update the footer social links in all HTML files:
```html
<a href="https://www.facebook.com/coffeshop.nichilo/" class="text-light me-3"><i class="fab fa-facebook"></i></a>
<a href="https://www.instagram.com/coffeeacademicsnp/" class="text-light me-3"><i class="fab fa-instagram"></i></a>
```

### Content
Edit HTML files directly to update:
- Business name and description
- Contact information
- Menu items
- Gallery descriptions
- Any text content

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request with improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Social Media

- **Facebook**: [https://www.facebook.com/coffeshop.nichilo/](https://www.facebook.com/coffeshop.nichilo/)
- **Instagram**: [https://www.instagram.com/coffeeacademicsnp/](https://www.instagram.com/coffeeacademicsnp/)
- **Email**: hello@brewbean.com
- **Phone**: (555) 123-4567
- **Location**: 123 Coffee Lane, Bean City

## 🙏 Acknowledgments

- Bootstrap 5 for responsive framework
- Font Awesome for beautiful icons
- Google Fonts for typography
- Pexels for stock images

---

**Happy brewing! ☕**

Made with ❤️ for coffee lovers everywhere.
