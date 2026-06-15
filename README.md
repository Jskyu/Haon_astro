# 하온 노동법률사무소

> 산재 전문 공인노무사 — 하늘아래 모든 분들이 온전한 행복을 누릴 수 있도록

**라이브 사이트:** https://jskyu.github.io/Haon_astro/

---

## 소개

하온 노동법률사무소의 공식 브로슈어 웹사이트입니다.  
산업재해·업무상질병 산재 신청, 평균임금 정정, 불승인 이의제기 등 노동법률 서비스를 안내합니다.

**주요 전문 분야**

- 소음성 난청
- 근골격계 질환 (인공관절, 허리디스크, 어깨·손목 등)
- 심뇌혈관 질환 (뇌출혈, 거미막하출혈, 급성심근경색 등)
- 폐질환 / 직업성 암
- 유족보상 / 출퇴근 재해
- 평균임금 정정 / 불승인 이의제기

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | [Astro](https://astro.build/) v4 |
| 스타일 | [Tailwind CSS](https://tailwindcss.com/) v3 |
| 배포 | GitHub Pages (정적 빌드) |

---

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

---

## 페이지 구성

| 경로 | 페이지 |
|---|---|
| `/` | 홈 |
| `/company-overview` | 대표 인사말 |
| `/specialty` | 전문 분야 |
| `/cases` | 성공사례 |
| `/location` | 오시는 길 |
| `/consulting` | 무료상담 신청 |
| `/guides/hearing-loss` | 가이드 — 소음성 난청 |
| `/guides/musculoskeletal` | 가이드 — 근골격계 질환 |
| `/guides/cardiovascular` | 가이드 — 심뇌혈관 질환 |
| `/guides/lung-disease` | 가이드 — 폐질환 |
| `/guides/occupational-cancer` | 가이드 — 직업성 암 |
| `/guides/survivors-compensation` | 가이드 — 유족보상 |
| `/guides/commuting-accident` | 가이드 — 출퇴근 재해 |

---

## 프로젝트 구조

```
src/
├── layouts/
│   └── Layout.astro              # 공통 레이아웃 (Head, Header, Footer)
├── components/
│   ├── Header.astro              # 네비게이션 (드롭다운, 모바일 메뉴)
│   └── Footer.astro              # 푸터
├── pages/
│   ├── index.astro
│   ├── company-overview.astro
│   ├── specialty.astro
│   ├── cases.astro
│   ├── location.astro
│   ├── consulting.astro
│   └── guides/
│       ├── hearing-loss.astro
│       ├── musculoskeletal.astro
│       ├── cardiovascular.astro
│       ├── lung-disease.astro
│       ├── occupational-cancer.astro
│       ├── survivors-compensation.astro
│       └── commuting-accident.astro
└── utils/
    └── url.ts                    # base URL 유틸 (GitHub Pages 경로 처리)
public/
└── logo.svg                      # 하온 로고 (파비콘 겸용)
```

---

## 주요 설정

### 연락처·주소 변경

`src/components/Header.astro`, `src/components/Footer.astro`, `src/pages/location.astro` 내 전화번호·주소·이메일을 수정합니다.

### 색상 테마

`tailwind.config.mjs`에서 `navy` / `gold` 값을 조정합니다.

```js
colors: {
  navy: { 700: '#1e3a5c', 800: '#142d4c', 900: '#0c1f35', 950: '#071526' },
  gold: { 400: '#e8c84a', 500: '#c9a227', 600: '#a8861e' },
}
```