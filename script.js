// Multi-page website functionality with mode switching
document.addEventListener('DOMContentLoaded', function() {
    const workModeBtn = document.getElementById('workModeBtn');
    const playModeBtn = document.getElementById('playModeBtn');
    const workNav = document.getElementById('workNav');
    const playNav = document.getElementById('playNav');
    const workContent = document.getElementById('workContent');
    const playContent = document.getElementById('playContent');
    const body = document.body;

    // Initialize in work mode
    body.classList.add('work-mode');

    // Work mode button click
    workModeBtn.addEventListener('click', function() {
        // Update button states
        workModeBtn.classList.add('active');
        playModeBtn.classList.remove('active');
        
        // Update navigation
        if (workNav) {
            workNav.classList.add('active');
        }
        if (playNav) {
            playNav.classList.remove('active');
        }
        
        // Update content
        if (workContent) {
            workContent.classList.add('active');
        }
        if (playContent) {
            playContent.classList.remove('active');
        }
        
        // Update body class for styling
        body.classList.remove('play-mode');
        body.classList.add('work-mode');
        
        // Update toggle class
        document.querySelector('.mode-toggle').classList.remove('play-mode');
        
        // Update URL without page reload (only on main page)
        if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('/')) {
            history.pushState({mode: 'work'}, '', '#work');
        }
    });

    // Play mode button click
    playModeBtn.addEventListener('click', function() {
        // Update button states
        playModeBtn.classList.add('active');
        workModeBtn.classList.remove('active');
        
        // Update navigation
        if (playNav) {
            playNav.classList.add('active');
        }
        if (workNav) {
            workNav.classList.remove('active');
        }
        
        // Update content
        if (playContent) {
            playContent.classList.add('active');
        }
        if (workContent) {
            workContent.classList.remove('active');
        }
        
        // Update body class for styling
        body.classList.remove('work-mode');
        body.classList.add('play-mode');
        
        // Update toggle class
        document.querySelector('.mode-toggle').classList.add('play-mode');
        
            // Update URL without page reload (only on main page)
            if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('/')) {
                history.pushState({mode: 'play'}, '', '#play');
            }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.mode === 'play') {
            playModeBtn.click();
        } else {
            workModeBtn.click();
        }
    });

    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add hover effects to research items
    const researchItems = document.querySelectorAll('.research-item');
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Add hover effects to presentation items
    const presentationItems = document.querySelectorAll('.presentation-item');
    presentationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Add hover effects to problem items
    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Add hover effects to placeholder items
    const placeholderItems = document.querySelectorAll('.placeholder-item');
    placeholderItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });

    // Add smooth scrolling for anchor links within the same page (only for hash links)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only handle hash links, not regular page links
            if (href !== '#' && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add loading animation for sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });

    // Initialize the page based on URL hash
    if (window.location.hash === '#play') {
        playModeBtn.click();
    } else {
        workModeBtn.click();
    }
}); 