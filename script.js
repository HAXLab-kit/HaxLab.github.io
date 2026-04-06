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

// ===== Person Detail Profiles =====
const personData = {
    prof_kim: {
        name: 'Youngwon Kim', nameKr: '김영원',
        photo: 'images/people/prof_kim.jpg',
        role: 'Assistant Professor, Director',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'kim01@kumoh.ac.kr',
        tags: ['XR','VR','AR','MR','HCI','Metaverse'],
        bio: 'HAX Lab의 디렉터로서 Extended Reality(XR) 기술과 인간-컴퓨터 상호작용(HCI)을 연구하고 있습니다. VR, AR, MR 환경에서의 직관적인 멀티모달 인터랙션 기법, 협업 시스템, 그리고 메타버스 기술 개발에 집중하고 있습니다.',
        research: ['멀티모달 인터랙션 (시선, 음성, 터치)', '몰입형 VR/AR 인터랙션', '다중 사용자 협업 가상 환경', 'Embodied XR 인터랙션 및 아바타 모션 추정'],
        publications: [
            {title: '"What Makes Object Referencing Clear?" - XR Collaboration Strategies', venue: 'IEEE ISMAR 2025'},
            {title: '"Trade-offs in Virtual Grasping: Interaction Fidelity and Object Affordance"', venue: 'ACM VRST 2025'},
            {title: '"Head-Driven Algorithm for Estimating Upper and Lower Body Motion in VR"', venue: 'IEEE Access (SCIE), 2025'},
            {title: '"ITap: Index Finger Tap Interaction by Gaze Integration"', venue: 'Sensors (SCIE), 2025'},
            {title: '"Immersive VR Navigation for Accessibility"', venue: 'Electronics (SCIE), 2025'}
        ],
        projects: ['NRF 신진연구자지원사업 - XR-Physical AI 기반 Human-Digital Twin 인터랙션 (2026-2029)', '국방 제품 설계 및 유지보수 서비스 실증 (2024-2026)', '화재현장 자동 복원 및 VR 기반 몰입형 수사 기술 (2025-2027)']
    },
    lee_jemin: {
        name: 'Jemin Lee', nameKr: '이제민',
        photo: 'images/people/lee_jemin.jpg',
        role: 'M.S. Student',
        dept: 'School of Computer Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'char3941@kumoh.ac.kr',
        tags: ['VR','Games','Convergence Contents'],
        bio: '2025년 2학기부터 석사과정을 시작했으며, VR 환경에서의 게임 및 융합 콘텐츠 연구에 관심을 가지고 있습니다.',
        research: ['VR 기반 게임 인터랙션', '가상 환경에서의 물체 파지(Grasping) 기법', '융합 콘텐츠 개발'],
        publications: [
            {title: '"Trade-offs in Virtual Grasping: Interaction Fidelity and Object Affordance"', venue: 'ACM VRST 2025 (Presenter)'}
        ]
    },
    kim_jeonghyeon: {
        name: 'Jeonghyeon Kim', nameKr: '김정현',
        photo: 'images/people/kim_jeonghyeon.jpg',
        role: 'M.S. Student',
        dept: 'School of Computer Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'dnrgusrla1@kumoh.ac.kr',
        tags: ['Collaboration','Multimodal Interaction'],
        bio: '2025년 2학기부터 석사과정을 시작했으며, XR 환경에서의 협업 및 멀티모달 인터랙션 연구에 집중하고 있습니다.',
        research: ['XR 협업 환경에서의 객체 참조 전략', '멀티모달 인터랙션 기법', '다중 사용자 VR 어셈블리 시뮬레이션'],
        publications: [
            {title: '"What Makes Object Referencing Clear? Investigating Strategies for XR Collaboration"', venue: 'IEEE ISMAR 2025 (Presenter)'},
            {title: '"Multi-User VR Assembly and Manufacture Design: Multimodal Object Modeling"', venue: 'ACM VRST 2025 Demo'}
        ],
        awards: ['국회의원 표창 (2025.08)', 'AI 캡스톤디자인 경진대회 장려상 (2024.12)', '한국디지털콘텐츠학회 추계학술대회 동상 (2024.11)']
    },
    kang_hyeongjun: {
        name: 'Hyeongjun Kang', nameKr: '강형준',
        photo: 'images/people/kang_hyeongjun.jpg',
        role: 'Undergraduate Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'joh0816@gmail.com',
        tags: ['Immersive Technologies','XR Contents'],
        bio: '2024년 2학기부터 학부 연구생으로 참여하고 있으며, 몰입형 기술과 XR 콘텐츠 개발에 관심을 가지고 있습니다.',
        research: ['몰입형 XR 콘텐츠 개발', 'XR 인터랙션 기술']
    },
    lee_donghee: {
        name: 'Donghee Lee', nameKr: '이동희',
        photo: 'images/people/lee_donghee.jpg',
        role: 'Undergraduate Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'furyburst@naver.com',
        tags: ['VR','HCI','Games'],
        bio: '2026년 1학기부터 학부 연구생으로 합류했으며, VR, HCI, 게임 분야에 관심을 가지고 있습니다.',
        research: ['VR 기반 게임 개발', 'HCI 연구'],
        awards: ['Kit Engineering Fair 2025 참여상 (2025.11)']
    },
    nam_yoongi: {
        name: 'Yoongi Nam', nameKr: '남윤기',
        photo: 'images/people/nam_yoongi.jpg',
        role: 'Research Intern (Dasso)',
        dept: '',
        affil: 'Kumoh National Institute of Technology',
        email: 'nyk510@kumoh.ac.kr',
        tags: ['AI','Game Development'],
        bio: '2025년 2학기부터 연구 인턴으로 참여하고 있으며, Dasso 팀 소속으로 AI 기반 게임 개발을 연구하고 있습니다.',
        research: ['AI 기반 게임 개발'],
        awards: ['GameAlfy Contest 한국게임학회장상 (2025.09)']
    },
    lee_kikong: {
        name: 'Kikong Lee', nameKr: '이기공',
        photo: 'images/people/lee_kikong.jpg',
        role: 'Undergraduate Student (Academic Break)',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'dlrlrhd@gmail.com',
        tags: ['Metaverse Contents','XR Games'],
        bio: '2024년 1학기부터 참여했으며, 메타버스 콘텐츠와 XR 게임 개발에 관심을 가지고 있습니다. 현재 휴학 중입니다.',
        research: ['메타버스 콘텐츠 개발', 'XR 게임'],
        awards: ['AI 캡스톤디자인 경진대회 우수상 2등 (2024.12)']
    }
};

function showPersonDetail(personId) {
    const p = personData[personId];
    if (!p) return;

    let html = `
    <div class="pd-header">
        <div class="pd-photo"><img src="${p.photo}" alt="${p.name}"></div>
        <div class="pd-info">
            <h2>${p.name} <span class="name-kr">${p.nameKr}</span></h2>
            <p class="pd-role">${p.role}</p>
            ${p.dept ? `<p class="pd-affil">${p.dept}</p>` : ''}
            <p class="pd-affil">${p.affil}</p>
            <p class="pd-email"><i class="fas fa-envelope"></i> ${p.email}</p>
            <div class="pd-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
    </div>`;

    if (p.bio) html += `<div class="pd-section"><h3><i class="fas fa-user"></i> About</h3><p>${p.bio}</p></div>`;
    if (p.research) html += `<div class="pd-section"><h3><i class="fas fa-flask"></i> Research Interests</h3><ul>${p.research.map(r => `<li>${r}</li>`).join('')}</ul></div>`;
    if (p.publications && p.publications.length) html += `<div class="pd-section"><h3><i class="fas fa-file-alt"></i> Publications</h3>${p.publications.map(pub => `<div class="pd-pub-item"><strong>${pub.title}</strong><br><span class="pub-venue">${pub.venue}</span></div>`).join('')}</div>`;
    if (p.projects && p.projects.length) html += `<div class="pd-section"><h3><i class="fas fa-project-diagram"></i> Projects</h3><ul>${p.projects.map(pr => `<li>${pr}</li>`).join('')}</ul></div>`;
    if (p.awards && p.awards.length) html += `<div class="pd-section"><h3><i class="fas fa-trophy"></i> Awards</h3><ul>${p.awards.map(a => `<li>${a}</li>`).join('')}</ul></div>`;

    document.getElementById('profileDetail').innerHTML = html;
    showSection('person-detail');

    // Keep people nav active
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.section === 'people');
    });
}

function initPersonCards() {
    document.querySelectorAll('[data-person]').forEach(card => {
        card.addEventListener('click', () => showPersonDetail(card.dataset.person));
    });
    document.getElementById('backToPeople').addEventListener('click', () => showSection('people'));
}

document.addEventListener('DOMContentLoaded', () => {
    const selectors = '.highlight-card,.rp-card,.news-row,.person-card,.director-card,.research-block,.project-card,.pub-table tr,.awards-table tr,.contact-item,.gallery-item';
    document.querySelectorAll(selectors).forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${Math.min(i * 0.03, 0.5)}s`;
    });
    initObserver();
    initLightbox();
    initPersonCards();
});
