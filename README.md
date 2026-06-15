# 하온 노동법률사무소

산재 전문 공인 노동법률사무소 브로슈어 웹사이트

## 기술 스택

- [Astro](https://astro.build/) v4
- [Tailwind CSS](https://tailwindcss.com/) v3
- 정적 사이트(Static Site) 빌드

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 페이지 구성

| 경로 | 페이지 |
|---|---|
| `/` | 홈 |
| `/company-overview` | 대표 인사말 |
| `/specialty` | 전문 분야 |
| `/cases` | 성공사례 |
| `/location` | 오시는 길 |
| `/consulting` | 무료상담 |
| `/guides/hearing-loss` | 산재 가이드 — 소음성 난청 |
| `/guides/musculoskeletal` | 산재 가이드 — 근골격계 질환 |
| `/guides/cardiovascular` | 산재 가이드 — 심뇌혈관 질환 |
| `/guides/lung-disease` | 산재 가이드 — 폐질환 |
| `/guides/occupational-cancer` | 산재 가이드 — 직업성 암 |
| `/guides/survivors-compensation` | 산재 가이드 — 유족보상 |
| `/guides/commuting-accident` | 산재 가이드 — 출퇴근 재해 |

## 프로젝트 구조

```
src/
├── layouts/
│   └── Layout.astro          # 공통 레이아웃 (Head, Header, Footer 포함)
├── components/
│   ├── Header.astro           # 네비게이션 (드롭다운, 모바일 메뉴)
│   └── Footer.astro           # 푸터
└── pages/
    ├── index.astro
    ├── company-overview.astro
    ├── specialty.astro
    ├── cases.astro
    ├── location.astro
    ├── consulting.astro
    └── guides/
        ├── hearing-loss.astro
        ├── musculoskeletal.astro
        ├── cardiovascular.astro
        ├── lung-disease.astro
        ├── occupational-cancer.astro
        ├── survivors-compensation.astro
        └── commuting-accident.astro
public/
└── logo.svg                   # SVG 로고 (하 자 기하학 획 디자인)
```

## 커스터마이징

### 연락처·주소 변경

`src/components/Header.astro`, `Footer.astro`, `src/pages/location.astro` 내 전화번호·주소·이메일을 실제 정보로 교체합니다.

### 네이버 지도 연동

`src/pages/location.astro` 하단 `<script>` 블록의 주석을 해제하고 `YOUR_NCP_KEY_ID`를 [네이버 클라우드 플랫폼](https://console.ncloud.com/)에서 발급받은 키로 교체합니다.

### 상담 폼 백엔드 연결

`src/pages/consulting.astro`의 form submit 핸들러에서 `fetch` 호출 주석을 해제하고 [Formspree](https://formspree.io/) 엔드포인트 또는 자체 API URL로 교체합니다.

### 색상 테마

`tailwind.config.mjs`의 `navy` / `gold` 색상 값을 수정합니다.
