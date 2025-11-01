// Tour Packages Page - Filtering & Interaction

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Category Tab Filtering ==========
    const categoryTabs = document.querySelectorAll('.category-tab');
    const packageCards = document.querySelectorAll('.package-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'bg-travel-blue', 'text-white');
                t.classList.add('bg-gray-100', 'text-gray-700');
            });
            
            // Add active class to clicked tab
            tab.classList.add('active', 'bg-travel-blue', 'text-white');
            tab.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Get selected category
            const selectedCategory = tab.getAttribute('data-category');
            
            // Filter packages
            packageCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category');
                
                if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Set initial active tab
    const firstTab = document.querySelector('.category-tab');
    if (firstTab) {
        firstTab.classList.add('bg-travel-blue', 'text-white');
        firstTab.classList.remove('bg-gray-100', 'text-gray-700');
    }
    
    // ========== Advanced Filter System ==========
    const filterDestination = document.getElementById('filterDestination');
    const filterBudget = document.getElementById('filterBudget');
    const filterDuration = document.getElementById('filterDuration');
    const searchBtn = document.getElementById('searchBtn');
    
    function applyFilters() {
        const destination = filterDestination.value;
        const budget = filterBudget.value;
        const duration = filterDuration.value;
        
        packageCards.forEach(card => {
            const cardDestination = card.getAttribute('data-destination');
            const cardBudget = card.getAttribute('data-budget');
            const cardDuration = card.getAttribute('data-duration');
            
            let showCard = true;
            
            // Check destination
            if (destination !== 'all') {
                if (destination === 'domestic' || destination === 'international') {
                    const category = card.getAttribute('data-category');
                    if (!category.includes(destination)) {
                        showCard = false;
                    }
                } else if (cardDestination !== destination) {
                    showCard = false;
                }
            }
            
            // Check budget
            if (budget !== 'all' && cardBudget !== budget) {
                showCard = false;
            }
            
            // Check duration
            if (duration !== 'all' && cardDuration !== duration) {
                showCard = false;
            }
            
            // Show or hide card
            if (showCard) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, 100);
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', applyFilters);
    }
    
    // Apply filters on select change
    if (filterDestination) filterDestination.addEventListener('change', applyFilters);
    if (filterBudget) filterBudget.addEventListener('change', applyFilters);
    if (filterDuration) filterDuration.addEventListener('change', applyFilters);
    
    // ========== Wishlist Functionality ==========
    const wishlistButtons = document.querySelectorAll('.package-card button i.fa-heart');
    
    wishlistButtons.forEach(btn => {
        btn.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fas')) {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('bg-gray-100');
                this.classList.add('bg-red-50');
                icon.classList.add('text-red-500');
            } else {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.remove('bg-red-50');
                this.classList.add('bg-gray-100');
                icon.classList.remove('text-red-500');
            }
        });
    });
    
    // ========== Smooth Scroll Animation ==========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    packageCards.forEach(card => {
        observer.observe(card);
    });
    
    // ========== Package Card Hover Effect ==========
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .package-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
`;
document.head.appendChild(style);
