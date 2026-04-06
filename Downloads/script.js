// ===== Navigation =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.section');

// Home consists of hero + highlights + research overview (always visible together)
const homeSections = [
    document.querySelector('.hero-section'),
    document.querySelector('.highlights-section'),
    document.querySelector('.research-overview-section')
];

const innerSections = document.querySelectorAll('.section[id]:not(#home)');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Section navigation
function showSection(sectionId) {
    // Hide all inner sections
    innerSections.forEach(s => s.style.display = 'none');

    // Handle home vs other sections
    if (sectionId === 'home') {
        homeSections.forEach(s => s.style.display = '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        homeSections.forEach(s => s.style.display = 'none');
        const target = document.getElementById(sectionId);
        if (target) {
            target.style.display = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    navMenu.classList.remove('open');

    // Trigger animations
    requestAnimationFrame(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.remove('visible');
        });
        setTimeout(initAnimations, 100);
    });
}

// Click handlers for all navigation elements
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(link.dataset.section);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Publication Tabs =====
document.querySelectorAll('.pub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Deactivate all tabs
        document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.pub-content').forEach(c => c.classList.remove('active'));

        // Activate clicked tab
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add('active');
    });
});

// ===== Scroll Animations =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Add fade-in class to cards
function addFadeInClasses() {
    const selectors = [
        '.highlight-card',
        '.research-overview-card',
        '.timeline-item',
        '.person-card',
        '.director-card',
        '.research-card',
        '.project-card',
        '.pub-item',
        '.award-card',
        '.contact-card'
    ];

    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${i * 0.05}s`;
        });
    });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    addFadeInClasses();
    initAnimations();
});
