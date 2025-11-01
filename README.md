# BookHaven - Modern Book Community Website

A beautiful, modern website for book lovers and reading communities, built with HTML, CSS, JavaScript, and Tailwind CSS.

![BookHaven](https://img.shields.io/badge/status-ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 📚 Overview

BookHaven is a fully responsive, modern website designed for reading communities and bookstores. It features:

- **Clean, inviting design** with a modern books/reading aesthetic
- **Smooth animations** and interactive elements
- **Fully responsive** layout (mobile, tablet, desktop)
- **Multiple pages** with rich content and functionality
- **Modern color palette**: Teal (#2ac7a1), Orange (#ff8c42), Charcoal (#333), Off-white (#f5f5f5)

## ✨ Features

### Pages Included
1. **Home** - Hero section, featured books carousel, categories, events, blog preview
2. **Browse Books** - Filterable book grid with search functionality
3. **Book Detail** - Individual book page with reviews and recommendations
4. **Community & Events** - Event listings and book club information
5. **Blog** - Article listings with categories
6. **About Us** - Team information and company values
7. **Contact** - Contact form and business information

### Key Functionality
- ✅ **Swiper.js carousel** for featured books (auto-play, smooth transitions)
- ✅ **Intersection Observer** for scroll-triggered fade-in animations
- ✅ **Filter system** for book categories
- ✅ **Search functionality** for books
- ✅ **Mobile-responsive navigation** with hamburger menu
- ✅ **Lazy loading** for images
- ✅ **Reading list functionality** (localStorage)
- ✅ **Newsletter subscription** forms
- ✅ **Smooth scrolling** and parallax effects

## 🎨 Design System

### Color Palette
```css
Primary Colors:
- Teal: #2ac7a1 (buttons, accents, links)
- Dark Teal: #229980 (hover states)
- Orange: #ff8c42 (secondary accents, badges)

Neutral Colors:
- Charcoal: #333333 (text, dark backgrounds)
- Off-white: #f5f5f5 (backgrounds, cards)
- Light Gray: #e8e8e8 (borders, dividers)
```

### Typography
- **Display Font**: Georgia (serif) - Used for headings and titles
- **Body Font**: Inter, system-ui (sans-serif) - Used for body text
- **Font Sizes**: Responsive scaling from mobile to desktop

### Spacing
- Consistent padding/margin using Tailwind's spacing scale
- Section padding: py-20 (80px vertical)
- Card padding: p-6 to p-8 (24px-32px)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone or download** this project to your local machine

2. **Navigate to the project folder**:
   ```bash
   cd BookHaven
   ```

3. **Open in a browser**:
   - Simply open `index.html` in your browser, OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **View the website**:
   Open `http://localhost:8000` in your browser

### File Structure
```
BookHaven/
├── index.html              # Home page
├── browse.html             # Browse books page
├── book-detail.html        # Individual book detail page
├── community.html          # Community & events page
├── blog.html               # Blog listing page
├── about.html              # About us page
├── contact.html            # Contact page
├── styles.css              # Custom CSS styles
├── script.js               # JavaScript functionality
├── assets/                 # Image assets folder
│   ├── hero-library.jpg
│   ├── book1.jpg - book12.jpg
│   ├── category-*.jpg
│   ├── event1-4.jpg
│   ├── blog1-9.jpg
│   └── team1-4.jpg
└── README.md               # This file
```

## 📦 Dependencies

All dependencies are loaded via CDN - no installation required:

- **Tailwind CSS** (v3.x) - Utility-first CSS framework
  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  ```

- **Swiper.js** (v11) - Touch slider/carousel
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  ```

- **Google Fonts** (Inter) - Typography
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  ```

## 🖼️ Adding Your Own Images

The website uses placeholder image paths. To add your own images:

1. **Create an `assets/` folder** in the root directory (if not exists)

2. **Add images** with the following names:

   **Hero & General**:
   - `hero-library.jpg` (1920x1080) - Main hero background
   
   **Book Covers**:
   - `book1.jpg` to `book12.jpg` (600x900) - Book cover images
   
   **Categories**:
   - `category-fiction.jpg`
   - `category-nonfiction.jpg`
   - `category-selfhelp.jpg`
   - `category-children.jpg`
   - `category-graphic.jpg`
   - `category-mystery.jpg`
   (All 800x600)
   
   **Events**:
   - `event1.jpg` to `event4.jpg` (1200x800)
   
   **Blog**:
   - `blog1.jpg` to `blog9.jpg` (800x600)
   - `blog-featured.jpg` (1200x800)
   
   **Team**:
   - `team1.jpg` to `team4.jpg` (600x600)
   - `author-matt-haig.jpg` (600x600)

3. **Recommended sources** for free book/reading images:
   - [Unsplash](https://unsplash.com) - Search "books", "reading", "library"
   - [Pexels](https://pexels.com) - Free stock photos
   - [Pixabay](https://pixabay.com) - Free images
   - [OpenLibrary](https://openlibrary.org) - Book cover images

## 🎯 Customization Guide

### Changing Colors

Edit the Tailwind config in each HTML file's `<head>`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                charcoal: '#333333',      // Change these values
                'off-white': '#f5f5f5',
                teal: '#2ac7a1',
                orange: '#ff8c42',
                'dark-teal': '#229980'
            }
        }
    }
}
```

### Changing Typography

Update the font families in the Tailwind config:

```javascript
fontFamily: {
    'display': ['Your-Serif-Font', 'serif'],
    'body': ['Your-Sans-Font', 'sans-serif']
}
```

### Adding New Books

In `browse.html`, duplicate a book card and update:

```html
<div class="book-card" data-category="fiction">
    <div class="overflow-hidden">
        <img src="assets/your-book.jpg" alt="Book Title" loading="lazy">
    </div>
    <div class="p-4">
        <span class="badge badge-new mb-2">New</span>
        <h3 class="text-xl font-display font-bold mb-2">Your Book Title</h3>
        <p class="author text-gray-600 text-sm mb-3">by Author Name</p>
        <div class="flex items-center mb-3">
            <span class="text-orange">⭐⭐⭐⭐⭐</span>
            <span class="ml-2 text-sm text-gray-600">4.8/5</span>
        </div>
        <p class="text-gray-600 text-sm mb-4">Book description...</p>
        <div class="flex gap-2">
            <a href="book-detail.html?id=X" class="flex-1 text-center btn-primary py-2 text-sm">View Details</a>
            <button class="add-to-list-btn px-4 bg-gray-200 rounded-lg hover:bg-gray-300" data-book-id="X" data-book-title="Your Book">❤️</button>
        </div>
    </div>
</div>
```

## 🔧 JavaScript Features

### Filter System
```javascript
// Located in script.js
initializeFilters(); // Filters books by category
```

### Search Functionality
```javascript
initializeSearch(); // Real-time book search
```

### Reading List (LocalStorage)
```javascript
readingList.add(bookId, bookTitle);  // Add to list
readingList.remove(bookId);           // Remove from list
readingList.getAll();                 // Get all items
```

### Carousel Configuration
```javascript
const swiper = new Swiper('.featured-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 5000 },
    // ... more options in script.js
});
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column layouts)
- **Tablet**: 768px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3-4 column layouts)

## ⚡ Performance Optimizations

- ✅ Lazy loading images with `loading="lazy"`
- ✅ Intersection Observer for scroll animations (reduces CPU usage)
- ✅ CSS animations with GPU acceleration
- ✅ Minimal external dependencies
- ✅ Optimized Tailwind classes (purging not needed with CDN)

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you create improvements, consider sharing them!

## 📞 Support & Contact

For questions or suggestions:
- Email: hello@bookhaven.com (example)
- Issues: Create an issue in this repository

## 🎉 Acknowledgments

- **Tailwind CSS** - For the amazing utility framework
- **Swiper.js** - For the smooth carousel functionality
- **Google Fonts** - For Inter font family
- **Unsplash/Pexels** - For free stock images (if used)

---

**Built with ❤️ for book lovers everywhere**

Enjoy using BookHaven! Happy Reading! 📚✨
