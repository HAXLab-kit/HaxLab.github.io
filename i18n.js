(() => {
    const STORAGE_KEY = 'haxlab-language';
    const DEFAULT_LANG = 'en';

    const dictionaries = {
        en: {
            '멀티미디어': 'Multimedia',
            '컴퓨터그래픽스': 'Computer Graphics',
            '윈도우즈프로그래밍': 'Windows Programming',
            '메타버스실감기술': 'Metaverse Immersive Technology',
            '창의융합종합설계1': 'Creative Convergence Comprehensive Design 1',
            '창의융합종합설계2': 'Creative Convergence Comprehensive Design 2',
            '캡스톤디자인1': 'Capstone Design 1',
            '캡스톤디자인2': 'Capstone Design 2',
            '멀티미디어특론': 'Advanced Topics in Multimedia',
            '확장현실특론': 'Advanced Topics in Extended Reality'
        },
        ko: {
            'Switch to English': '영어로 전환',
            'Switch to Korean': '한국어로 전환',
            'Home': '홈',
            'News': '뉴스',
            'People': '구성원',
            'Research': '연구',
            'Projects': '프로젝트',
            'Publications': '논문',
            'Courses': '강의',
            'Awards': '수상',
            'Gallery': '갤러리',
            'Contact': '연락처',
            'Human-Computer Interaction · Extended Reality Research': '인간-컴퓨터 상호작용 · 확장현실 연구',
            'Human-centered AX Lab': '인간 중심 AX 연구실',
            '(HAX Lab)': '(HAX Lab)',
            'A research laboratory dedicated to advancing': 'HAX Lab은',
            'Extended Reality (XR)': '확장현실(XR)',
            '- Virtual Reality, Augmented Reality, Mixed Reality, and Metaverse - by exploring seamless and intuitive interactions between humans and digital contents.': '가상현실, 증강현실, 혼합현실, 메타버스 기술을 발전시키며 사람과 디지털 콘텐츠 사이의 자연스럽고 직관적인 상호작용을 연구하는 연구실입니다.',
            'HAX Lab Highlights': 'HAX Lab 주요 소식',
            'View All News →': '전체 뉴스 보기 →',
            'Award': '수상',
            'Grant': '과제',
            'Member': '구성원',
            'Conf': '학회',
            'Conference': '학회',
            'Paper': '논문',
            'Lab': '연구실',
            'Press coverage': '언론 보도',
            'Jeonghyeon Kim transitioned to the integrated M.S./Ph.D. program.': '김정현 학생이 2026년 9월 1일 자로 석·박사통합과정으로 전환했습니다.',
            'We have been selected for the "XR-Based Battlefield Situation Map Experimental Study" project with Woojin GNS.': '우진지앤에스와 함께 "XR 기반 전장상황도 실험연구" 과제에 선정되었습니다.',
            'Hyeongjun Kang and Donghee Lee graduated with B.S. degrees and transitioned to the integrated B.S./M.S. program as M.S. students.': '강형준, 이동희 학생이 학사 학위를 취득하고 학·석사연계과정 석사과정으로 전환했습니다.',
            'Hyeongjun Kang and Donghee Lee received National Assembly Member Commendations at the August 2026 commencement ceremony.': '강형준, 이동희 학생이 2026년 8월 학위수여식에서 국회의원 포상을 수상했습니다.',
            'Hyeongjun Kang received a Graduation Award at the August 2026 commencement ceremony.': '강형준 학생이 2026년 8월 학위수여식에서 졸업포상을 수상했습니다.',
            'Jeonghyeon Kim has been selected for the Presidential Science Scholarship for Graduate Students.': '김정현 학생이 대학원 대통령과학장학금 장학생으로 선정되었습니다.',
            'We have been selected for the ETRI project "Development of a Multi-Device Operation and Field Management System for XR-Based Egocentric Multimodal Emotion and Affect Data Collection."': '한국전자통신연구원(ETRI)과 함께 "XR 기반 자기중심 멀티모달 감정·감성 데이터 수집을 위한 멀티디바이스 운용 및 현장 관리 시스템 개발" 과제에 선정되었습니다.',
            'Gave a presentation at 2026 Korea Society of Digital Content Summer Conference and Undergraduate Paper Competition presenting our paper, "LiDAR-GS: An iPhone LiDAR depth-based, COLMAP-free 3D Gaussian Splatting pipeline" by Hyeongjun Kang.': '2026년 한국디지털콘텐츠학회 하계종합학술대회 및 대학생논문경진대회에서 강형준 학생의 논문 "LiDAR-GS iPhone LiDAR 깊이 기반 COLMAP-free 3D Gaussian Splatting 파이프라인"을 발표했습니다.',
            'Gave a presentation at 2026 Korea Society of Digital Content Summer Conference and Undergraduate Paper Competition presenting our paper, "Design of a PC-XR Interlinked Spatial Pointing and Device Management System for XR Collaborative Environments" by Donghee Lee.': '2026년 한국디지털콘텐츠학회 하계종합학술대회 및 대학생논문경진대회에서 이동희 학생의 논문 "XR 협업 환경을 위한 PC-XR 연동 공간 포인팅 및 디바이스 관리 시스템 설계"를 발표했습니다.',
            'Gave a presentation at 2026 Korea Society of Digital Content Summer Conference and Undergraduate Paper Competition presenting our paper, "Proposal for an Integrated VR Driving Simulator Architecture Combining RFR, Haptic Feedback, and User Behavior Analysis" by Juyoung Lee.': '2026년 한국디지털콘텐츠학회 하계종합학술대회 및 대학생논문경진대회에서 이주영 학생의 논문 "RFR, 햅틱 피드백 및 사용자 행동 분석을 결합한 통합형 VR 주행 시뮬레이터 구조 제안"을 발표했습니다.',
            'We have been published in the Journal of the Digital Content with our paper, "Model Refinement Pipeline via Re-observation of 3D Gaussian Splatting-based Digital Twins Using XR Smart Glasses" by Jeonghyeon Kim.': '논문 "XR 스마트글래스를 이용한 3D Gaussian Splatting 기반 디지털 트윈의 재관측을 통한 모델 정밀화 파이프라인"(김정현)이 디지털콘텐츠학회논문지에 게재되었습니다.',
            'We have been accepted to present our paper, "Phonaze: Gaze-Hover with Torso-Supported Phone Confirmation for Ergonomic Interaction in Supine Mixed Reality" (Hyeongjun Kang, Jeonghyeon Kim, Donghee Lee, Jemin Lee, Seungwoo Woo, Byungwoo Cho, Jungsik Koo, Sunyoung Son, Jung-Hoon Ahn, Giwon Ku, and Youngwon Kim), at a top-tier BK21 conference in Computer Science, IEEE ISMAR 2026 (Acceptance Rate: 26.5%).': 'BK21 컴퓨터과학 분야 우수 국제학술대회인 IEEE ISMAR 2026에서 논문 "Phonaze: Gaze-Hover with Torso-Supported Phone Confirmation for Ergonomic Interaction in Supine Mixed Reality"(강형준, 김정현, 이동희, 이제민, 우승우, 조병우, 구정식, 손선영, 안정훈, 구기원, 김영원)를 발표하게 되었습니다(채택률 26.5%).',
            'Our paper has been conditionally accepted to IEEE ISMAR 2026 (CS 우수 국제학술대회)!': '우리 논문이 IEEE ISMAR 2026(CS 우수 국제학술대회)에 조건부 채택되었습니다.',
            'We have been selected for the NRF Basic Research Laboratory Support Program with the project "Securing Highly Precise Digital-Twin Technology to Pave the Way for Dexterous Manipulation of Multi-Agents in Manufacturing Environments" (2026.6 - 2029.6).': '한국연구재단 기초연구실지원사업 과제 "다개체 제조환경에서의 조작 숙련성 개선을 위한 고정밀 디지털트윈 기술 개발"에 선정되었습니다(2026.6 - 2029.6).',
            'Yoongi Nam (Team: DaSo) has been selected for the Challenger Division of 2026 INDIECRAFT.': '남윤기 학생(팀 DaSo)이 2026 INDIECRAFT 챌린저 부문에 선정되었습니다.',
            'Yoongi Nam (Team: DaSo) has been selected for the Challenger Division of': '남윤기 학생(팀 DaSo)이 챌린저 부문에 선정되었습니다:',
            'We have been selected for the "Gyeongbuk AI·Metaverse Academy for Employment-Linked Talent Development" project with Gyeongsangbuk-do.': '경상북도와 함께 "경북 AI·메타버스 아카데미 취업연계 인재양성" 과제에 선정되었습니다.',
            'We have been selected for the RISE Manufacturing Industry AX Transformation Partnership Program - "Integrated Operation Technology for Manufacturing-Logistics Linked AI Smart Glasses"!': 'RISE 제조산업 AX 전환 협업 프로그램 - "제조-물류 연계 AI 스마트 글래스 통합 운영 기술" 과제에 선정되었습니다.',
            'We have been selected for the "Development and Demonstration of a Virtual Convergence Tourism Service for Gyeongju, Gyeongsangbuk-do, based on 3D Spatial/Object Recognition and Multimodal AI Convergence" project with the Korea Radio Promotion Association (RAPA)!': '한국전파진흥협회(RAPA)와 함께 "3D 공간/객체 인식 및 멀티모달 AI 융합 기반 경상북도 경주 가상융합 관광 서비스 개발 및 실증" 과제에 선정되었습니다.',
            'We have been selected for the "Development of a Monitoring Data Visualization Interface" project with the Korea Electronics Technology Institute (KETI).': '한국전자기술연구원(KETI)과 함께 "모니터링 데이터 시각화 인터페이스 개발" 과제에 선정되었습니다.',
            'We have been selected for the "ESS Real-time Monitoring and Management Communication Security System Development / Construction / Installation" project with Daejung ICT.': '대정아이씨티와 함께 "ESS 실시간 모니터링 및 관리 통신 보안 시스템 개발/구축/설치" 과제에 선정되었습니다.',
            "We have been selected for the Ministry of SMEs and Startups' 2026 Startup-Leading University Support Program (University Track)!": '중소벤처기업부 2026 창업중심대학 지원사업(대학 트랙)에 선정되었습니다.',
            'Juyoung Lee has joined our lab. Welcome!': '이주영 학생이 연구실에 합류했습니다. 환영합니다.',
            'We have been selected for the NRF Young Investigator Research Program (신진연구 A) with the project "Research on XR-Physical AI-Based Human-Digital Twin Interaction for Expanding the Everyday Perception of the Visually Impaired."': '한국연구재단 신진연구 A 과제 "시각장애인의 일상 인식 확장을 위한 XR-Physical AI 기반 인간-디지털 트윈 상호작용 연구"에 선정되었습니다.',
            'Donghee Lee has joined our lab. Welcome!': '이동희 학생이 연구실에 합류했습니다. 환영합니다.',
            'We have been selected for the "AI-based facility anomaly detection and predictive maintenance solution" project with the Regional Innovation System & Education (RISE) Program!': 'RISE 프로그램의 "AI 기반 설비 이상 탐지 및 예지보전 솔루션" 과제에 선정되었습니다.',
            'Conducted a demo session titled "Multi-User VR Assembly Design: Multimodal Object Modeling and High-Fidelity Gesture Interaction with WebGL Integration" at ACM VRST 2025 (CS 우수 국제학술대회).': 'ACM VRST 2025(CS 우수 국제학술대회)에서 "Multi-User VR Assembly Design: Multimodal Object Modeling and High-Fidelity Gesture Interaction with WebGL Integration" 데모 세션을 진행했습니다.',
            'Gave a presentation at ACM VRST 2025 (CS 우수 국제학술대회), presenting our paper "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance" by Jemin Lee.': 'ACM VRST 2025(CS 우수 국제학술대회)에서 이제민 학생의 논문 "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance"를 발표했습니다.',
            'Gave a presentation at IEEE ISMAR 2025 (CS 우수 국제학술대회), presenting our paper "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration." by Jeonghyeon Kim.': 'IEEE ISMAR 2025(CS 우수 국제학술대회)에서 김정현 학생의 논문 "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration"을 발표했습니다.',
            'We have been accepted to present our paper, "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance" (Jemin Lee, Jeonghyeon Kim, Hyeongjun Kang, Hoon Ryu, and Youngwon Kim), at a top-tier BK21 conference in Computer Science, the ACM Symposium on Virtual Reality Software and Technology (VRST) 2025 (Acceptance Rate: 27%).': 'BK21 컴퓨터과학 분야 우수 국제학술대회인 ACM VRST 2025에서 논문 "Trade-offs in Virtual Grasping: The Interplay of Interaction Fidelity and Object Affordance"(이제민, 김정현, 강형준, 류훈, 김영원)를 발표하게 되었습니다(채택률 27%).',
            'Our paper has been conditionally accepted to ACM Symposium on Virtual Reality Software and Technology (VRST) 2025!': '우리 논문이 ACM Symposium on Virtual Reality Software and Technology(VRST) 2025에 조건부 채택되었습니다.',
            'We have been accepted to present our paper, "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration" (Jeonghyeon Kim, Jemin Lee, and Youngwon Kim), at a top-tier BK21 conference in Computer Science, IEEE ISMAR 2025 (Acceptance Rate: 21.1%). Excellent work done by undergraduate students!': 'BK21 컴퓨터과학 분야 우수 국제학술대회인 IEEE ISMAR 2025에서 논문 "What Makes Object Referencing Clear? Multimodal Strategies for Shared Understanding in XR Collaboration"(김정현, 이제민, 김영원)을 발표하게 되었습니다(채택률 21.1%). 학부생 연구자들의 훌륭한 성과입니다.',
            'Taewan Kim has joined our lab. Welcome!': '김태완 학생이 연구실에 합류했습니다. 환영합니다.',
            'We have been published in IEEE Access with our paper, "A Head-Driven Algorithm for Estimating Upper and Lower Body Motion in Virtual Reality Environments" (Jemin Lee, Jeonghyeon Kim, and Youngwon Kim). Excellent work done by undergraduate students!': '논문 "A Head-Driven Algorithm for Estimating Upper and Lower Body Motion in Virtual Reality Environments"(이제민, 김정현, 김영원)가 IEEE Access에 게재되었습니다. 학부생 연구자들의 훌륭한 성과입니다.',
            'We have been selected for the "Automated Reconstruction of Fire Scenes and VR-based Immersive Investigation Technology" project with the National Forensic Service!': '국립과학수사연구원과 함께 "화재 현장 자동 재구성 및 VR 기반 실감형 수사 기술" 과제에 선정되었습니다.',
            'We have been published in Sensors with our paper, "ITap: Index Finger Tap Interaction by Gaze and Tabletop Integration" (Jeonghyeon Kim, Jemin Lee, Jung-Hoon Ahn, and Youngwon Kim).': '논문 "ITap: Index Finger Tap Interaction by Gaze and Tabletop Integration"(김정현, 이제민, 안정훈, 김영원)이 Sensors에 게재되었습니다.',
            'We have attended CHI 2025 in Yokohama, Japan. Hopefully we will be presenting in Barcelona next year :)': '일본 요코하마에서 열린 CHI 2025에 참석했습니다. 내년 바르셀로나에서는 발표로 함께하길 기대합니다.',
            'We have been selected for the "Digital Twin Linked ICT Technology based Research" project with the Korea Electronics Technology Institute (KETI)!': '한국전자기술연구원(KETI)과 함께 "디지털 트윈 연계 ICT 기술 기반 연구" 과제에 선정되었습니다.',
            'We have been selected for the "Development of a Traffic Accident Video Analysis System" project with the Korea Insurance Development Institute!': '보험개발원과 함께 "교통사고 영상 분석 시스템 개발" 과제에 선정되었습니다.',
            'We have been published in Electronics with our paper, "Immersive Interaction for Inclusive Virtual Reality Navigation: Enhancing Accessibility for Socially Underprivileged Users" (Jeonghyeon Kim, Jung-Hoon Ahn, and Youngwon Kim).': '논문 "Immersive Interaction for Inclusive Virtual Reality Navigation: Enhancing Accessibility for Socially Underprivileged Users"(김정현, 안정훈, 김영원)가 Electronics에 게재되었습니다.',
            'We have been published in the Journal of the Digital Content with our paper, "In-XR Spread Interaction-Based Magnifying Display for Users with Reduced Vision" by Kikong Lee.': '논문 "In-XR Spread Interaction-Based Magnifying Display for Users with Reduced Vision"(이기공)이 디지털콘텐츠학회논문지에 게재되었습니다.',
            'We have been published in the Journal of the Digital Content with our paper, "User\'s Controller and Elbow-Based Calibration Technique for Realistic Avatar Creation in an Extended Reality Environment" by Jemin Lee.': '논문 "User\'s Controller and Elbow-Based Calibration Technique for Realistic Avatar Creation in an Extended Reality Environment"(이제민)이 디지털콘텐츠학회논문지에 게재되었습니다.',
            'We have been selected for the "Large-Scale AI-based defense product design and maintenance service demonstration project"!': '"초거대 AI 기반 방산품 설계 및 유지보수 서비스 실증" 과제에 선정되었습니다.',
            'We have been selected for the "Large-Scale AI-based Industry-Academia-Research Cooperation Ecosystem" project with the Ministry of Science and ICT and NIA.': '과학기술정보통신부와 한국지능정보사회진흥원(NIA)의 "초거대 AI 기반 산학연 협력 생태계" 과제에 선정되었습니다.',
            'Hyeongjun Kang, Gu Kim, Jeonghyeon Kim and Junseok Im have joined our lab. Welcome!': '강형준, 김구, 김정현, 임준석 학생이 연구실에 합류했습니다. 환영합니다.',
            'We have been selected for the "Spatial computing XR multimodal interaction technology development project"!': '"Spatial Computing XR 멀티모달 인터랙션 기술 개발" 과제에 선정되었습니다.',
            'Hyeongjun Kang, Gu Kim, Jeonghyeon Kim and Junseok Im have joined our lab as Research Interns. Welcome!': '강형준, 김구, 김정현, 임준석 학생이 연구 인턴으로 합류했습니다. 환영합니다.',
            'Kikong Lee and Jemin Lee have joined our lab. Welcome!': '이기공, 이제민 학생이 연구실에 합류했습니다. 환영합니다.',
            "Extended Reality (XR) & Metaverse Lab is now OPEN (Under Construction)! We're currently recruiting passionate graduate & undergraduate students!": 'Extended Reality(XR) & Metaverse Lab이 문을 열었습니다. 열정 있는 대학원생 및 학부연구생을 모집합니다.',

            'Assistant Professor, Director': '조교수, 연구실장',
            'M.S. Student': '석사과정',
            'Undergraduate Student': '학부연구생',
            'Undergraduate Student (Academic Break)': '학부연구생(휴학)',
            'Research Intern': '연구 인턴',
            'Department of Computer Software Engineering': '컴퓨터소프트웨어공학과',
            'Kumoh National Institute of Technology': '국립금오공과대학교',
            'Kumoh National Institute of Technology, South Korea': '국립금오공과대학교, 대한민국',
            'M.S. Students': '석사과정',
            'Undergraduate Students': '학부연구생',
            'Academic Break': '휴학',
            'Alumni': '졸업생',
            'Since 2025-2': '2025-2부터',
            'Since 2024-2': '2024-2부터',
            'Since 2026-1': '2026-1부터',
            'Since 2024-1': '2024-1부터',
            'Recruiting': '모집 중',
            'Position Open': '지원 가능',
            'TBD': '추후 공지',
            'Now at Korea Electronics Technology Institute (KETI)': '현재 한국전자기술연구원(KETI) 재직',
            'Now at REMOSHOT': '현재 REMOSHOT 재직',
            'Now M.S. student at KIT': '현재 국립금오공과대학교 석사과정',
            'Now at Dasso': '현재 Dasso 재직',
            'Back to People': '구성원 목록으로 돌아가기',
            'About': '소개',
            'Education': '학력',
            'Work Experience': '경력',
            'Research Interests': '연구 관심 분야',
            'Ongoing Projects': '진행 중인 프로젝트',
            'Awards & Honors': '수상 및 영예',
            'Patents': '특허',
            'Experiences': '경험',
            'Academic Activities': '학술 활동',
            'Reviewer': '심사위원',
            'Program Committee': '프로그램 위원회',
            'Associate Editor': '편집위원',
            'Invited Talks': '초청 강연',
            'Skills': '기술',
            'Languages:': '언어:',
            'Programming:': '프로그래밍:',
            'Others:': '기타:',
            'GPA:': '평점:',
            'Korean (Native), English': '한국어(모국어), 영어',

            '3DGS-based Digital Twin': '3DGS 기반 디지털 트윈',
            '3DGS-based digital twin': '3DGS 기반 디지털 트윈',
            'enabling physical interaction reconstructed purely from video capture': '영상 캡처만으로 재구성한 공간에서 물리적 상호작용을 가능하게 합니다.',
            'Web-based Digital Twin': '웹 기반 디지털 트윈',
            'Confidential': '비공개',
            'Details of this research are currently confidential.': '이 연구의 세부 내용은 현재 비공개입니다.',
            'XR-based Pose IK System and Path Solver': 'XR 기반 Pose IK 시스템 및 경로 솔버',
            'Pose IK-based XR interaction': 'Pose IK 기반 XR 상호작용',
            'system combined with a': '시스템과',
            'spatial path-optimization Solver': '공간 경로 최적화 솔버를 결합하여',
            'for multi-user, multi-object routing in shared XR environments': '공유 XR 환경에서 다중 사용자와 다중 객체의 경로를 처리합니다.',
            'XR-based MRO': 'XR 기반 MRO',
            'An': '음성, 시선, 제스처를 결합한',
            'intuitive multimodal interaction': '직관적 멀티모달 상호작용',
            'framework combining voice, gaze, and gesture for XR-based maintenance, repair, and operations (MRO)': '프레임워크를 통해 XR 기반 유지보수 및 운영(MRO)을 지원합니다.',
            'XR-based Spatial Digital Twin': 'XR 기반 공간 디지털 트윈',
            'Vision-based Ego-Speed Estimation': '비전 기반 자차 속도 추정',
            'Robust': '강건한',
            'ego-vehicle speed estimation': '자차 속도 추정',
            'from monocular dashcam video using optical flow, depth, and object detection - independent of lane markings, license plates, or known object sizes': '단안 블랙박스 영상에서 optical flow, depth, 객체 검출을 활용하며 차선, 번호판, 알려진 객체 크기에 의존하지 않습니다.',
            'Content coming soon.': '콘텐츠를 준비 중입니다.',

            'Ongoing': '진행 중',
            'Completed': '완료',
            'XR-Based Battlefield Situation Map Experimental Study': 'XR 기반 전장상황도 실험연구',
            'Conducts experimental research on XR visualization and interaction methods for intuitive battlefield situational awareness.': '직관적인 전장 상황 인식을 위한 XR 시각화 및 상호작용 방법을 실험적으로 연구합니다.',
            'Woojin GNS': '우진지앤에스',
            'Development of a Multi-Device Operation and Field Management System for XR-Based Egocentric Multimodal Emotion and Affect Data Collection': 'XR 기반 자기중심 멀티모달 감정·감성 데이터 수집을 위한 멀티디바이스 운용 및 현장 관리 시스템 개발',
            'Designs a multi-device operating environment that integrates smart glasses, smartwatches, audio devices, and biosignal sensors to collect video, audio, and physiological data. The project defines timestamp-based synchronization, session-level data and metadata management, and standardized measurement, quality-control, and error-response protocols.': '통제된 스튜디오·실험실 환경에서 스마트글래스, 스마트워치, 음성 입력 장치, 생체신호 측정 장비를 연계해 영상·음성·생체신호를 수집하는 멀티디바이스 운영 환경을 설계합니다. 타임스탬프 기반 동기화, 세션 단위 데이터·메타데이터 관리, 표준 측정 절차와 품질 점검·오류 대응 프로토콜을 구축합니다.',
            'Electronics and Telecommunications Research Institute (ETRI)': '한국전자통신연구원(ETRI)',
            'Securing Highly Precise Digital-Twin Technology to Pave the Way for Dexterous Manipulation of Multi-Agents in Manufacturing Environments': '다개체 제조환경에서의 조작 숙련성 개선을 위한 고정밀 디지털트윈 기술 개발',
            'Builds a high-precision manufacturing digital twin combining 3DGS-based workspace reconstruction, USD scene graphs, multi-robot physics simulation, and XR-based human-robot interaction for deformable-object manipulation.': '3DGS 기반 작업 공간 재현, USD Scene Graph, 다개체 로봇 물리 시뮬레이션, XR 기반 인간-로봇 상호작용을 결합해 비정형 물체 조작을 지원하는 고정밀 제조 디지털 트윈을 구축합니다.',
            'Ministry of Science and ICT, NRF (Basic Research Laboratory)': '과학기술정보통신부, 한국연구재단(기초연구실)',
            'XR-Physical AI-based Human-Digital Twin Interaction for Expanding the Everyday Perception of the Visually Impaired': '시각장애인의 일상 인식 확장을 위한 XR-Physical AI 기반 인간-디지털 트윈 상호작용',
            'Develops technologies to enhance environmental perception and safe mobility for visually impaired individuals, including 3D reconstruction and XR-based training.': '3D 재구성 및 XR 기반 훈련을 포함해 시각장애인의 환경 인식과 안전한 이동을 향상시키는 기술을 개발합니다.',
            'Ministry of Science and ICT, NRF (Young Investigator)': '과학기술정보통신부, 한국연구재단(신진연구)',
            'Automated Reconstruction of Fire Scenes and VR-based Immersive Investigation Technology': '화재 현장 자동 재구성 및 VR 기반 실감형 수사 기술',
            'Develops immersive forensic investigation tools featuring context-aware interactions, multi-user collaboration, and gesture recognition for fire scene analysis.': '화재 현장 분석을 위해 맥락 인식 상호작용, 다중 사용자 협업, 제스처 인식 기능을 갖춘 실감형 과학수사 도구를 개발합니다.',
            'National Forensic Service': '국립과학수사연구원',
            'Development and Demonstration of a Virtual Convergence Tourism Service for Gyeongju, Gyeongsangbuk-do, based on 3D Spatial/Object Recognition and Multimodal AI Convergence': '3D 공간/객체 인식 및 멀티모달 AI 융합 기반 경상북도 경주 가상융합 관광 서비스 개발 및 실증',
            'Builds a virtual convergence tourism service for Gyeongju using 3D spatial and object recognition integrated with multimodal AI.': '3D 공간 및 객체 인식과 멀티모달 AI를 결합해 경주를 위한 가상융합 관광 서비스를 구축합니다.',
            'Korea Radio Promotion Association (RAPA)': '한국전파진흥협회(RAPA)',
            'Large-Scale AI-based Defense Product Design and Maintenance Service Demonstration': '초거대 AI 기반 방산품 설계 및 유지보수 서비스 실증',
            'Demonstrates hyper-scale AI convergence service using AI and spatial computing (XR) for military supply manufacturing productivity.': 'AI와 공간 컴퓨팅(XR)을 활용해 군수품 제조 생산성을 높이는 초거대 AI 융합 서비스를 실증합니다.',
            'Ministry of Science and ICT, NIA': '과학기술정보통신부, 한국지능정보사회진흥원(NIA)',
            '2026 Startup-Leading University Support Program (University Track)': '2026 창업중심대학 지원사업(대학 트랙)',
            'Supports university-led startup ecosystem development, entrepreneurship education, and deep-tech commercialization.': '대학 주도의 창업 생태계 조성, 창업 교육, 딥테크 사업화를 지원합니다.',
            'Ministry of SMEs and Startups': '중소벤처기업부',
            'RISE Manufacturing Industry AX Transformation Partnership Program - Integrated Operation Technology for Manufacturing-Logistics Linked AI Smart Glasses': 'RISE 제조산업 AX 전환 협업 프로그램 - 제조-물류 연계 AI 스마트 글래스 통합 운영 기술',
            'Develops AI smart-glass-based integrated operation technology connecting manufacturing and logistics workflows.': '제조와 물류 업무 흐름을 연결하는 AI 스마트 글래스 기반 통합 운영 기술을 개발합니다.',
            'Regional Innovation System & Education (RISE) Program': '지역혁신중심 대학지원체계(RISE) 프로그램',
            'Gyeongbuk AI·Metaverse Academy for Employment-Linked Talent Development': '경북 AI·메타버스 아카데미 취업연계 인재양성',
            'Develops practical AI, metaverse, and digital twin projects for regional manufacturing DX': '지역 제조 DX를 위한 실무형 AI, 메타버스, 디지털 트윈 프로젝트를 개발합니다.',
            'Gyeongsangbuk-do': '경상북도',
            'ESS Real-time Monitoring and Management Communication Security System Development / Construction / Installation': 'ESS 실시간 모니터링 및 관리 통신 보안 시스템 개발/구축/설치',
            'Designs and implements a communication security framework for ESS real-time monitoring and management infrastructure.': 'ESS 실시간 모니터링 및 관리 인프라를 위한 통신 보안 프레임워크를 설계하고 구현합니다.',
            'Daejung ICT': '대정아이씨티',
            'Development of a Monitoring Data Visualization Interface': '모니터링 데이터 시각화 인터페이스 개발',
            'Develops an interactive visualization interface for real-time monitoring data to support operational decision-making.': '운영 의사결정을 지원하기 위해 실시간 모니터링 데이터를 위한 인터랙티브 시각화 인터페이스를 개발합니다.',
            'Korea Electronics Technology Institute (KETI)': '한국전자기술연구원(KETI)',
            'AI-based Facility Anomaly Detection and Predictive Maintenance Solution': 'AI 기반 설비 이상 탐지 및 예지보전 솔루션',
            'Creates an AI-based predictive maintenance solution to detect equipment failures and reduce downtime in industrial facilities.': '산업 설비의 고장 징후를 탐지하고 다운타임을 줄이는 AI 기반 예지보전 솔루션을 개발합니다.',
            'Research on ICT Technology Discovery Linked to Digital Twin': '디지털 트윈 연계 ICT 기술 발굴 연구',
            'Focuses on data visualization for Energy Storage Systems and XR-based strategies including tracking technologies.': 'ESS 데이터 시각화와 추적 기술을 포함한 XR 기반 활용 전략을 연구합니다.',
            'Development of a Traffic Accident Video Analysis System': '교통사고 영상 분석 시스템 개발',
            'Develops technologies for analyzing accident footage, including vehicle speed and steering angle estimation from video analysis.': '영상 분석을 통한 차량 속도 및 조향각 추정 등 교통사고 영상 분석 기술을 개발합니다.',
            'Korea Insurance Development Institute': '보험개발원',
            'Development of Effective Interaction Technology and Contents for Immersive XR and 3D Interaction': '몰입형 XR 및 3D 상호작용을 위한 효과적 인터랙션 기술 및 콘텐츠 개발',
            'Creates XR/metaverse interaction technology supporting vulnerable populations and defense manufacturing environments.': '취약계층과 방산 제조 환경을 지원하는 XR/메타버스 상호작용 기술을 개발합니다.',
            'Development of Spatial Computing XR Multimodal Interaction Technology': 'Spatial Computing XR 멀티모달 인터랙션 기술 개발',
            'Develops multimodal interaction technology for spatial computing devices such as Apple Vision Pro.': 'Apple Vision Pro와 같은 공간 컴퓨팅 기기를 위한 멀티모달 상호작용 기술을 개발합니다.',
            'S Corporation': 'S사',
            'AI-based Competency Evaluation Model and Algorithm for QA Utilization in Customer Service Agents': '상담원 QA 활용을 위한 AI 기반 역량 평가 모델 및 알고리즘 개발',
            'Develops an AI-driven model inspired by the MBTI framework integrating NLP and voice analysis for call center evaluation.': '콜센터 상담원 평가를 위해 NLP와 음성 분석을 통합한 MBTI 기반 AI 모델을 개발합니다.',
            'Kwangwoon University Industry-Academic Cooperation': '광운대학교 산학협력단',
            'Large-Scale AI-based Industry-Academia-Research Cooperation Ecosystem': '초거대 AI 기반 산학연 협력 생태계',
            'Establishes a hyper-scale AI convergence collaboration system with talent development and startup support.': '인재 양성과 창업 지원을 포함한 초거대 AI 융합 협력 체계를 구축합니다.',
            'Smart Mirror and Immersive Content Based Tourism Course and Applied Technologies': '스마트 미러 및 실감 콘텐츠 기반 관광 코스와 응용 기술',
            'Creates an immersive local history and nature tourism cultural content platform for smart mirrors.': '스마트 미러 기반 지역 역사·자연 관광 실감형 문화 콘텐츠 플랫폼을 개발합니다.',
            'Ministry of Culture, Sports and Tourism, KOCCA': '문화체육관광부, 한국콘텐츠진흥원(KOCCA)',
            'The Expandable Park Platform Technology Development and Demonstration based on Metaverse & AI Convergence': '메타버스·AI 융합 기반 확장형 파크 플랫폼 기술 개발 및 실증',
            'Develops a scalable support platform through metaverse-based AI and immersive content commercialization.': '메타버스 기반 AI와 실감 콘텐츠 사업화를 통해 확장 가능한 지원 플랫폼을 개발합니다.',
            'Intelligent Digital Contents Production Technology Development and Platform Establishment Project': '지능형 디지털 콘텐츠 제작 기술 개발 및 플랫폼 구축 사업',
            'Creates AI, blockchain, and NFT-based technologies for digital content production platforms.': '디지털 콘텐츠 제작 플랫폼을 위한 AI, 블록체인, NFT 기반 기술을 개발합니다.',
            'Ministry of Science and ICT, Innopolis Foundation': '과학기술정보통신부, 연구개발특구진흥재단',
            'Development of a Music-based Functional Content Platform to Improve Social and Communication Skills among Individuals with Communication Deficits': '의사소통 장애인의 사회성 및 의사소통 능력 향상을 위한 음악 기반 기능성 콘텐츠 플랫폼 개발',
            'Develops a content support platform analyzing music activity data to enhance social communication for youth and adults.': '음악 활동 데이터를 분석해 청소년과 성인의 사회적 의사소통 능력을 향상시키는 콘텐츠 지원 플랫폼을 개발합니다.',
            'Asian Community Heritage Culture Platform Construction Project': '아시아 공동체 문화유산 플랫폼 구축 사업',
            'Constructs a transmission model integrating cultural heritage with AI and cultural technology for preservation.': '문화유산 보존을 위해 AI와 문화기술을 결합한 전승 모델을 구축합니다.',
            'Gwangju Metropolitan City, Gwangju Information & Culture Industry Promotion Agency': '광주광역시, 광주정보문화산업진흥원',
            'Virtual Reality-based Collaborative Crime Scene Reconstruction': '가상현실 기반 협업형 범죄 현장 재구성',
            'Virtual reality-based collaborative 3D reconstruction of crime scenes and investigation support system.': '범죄 현장의 협업형 3D 재구성과 수사 지원을 위한 가상현실 시스템입니다.',

            'International Conferences': '국제학술대회',
            'International Journals (SCIE)': '국제학술지(SCIE)',
            'Domestic Journals (KCI)': '국내학술지(KCI)',
            'Domestic Conferences': '국내학술대회',
            'IEEE ISMAR 2026 (CS 우수 국제학술대회, Conditionally Accepted)': 'IEEE ISMAR 2026(CS 우수 국제학술대회, 조건부 채택)',
            'IEEE VR 2027 (Under Review)': 'IEEE VR 2027 (심사 중)',

            'Undergraduate': '학부',
            'Graduate': '대학원',
            'Multimedia': '멀티미디어',
            'Computer Graphics': '컴퓨터그래픽스',
            'Windows Programming': '윈도우즈프로그래밍',
            'Metaverse Immersive Technology': '메타버스실감기술',
            'Creative Convergence Comprehensive Design 1': '창의융합종합설계1',
            'Creative Convergence Comprehensive Design 2': '창의융합종합설계2',
            'Capstone Design 1': '캡스톤디자인1',
            'Capstone Design 2': '캡스톤디자인2',
            'Multimedia Advanced Topics': '멀티미디어특론',
            'Extended Reality Advanced Topics': '확장현실특론',

            'Kit Engineering Fair 2025 - Participation Award': 'Kit Engineering Fair 2025 - 참가상',
            'Donghee Lee, Seunghyeon Han, Taejin Bae, Eunyoung Kim · Kumoh National Institute of Technology': '이동희, 한승현, 배태진, 김은영 · 국립금오공과대학교',
            'GameAlfy Contest - Korea Game Society Award': 'GameAlfy Contest - 한국게임학회상',
            'Yoongi Nam (Team: DaSo) · Korea Game Society': '남윤기(팀 DaSo) · 한국게임학회',
            'Commendation Award': '표창장',
            'Jeonghyeon Kim · Awarded by a Member of the National Assembly of Korea, Kumoh National Institute of Technology': '김정현 · 대한민국 국회의원 표창, 국립금오공과대학교',
            'National Assembly Member Commendation': '국회의원 포상',
            'Hyeongjun Kang, Donghee Lee · Kumoh National Institute of Technology': '강형준, 이동희 · 국립금오공과대학교',
            'Graduation Award': '졸업포상',
            'Hyeongjun Kang · Kumoh National Institute of Technology': '강형준 · 국립금오공과대학교',
            'Honorable Mention - 2024 AI Capstone Design Competition': '장려상 - 2024 AI 캡스톤디자인 경진대회',
            'Minsu Kim, Jeonghyeon Kim · Kumoh National Institute of Technology': '김민수, 김정현 · 국립금오공과대학교',
            'Outstanding Prize (2nd) - 2024 AI Capstone Design Competition': '우수상(2등) - 2024 AI 캡스톤디자인 경진대회',
            'Gu Kim, Jemin Lee, Kikong Lee, Junseok Im · Kumoh National Institute of Technology': '김구, 이제민, 이기공, 임준석 · 국립금오공과대학교',
            'Bronze Prize (3rd) - 2024 Fall Korea Digital Contents Society Conference': '동상(3등) - 2024 한국디지털콘텐츠학회 추계학술대회',
            'Jeonghyeon Kim, Jemin Lee, Youngwon Kim · Kumoh National Institute of Technology': '김정현, 이제민, 김영원 · 국립금오공과대학교',

            '26.09. Interim Review Demonstration (NIA)': '26.09. 중간보고회 시연 (NIA)',
            '26.09. Assembly Scenario': '26.09. 조립 시나리오',
            '26.08. Graduation Ceremony': '26.08. 졸업식',
            '26.07. Drone Flight': '26.07. 드론 비행',
            '26.07. Academic Paper Competition of the Digital Contents Society': '26.07 한국디지털콘텐츠학회 논문 경진대회',
            '26.07. Jeju MT': '26.07 제주 MT',
            '26.06. Gyeongbuk Teacher Training': '26.06. 경북 교사 연수',
            '26.04. Lunch': '26.04. 점심 식사',
            '26.03. Building Computers': '26.03. 컴퓨터 조립',
            '25.12. Lab dinner': '25.12. 연구실 회식',
            '25.11. Demo Session at VRST 2025': '25.11. VRST 2025 데모 세션',
            '25.11. Paper Presentation at VRST 2025': '25.11. VRST 2025 논문 발표',
            '25.10. Paper Presentation at ISMAR 2025': '25.10. ISMAR 2025 논문 발표',
            '25.09. (NIA) Progress Review Meeting': '25.09. (NIA) 진도 점검 회의',
            '25.10. Attending ISMAR 2025': '25.10. ISMAR 2025 참석',
            "25.05. Teachers' Day": '25.05. 스승의 날',
            '25.04. Attending the CHI 2025 Conference': '25.04. CHI 2025 학회 참석',
            '25.01. Technology demonstration at the Korea Electronics Technology Institute': '25.01. 한국전자기술연구원 기술 시연',
            '24.12. AI Capstone Design Competition at Youngnam University': '24.12. 영남대학교 AI 캡스톤디자인 경진대회',
            '24.11. Academic Paper Competition of the Digital Contents Society': '24.11. 한국디지털콘텐츠학회 논문 경진대회',
            '24.11. Engineering Fair at Kumoh National Institute of Technology': '24.11. 국립금오공과대학교 Engineering Fair',
            '24.10. Multimodal AI Poster Presentation': '24.10. 멀티모달 AI 포스터 발표',
            '24.10. English Study': '24.10. 영어 스터디',
            "24.09. Celebrating Our Professor's Birthday": '24.09. 교수님 생신 축하',
            '24.07. Vision Pro Experience': '24.07. Vision Pro 체험',
            '24.07. Lab dinner': '24.07. 연구실 회식',
            '24.07. Photo of our lab': '24.07. 연구실 단체 사진',

            'Address': '주소',
            'D333, Digital Building': '디지털관 D333호',
            '61 Daehak-ro, Gumi-si, Gyeongsangbuk-do': '경상북도 구미시 대학로 61',
            'Email': '이메일',
            'Web': '웹',
            'HAX Lab - Human-centered AX Lab': 'HAX Lab - 인간 중심 AX 연구실',
            '© 2024-2026 Kumoh National Institute of Technology': '© 2024-2026 국립금오공과대학교'
        }
    };

    const koPreservedText = [
        'Home',
        'News',
        'People',
        'Research',
        'Projects',
        'Publications',
        'Courses',
        'Awards',
        'Gallery',
        'Contact',
        'HAXIS',
        'Human-Computer Interaction · Extended Reality Research',
        'Human-centered AX Lab',
        '(HAX Lab)',
        'HAX Lab Highlights',
        'View All News →',
        'Award',
        'Grant',
        'Member',
        'Conf',
        'Conference',
        'Paper',
        'Lab',
        'Press coverage',
        'M.S. Students',
        'Undergraduate Students',
        'Academic Break',
        'Alumni',
        'Recruiting',
        'Position Open',
        'Back to People',
        'About',
        'Education',
        'Work Experience',
        'Research Interests',
        'Ongoing Projects',
        'Awards & Honors',
        'Experiences',
        'Academic Activities',
        'Reviewer',
        'Program Committee',
        'Associate Editor',
        'Invited Talks',
        'Skills',
        'Languages:',
        'Programming:',
        'Others:',
        'GPA:',
        'Ongoing',
        'Completed',
        'Email',
        'Web',
        'Address',
        'HAX Lab - Human-centered AX Lab',
        '© 2024-2026 Kumoh National Institute of Technology'
    ];

    Object.assign(
        dictionaries.ko,
        Object.fromEntries(koPreservedText.map(text => [text, text]))
    );

    const textOriginals = new WeakMap();
    const attrOriginals = new WeakMap();
    const translatableAttrs = ['alt', 'aria-label', 'title'];
    const skipTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'CODE', 'PRE']);
    let currentLanguage = DEFAULT_LANG;

    function normalize(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    function preserveOuterWhitespace(original, translated) {
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        return leading + translated + trailing;
    }

    function translateText(original, lang) {
        const key = normalize(original);
        if (!key) return original;
        const translated = dictionaries[lang]?.[key];
        return translated ? preserveOuterWhitespace(original, translated) : original;
    }

    function shouldSkipElement(el) {
        return !el || skipTags.has(el.tagName) || el.closest('[data-no-i18n], .notranslate');
    }

    function translateTextNodes(root, lang) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
                if (shouldSkipElement(node.parentElement)) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
            node.nodeValue = translateText(textOriginals.get(node), lang);
        });
    }

    function translateAttributes(root, lang) {
        root.querySelectorAll('*').forEach(el => {
            if (shouldSkipElement(el)) return;

            translatableAttrs.forEach(attr => {
                if (!el.hasAttribute(attr)) return;

                let originals = attrOriginals.get(el);
                if (!originals) {
                    originals = {};
                    attrOriginals.set(el, originals);
                }
                if (!(attr in originals)) originals[attr] = el.getAttribute(attr);

                el.setAttribute(attr, translateText(originals[attr], lang));
            });
        });
    }

    function updateButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(button => {
            const active = button.dataset.lang === lang;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }

    function applyLanguage(lang = currentLanguage) {
        document.dispatchEvent(new CustomEvent('hax:i18n-before-apply'));
        currentLanguage = dictionaries[lang] ? lang : DEFAULT_LANG;
        document.documentElement.lang = currentLanguage === 'ko' ? 'ko' : 'en';
        translateTextNodes(document.body, currentLanguage);
        translateAttributes(document.body, currentLanguage);
        updateButtons(currentLanguage);
        document.dispatchEvent(new CustomEvent('hax:i18n-applied', {
            detail: { lang: currentLanguage }
        }));
    }

    function setLanguage(lang) {
        currentLanguage = dictionaries[lang] ? lang : DEFAULT_LANG;
        localStorage.setItem(STORAGE_KEY, currentLanguage);
        applyLanguage(currentLanguage);
    }

    function initLanguage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        currentLanguage = dictionaries[saved] ? saved : DEFAULT_LANG;

        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', () => setLanguage(button.dataset.lang));
        });

        applyLanguage(currentLanguage);
    }

    window.HAX_I18N = {
        apply: applyLanguage,
        setLanguage,
        getLanguage: () => currentLanguage,
        t: (text, lang = currentLanguage) => normalize(translateText(text, lang))
    };

    document.addEventListener('DOMContentLoaded', initLanguage);
})();
