// ===== Elements =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('[data-section]');
const homeParts = document.querySelectorAll('.hero-section, .home-part');
const pageSections = document.querySelectorAll('.page-section');

// Mobile menu toggle
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

// Section navigation
function showSection(id) {
    if (id === 'home') {
        homeParts.forEach(s => s.style.display = '');
        pageSections.forEach(s => s.style.display = 'none');
    } else {
        homeParts.forEach(s => s.style.display = 'none');
        pageSections.forEach(s => s.style.display = 'none');
        const target = document.getElementById(id);
        if (target) target.style.display = '';
    }

    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.section === id);
    });

    navMenu.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.remove('visible'));
        initObserver();
    }, 100);
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.section);
    });
});

// Navbar scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// Publication tabs
document.querySelectorAll('.pub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.pub-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const t = document.getElementById(tab.dataset.tab);
        if (t) t.classList.add('active');
    });
});

// Scroll animations
function initObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// Lightbox
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const items = document.querySelectorAll('.gallery-item img');
    let idx = 0;

    items.forEach((img, i) => {
        img.addEventListener('click', () => {
            idx = i;
            lbImg.src = img.src.replace(/=w\d+/, '=w1600');
            lb.style.display = 'flex';
        });
    });

    document.getElementById('lbClose').addEventListener('click', () => lb.style.display = 'none');
    document.getElementById('lbPrev').addEventListener('click', () => {
        idx = (idx - 1 + items.length) % items.length;
        lbImg.src = items[idx].src.replace(/=w\d+/, '=w1600');
    });
    document.getElementById('lbNext').addEventListener('click', () => {
        idx = (idx + 1) % items.length;
        lbImg.src = items[idx].src.replace(/=w\d+/, '=w1600');
    });
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.style.display = 'none'; });
    document.addEventListener('keydown', (e) => {
        if (lb.style.display === 'none') return;
        if (e.key === 'Escape') lb.style.display = 'none';
        if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
        if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const selectors = '.highlight-card,.rp-card,.news-row,.person-card,.director-card,.research-block,.project-card,.pub-table tr,.awards-table tr,.contact-item,.gallery-item';
    document.querySelectorAll(selectors).forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${Math.min(i * 0.03, 0.5)}s`;
    });
    initObserver();
    initLightbox();
});
