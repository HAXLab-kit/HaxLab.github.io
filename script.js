// ===== Elements =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('[data-section]');
const homeParts = document.querySelectorAll('.hero-section, .home-part');
const pageSections = document.querySelectorAll('.page-section');

// Mobile menu toggle
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

// Hash-based routing - enables browser back/forward
function showSection(id, pushState) {
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
        const sec = l.dataset.section;
        l.classList.toggle('active', sec === id || (id === 'person-detail' && sec === 'people'));
    });

    navMenu.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash (pushState=false when handling popstate to avoid duplicate entries)
    if (pushState !== false) {
        const hash = id === 'home' ? '' : '#' + id;
        if (window.location.hash !== hash) {
            history.pushState({ section: id }, '', hash || './');
        }
    }

    // Re-trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.remove('visible'));
        initObserver();
    }, 100);
}

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
    if (e.state?.person) {
        showPersonDetail(e.state.person);
        return;
    }
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('person/')) {
        showPersonDetail(hash.replace('person/', ''));
        return;
    }
    const id = e.state?.section || hash || 'home';
    showSection(id, false);
});

// Nav link clicks
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.section);
    });
});

// Load correct section on page load from URL hash
function initRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('person/')) {
        const personId = hash.replace('person/', '');
        if (personData[personId]) {
            showPersonDetail(personId);
            history.replaceState({ section: 'person-detail', person: personId }, '');
            return;
        }
    }
    if (hash && document.getElementById(hash)) {
        showSection(hash, false);
    }
    history.replaceState({ section: hash || 'home' }, '');
}

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
    const items = document.querySelectorAll('#gallery .gallery-item img');
    let idx = 0;

    items.forEach((img, i) => {
        img.addEventListener('click', () => {
            idx = i;
            const src = img.src;
            lbImg.src = src.includes('googleusercontent') ? src.replace(/=w\d+/, '=w1600') : src;
            lb.style.display = 'flex';
        });
    });

    document.getElementById('lbClose').addEventListener('click', () => lb.style.display = 'none');
    function getLbSrc(img) {
        const s = img.src;
        return s.includes('googleusercontent') ? s.replace(/=w\d+/, '=w1600') : s;
    }
    document.getElementById('lbPrev').addEventListener('click', () => {
        idx = (idx - 1 + items.length) % items.length;
        lbImg.src = getLbSrc(items[idx]);
    });
    document.getElementById('lbNext').addEventListener('click', () => {
        idx = (idx + 1) % items.length;
        lbImg.src = getLbSrc(items[idx]);
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
        affil: 'Kumoh National Institute of Technology, South Korea',
        email: 'kim01@kumoh.ac.kr',
        phone: '054-478-6625 (domestic) / +82-54-478-6625 (Int\'l)',
        office: 'B112, Digital Building, Kumoh National Institute of Technology, 61 Daehak-ro, Gumi-si, Gyeongsangbuk-do, Republic of Korea',
        tags: ['XR','VR','AR','MR','HCI','Metaverse'],
        education: [
            'Ph.D., Computer Science and Engineering, Korea University, 2018 (Advisor: Gerard Jounghyun Kim, Digital eXPerience Laboratory)',
            'B.S., Computer and Communication Engineering, Korea University, 2012'
        ],
        workExperience: [
            '2024.1. ~ Present: Assistant Professor, Department of Computer Software Engineering, Kumoh National Institute of Technology (KIT)',
            '2019.10. ~ 2023.12.: Senior Researcher (Team Leader) at Korea Electronics Technology Institute (KETI)',
            '2018.9. ~ 2019.9.: Research Professor at Korea University',
            '2019.3. ~ 2019.8.: Lecturer at Ewha Womans University'
        ],
        academicActivities: {
            reviewer: [
                'IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG)',
                'IEEE Transactions on Consumer Electronics (IEEE TCE)',
                'Springer Nature, Virtual Reality',
                'Springer Nature, Scientific Reports',
                'Springer Nature, Universal Access in the Information Society',
                'ACM Conference on Human Factors in Computing Systems (ACM CHI)',
                'IEEE International Symposium on Mixed and Augmented Reality (IEEE ISMAR)',
                'ACM Symposium on Virtual Reality Software and Technology (ACM VRST)',
                'IEEE Asia-Pacific Workshop on Mixed and Augmented Reality (IEEE APMAR)',
                'Smart Media Journal',
                'Journal of the Korea Computer Graphics Society',
                'Journal of Digital Contents Society (Lifetime member)'
            ],
            programCommittee: [
                'IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR 2026) Finance Chair',
                'IEEE Asia-Pacific Workshop on Mixed and Augmented Reality (IEEE APMAR 2026) Local Organization Chair',
                'IEEE International Symposium on Mixed and Augmented Reality (IEEE ISMAR 2025) Doctoral Consortium Chair'
            ],
            associateEditor: [
                'Journal of Information and Communication Convergence Engineering (JICCE)',
                'Journal of Digital Contents Society'
            ],
            talks: [
                'National Forensic Service (Nov 2024)',
                'Wonkwang University (Oct 2023)',
                'Chonnam National University (Sep 2023)',
                'Mokpo National University (Aug 2023)',
                'Wonkwang University (Nov 2022)',
                'Korean Institute of Information Scientists and Engineers (Sep 2022)',
                'Wonkwang University (Dec 2022)'
            ]
        },
        awards: [
            'Outstanding Teaching Professor 2025-2',
            'Outstanding Teaching Professor 2024-2',
            'Outstanding Employee Award (KETI) 2022'
        ]
    },
    lee_jemin: {
        name: 'Jemin Lee', nameKr: '이제민',
        photo: 'images/people/lee_jemin.jpg',
        role: 'M.S. Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'char3941@kumoh.ac.kr',
        tags: ['VR','Digital Human','HCI'],
        links: {
            github: 'https://github.com/GJeMin',
            scholar: 'https://scholar.google.co.kr/citations?user=APmOfhkAAAAJ&hl=ko'
        },
        bio: 'I am Jemin (이제민), a student in the Department of Computer Software Engineering at Kumoh National Institute of Technology. My current research interests are Interaction in VR, Digital Human and HCI.',
        education: [
            '2020.03 - | Kumoh National Institute of Technology, Department of Computer Software Engineering'
        ],
        research: ['VR 기반 게임 인터랙션', '가상 환경에서의 물체 파지(Grasping) 기법', 'Digital Human', 'HCI'],
        ongoingProjects: [
            '2025.05.07 - | 화재현장 자동 재구성 및 VR 기반 실감형 수사기술 연구',
            '2025.03.30 - | 교통사고 영상 분석 시스템 개발',
            '2025.01.01 - | 디지털트윈 연계 ICT 기술발굴 연구',
            '2024.07.22 - | 초거대 AI 기반 산학연 협업 생태계 구축 사업',
            '2024.07.22 - | 초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업'
        ],
        publications: [
            {title: 'Jeonghyeon Kim, Jemin Lee, Hyeongjun Kang, Taewan Kim, Jungsik Koo, Jiyong Park, Byungwoo Cho, Yun Young Hwa, Bumki Kim, Daeun Kim, and Youngwon Kim. "Multi-User VR Assembly and Manufacture Design: Multimodal Object Modeling and High-Fidelity Gesture Interaction with WebGL Integration"', venue: 'Demonstration at ACM VRST 2025 (Canada)'},
            {title: 'Jemin Lee*, Jeonghyeon Kim*, Hyeongjun Kang, Hoon Ryu and Youngwon Kim. "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance"', venue: 'ACM VRST 2025 (CS분야 우수 국제학술대회, Canada)'},
            {title: 'Jeonghyeon Kim, Jemin Lee and Youngwon Kim. "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration"', venue: 'IEEE ISMAR 2025 (CS분야 우수 국제학술대회, South Korea)'},
            {title: 'Jemin Lee, Jeonghyeon Kim, and Youngwon Kim. "A Head-Driven Algorithm for Estimating Upper and Lower Body Motion in Virtual Reality Environments."', venue: 'IEEE Access vol. 13, pp. 76627-76637, 2025'},
            {title: 'Jeonghyeon Kim, Jemin Lee, Jung-Hoon Ahn, and Youngwon Kim. "ITap: Index Finger Tap Interaction by Gaze and Tabletop Integration."', venue: 'Sensors 25.9 (2025): 2833'},
            {title: 'Jemin Lee, Kikong Lee, Youngwoo Kim, and Youngwon Kim. "User\'s controller and elbow-based calibration technique for realistic avatar creation in a extended reality environment."', venue: 'Journal of Digital Contents Society, Vol25, No8, pp.2597-2605, 2024'},
            {title: 'Kikong Lee, Jemin Lee, Youngwoo Kim, and Youngwon Kim. "XR-Based Magnifying Display for Low Vision Users: Spread Interaction Approach."', venue: 'Journal of Digital Contents Society, Vol25, No9, pp.2607-2616, 2024'}
        ],
        projects: ['초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업 (2024-2026)', 'Spatial Computing XR 멀티모달 인터랙션 기술 (2024-2025)'],
        awards: ['AI 캡스톤디자인 경진대회 우수상 (24.12.)', '한국디지털콘텐츠학회 대학생논문경진대회 (24.11.)'],
        skills: {
            languages: 'Korean (Native), English',
            programming: 'Java, C#, C++, Python'
        }
    },
    kim_jeonghyeon: {
        name: 'Jeonghyeon Kim', nameKr: '김정현',
        photo: 'images/people/kim_jeonghyeon.jpg',
        role: 'M.S. Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'dnrgusrla1@kumoh.ac.kr',
        tags: ['Collaboration','Multimodal Interaction'],
        links: {
            github: 'https://github.com/JeongHyeon2',
            scholar: 'https://scholar.google.co.kr/citations?user=k_uM_U0AAAAJ&hl=ko'
        },
        bio: 'I am Jeonghyeon (김정현), a student in the Department of Computer Software Engineering at Kumoh National Institute of Technology. My current research interests are interaction techniques in collaborative environments and multimodal interaction.',
        education: [
            '2025.09 - Present | Kumoh National Institute of Technology - M.S. in Software Engineering (Integrated B.S./M.S. Program)',
            '2020.03 - | Kumoh National Institute of Technology - B.S. in Computer Software Engineering'
        ],
        research: ['XR 협업 환경에서의 객체 참조 전략', '멀티모달 인터랙션 기법', '다중 사용자 VR 어셈블리 시뮬레이션'],
        ongoingProjects: [
            '2025.08.01 - | AI 기반 상담원 직능 역량 평가 모델 및 QA 활용을 위한 알고리즘 개발',
            '2025.05.07 - | 화재현장 자동 재구성 및 VR 기반 실감형 수사기술 연구',
            '2025.03.30 - | 교통사고 영상 분석 시스템 개발',
            '2025.01.01 - | 디지털트윈 연계 ICT 기술발굴 연구',
            '2024.07.22 - | 초거대 AI 기반 산학연 협업 생태계 구축 사업',
            '2024.07.22 - | 초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업'
        ],
        publications: [
            {title: 'Jeonghyeon Kim, Jemin Lee, Hyeongjun Kang, Taewan Kim, Jungsik Koo, Jiyong Park, Byungwoo Cho, Yun Young Hwa, Bumki Kim, Daeun Kim, and Youngwon Kim. "Multi-User VR Assembly and Manufacture Design: Multimodal Object Modeling and High-Fidelity Gesture Interaction with WebGL Integration"', venue: 'Demonstration at ACM VRST 2025 (Canada)'},
            {title: 'Jemin Lee*, Jeonghyeon Kim*, Hyeongjun Kang, Hoon Ryu and Youngwon Kim. "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance"', venue: 'ACM VRST 2025 (CS분야 우수 국제학술대회, Canada)'},
            {title: 'Jeonghyeon Kim, Jemin Lee and Youngwon Kim. "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration"', venue: 'IEEE ISMAR 2025 (CS분야 우수 국제학술대회, South Korea)'},
            {title: 'Jeonghyeon Kim, Jemin Lee, Jung-Hoon Ahn, and Youngwon Kim. "ITap: Index Finger Tap Interaction by Gaze and Tabletop Integration."', venue: 'Sensors 25.9 (2025): 2833'},
            {title: 'Jemin Lee, Jeonghyeon Kim, and Youngwon Kim. "A Head-Driven Algorithm for Estimating Upper and Lower Body Motion in Virtual Reality Environments."', venue: 'IEEE Access vol. 13, pp. 76627-76637, 2025'},
            {title: 'Jeonghyeon Kim, Jung-Hoon Ahn, and Youngwon Kim. "Immersive Interaction for Inclusive Virtual Reality Navigation: Enhancing Accessibility for Socially Underprivileged Users."', venue: 'Electronics 14.5 (2025): 1046'}
        ],
        projects: ['초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업 (2024-2026)', 'Spatial Computing XR 멀티모달 인터랙션 기술 (2024-2025)'],
        awards: ['국회의원 표창 (25.8.)', 'AI 캡스톤디자인 경진대회 우수상 (24.12.)', '한국디지털콘텐츠학회 대학생논문경진대회 (24.11.)'],
        patents: ['25.10. 시선 추적 및 테이블탑 기반 가상 터치패드를 이용한 XR 환경의 객체 선택 및 제어 방법 (Method for Object Selection and Control in XR Environments Using Gaze Tracking and a Tabletop-based Virtual Touchpad)'],
        skills: {
            gpa: '4.31 / 4.5 (Summa Cum Laude)',
            languages: 'Korean (Native), English',
            programming: 'Java, C#, Kotlin, Dart'
        }
    },
    kang_hyeongjun: {
        name: 'Hyeongjun Kang', nameKr: '강형준',
        photo: 'images/people/kang_hyeongjun.jpg',
        role: 'Undergraduate Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'joh0816@gmail.com',
        tags: ['Immersive Technologies','XR Contents'],
        links: {
            github: 'https://github.com/Facical'
        },
        bio: 'I am Hyeongjun (강형준), Department of Computer Software Engineering student at Kumoh National Institute of Technology. My current research interests are Interaction in Immersive Technologies and XR Contents.',
        education: [
            '2023.03 - | Kumoh National Institute of Technology, Department of Computer Software Engineering'
        ],
        research: ['몰입형 XR 콘텐츠 개발', 'XR 인터랙션 기술'],
        ongoingProjects: [
            '2025.05.07 - | 화재현장 자동 재구성 및 VR 기반 실감형 수사기술 연구',
            '2025.03.30 - | 교통사고 영상 분석 시스템 개발',
            '2025.01.01 - | 디지털트윈 연계 ICT 기술발굴 연구',
            '2024.07.22 - | 초거대 AI 기반 산학연 협업 생태계 구축 사업',
            '2024.07.22 - | 초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업'
        ],
        skills: {
            languages: 'Korean (Native), English',
            programming: 'Java, C#, Swift'
        }
    },
    lee_donghee: {
        name: 'Donghee Lee', nameKr: '이동희',
        photo: 'images/people/lee_donghee.jpg',
        role: 'Undergraduate Student',
        dept: 'Department of Computer Software Engineering',
        affil: 'Kumoh National Institute of Technology',
        email: 'furyburst@naver.com',
        tags: ['VR','HCI','Games'],
        links: {
            github: 'https://github.com/Insazor'
        },
        bio: 'I am Donghee Lee (이동희), a student in the Department of Computer Software Engineering at Kumoh National Institute of Technology. My current research interests are VR, HCI, Games.',
        education: [
            '2021.03 - | Kumoh National Institute of Technology, Department of Computer Software Engineering'
        ],
        research: ['VR 기반 게임 개발', 'HCI 연구'],
        awards: ['Kit Engineering Fair 2025 장려상 (25.11)'],
        experiences: [
            '2026-ICPC Asia Korea National First Round (25.10)',
            '2025 핵테온 세종(HackTheon Sejong) 국제 대학생 사이버보안 경진대회 (25.04)'
        ],
        skills: {
            languages: 'Korean (Native), English',
            programming: 'Python, Java, C++, FastAPI Framework',
            others: 'Docker, Linux, MySQL, Proxmox VE'
        }
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
        tags: ['Hand-Tracking','HCI'],
        bio: 'I am Kikong (이기공), Department of Computer Software Engineering student at Kumoh National Institute of Technology. My current research interests are Interaction in Hand-Tracking and HCI.',
        education: [
            '2022.03 - | Kumoh National Institute of Technology, Department of Computer Software Engineering'
        ],
        research: ['Hand-Tracking 인터랙션', 'HCI'],
        ongoingProjects: [
            '2024.07.22 - | 초거대 AI 기반 방산품 설계 유지보수 서비스 실증 사업'
        ],
        awards: ['AI 캡스톤디자인 경진대회 우수상 2등 (2024.12)'],
        skills: {
            languages: 'Korean (Native), English',
            programming: 'Java, C#, C++'
        }
    },
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
            ${p.phone ? `<p class="pd-email"><i class="fas fa-phone"></i> ${p.phone}</p>` : ''}
            ${p.office ? `<p class="pd-email"><i class="fas fa-map-marker-alt"></i> ${p.office}</p>` : ''}
            <div class="pd-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
            ${p.links ? `<div class="pd-links">${p.links.github ? `<a href="${p.links.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}${p.links.scholar ? `<a href="${p.links.scholar}" target="_blank"><i class="fas fa-graduation-cap"></i> Google Scholar</a>` : ''}</div>` : ''}
        </div>
    </div>`;

    if (p.bio) html += `<div class="pd-section"><h3><i class="fas fa-user"></i> About</h3><p>${p.bio}</p></div>`;

    if (p.education && p.education.length) html += `<div class="pd-section"><h3><i class="fas fa-graduation-cap"></i> Education</h3><ul>${p.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;

    if (p.workExperience && p.workExperience.length) html += `<div class="pd-section"><h3><i class="fas fa-briefcase"></i> Work Experience</h3><ul>${p.workExperience.map(w => `<li>${w}</li>`).join('')}</ul></div>`;

    if (p.research) html += `<div class="pd-section"><h3><i class="fas fa-flask"></i> Research Interests</h3><ul>${p.research.map(r => `<li>${r}</li>`).join('')}</ul></div>`;

    if (p.ongoingProjects && p.ongoingProjects.length) html += `<div class="pd-section"><h3><i class="fas fa-tasks"></i> Ongoing Projects</h3><ul>${p.ongoingProjects.map(op => `<li>${op}</li>`).join('')}</ul></div>`;

    if (p.publications && p.publications.length) html += `<div class="pd-section"><h3><i class="fas fa-file-alt"></i> Publications</h3>${p.publications.map(pub => `<div class="pd-pub-item"><strong>${pub.title}</strong><br><span class="pub-venue">${pub.venue}</span></div>`).join('')}</div>`;

    if (p.projects && p.projects.length) html += `<div class="pd-section"><h3><i class="fas fa-project-diagram"></i> Projects</h3><ul>${p.projects.map(pr => `<li>${pr}</li>`).join('')}</ul></div>`;

    if (p.awards && p.awards.length) html += `<div class="pd-section"><h3><i class="fas fa-trophy"></i> Awards & Honors</h3><ul>${p.awards.map(a => `<li>${a}</li>`).join('')}</ul></div>`;

    if (p.patents && p.patents.length) html += `<div class="pd-section"><h3><i class="fas fa-lightbulb"></i> Patents</h3><ul>${p.patents.map(pt => `<li>${pt}</li>`).join('')}</ul></div>`;

    if (p.experiences && p.experiences.length) html += `<div class="pd-section"><h3><i class="fas fa-star"></i> Experiences</h3><ul>${p.experiences.map(ex => `<li>${ex}</li>`).join('')}</ul></div>`;

    if (p.academicActivities) {
        html += `<div class="pd-section"><h3><i class="fas fa-university"></i> Academic Activities</h3>`;
        if (p.academicActivities.reviewer && p.academicActivities.reviewer.length) {
            html += `<h4>Reviewer</h4><ul>${p.academicActivities.reviewer.map(r => `<li>${r}</li>`).join('')}</ul>`;
        }
        if (p.academicActivities.programCommittee && p.academicActivities.programCommittee.length) {
            html += `<h4>Program Committee</h4><ul>${p.academicActivities.programCommittee.map(r => `<li>${r}</li>`).join('')}</ul>`;
        }
        if (p.academicActivities.associateEditor && p.academicActivities.associateEditor.length) {
            html += `<h4>Associate Editor</h4><ul>${p.academicActivities.associateEditor.map(r => `<li>${r}</li>`).join('')}</ul>`;
        }
        if (p.academicActivities.talks && p.academicActivities.talks.length) {
            html += `<h4>Invited Talks</h4><ul>${p.academicActivities.talks.map(r => `<li>${r}</li>`).join('')}</ul>`;
        }
        html += `</div>`;
    }

    if (p.skills) {
        html += `<div class="pd-section"><h3><i class="fas fa-code"></i> Skills</h3><ul>`;
        if (p.skills.gpa) html += `<li><strong>GPA:</strong> ${p.skills.gpa}</li>`;
        if (p.skills.languages) html += `<li><strong>Languages:</strong> ${p.skills.languages}</li>`;
        if (p.skills.programming) html += `<li><strong>Programming:</strong> ${p.skills.programming}</li>`;
        if (p.skills.others) html += `<li><strong>Others:</strong> ${p.skills.others}</li>`;
        html += `</ul></div>`;
    }

    document.getElementById('profileDetail').innerHTML = html;

    // Show section without pushing state (we push our own with person id)
    homeParts.forEach(s => s.style.display = 'none');
    pageSections.forEach(s => s.style.display = 'none');
    document.getElementById('person-detail').style.display = '';
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.section === 'people');
    });
    navMenu.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Push hash with person ID so back button works
    const hash = '#person/' + personId;
    if (window.location.hash !== hash) {
        history.pushState({ section: 'person-detail', person: personId }, '', hash);
    }

    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.remove('visible'));
        initObserver();
    }, 100);
}

function initPersonCards() {
    document.querySelectorAll('[data-person]').forEach(card => {
        card.addEventListener('click', () => showPersonDetail(card.dataset.person));
    });
    document.getElementById('backToPeople').addEventListener('click', () => showSection('people'));
}

document.addEventListener('DOMContentLoaded', () => {
    const selectors = '.highlight-card,.rp-card,.news-row,.person-card,.director-card,.research-block,.project-card,.pub-table tr,.awards-table tr,.contact-item,.gallery-item,.course-card';
    document.querySelectorAll(selectors).forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${Math.min(i * 0.03, 0.5)}s`;
    });
    initObserver();
    initLightbox();
    initPersonCards();
    initRoute();
});
