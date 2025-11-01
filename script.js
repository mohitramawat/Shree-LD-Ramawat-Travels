// LDRAmawat Travels - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Navbar Scroll Effect ==========
    const navbar = document.getElementById('navbar');
    const topBar = document.getElementById('topBar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Hide top bar on scroll
        if (topBar && currentScroll > 50) {
            topBar.style.transform = 'translateY(-100%)';
            topBar.style.opacity = '0';
        } else if (topBar) {
            topBar.style.transform = 'translateY(0)';
            topBar.style.opacity = '1';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========== Mobile Menu Toggle ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // ========== Swiper Carousel ==========
    if (document.querySelector('.tourSwiper')) {
        const swiper = new Swiper('.tourSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }
    
    // ========== Form Handling ==========
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will get back to you shortly.');
        });
    });
    
    // ========== Date Validation ==========
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        const today = new Date().toISOString().split('T')[0];
        input.setAttribute('min', today);
    });
    
    // ========== Footer Parallax Effect ==========
    const footer = document.querySelector('footer');
    if (footer) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const footerOffset = footer.offsetTop;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calculate parallax effect when footer comes into view
            if (scrollPosition + windowHeight > footerOffset) {
                const parallaxValue = (scrollPosition + windowHeight - footerOffset) * 0.3;
                footer.style.backgroundPositionY = -parallaxValue + 'px';
                
                // Reveal big company name text as user scrolls
                const scrollProgress = (scrollPosition + windowHeight - footerOffset) / (documentHeight - footerOffset);
                if (scrollProgress > 0.2) {
                    footer.classList.add('reveal-text');
                } else {
                    footer.classList.remove('reveal-text');
                }
            }
        });
    }
    
});

// ========== Window Load Events ==========
window.addEventListener('load', () => {
    console.log('LDRAmawat Travels - Website Loaded Successfully!');
});
