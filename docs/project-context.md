# Project Context — Ji Young Nam Portfolio

> 이 파일은 코드 저장소의 단일 진실 공급원(Single Source of Truth)입니다.  
> 새 컴포넌트나 페이지를 만들기 전에 반드시 읽으세요.

---

## 1. 스택

| 항목 | 선택 |
|------|------|
| UI 프레임워크 | React 18 (빌드 툴은 추후 결정 — Vite 또는 CRA) |
| 스타일링 | Vanilla CSS (CSS Modules 또는 plain `.css`) — Tailwind **사용 안 함** |
| 라우팅 | React Router v6 (`<BrowserRouter>`, `<Link>`, `useNavigate`) |
| 언어 | TypeScript |
| 디자인 소스 | Figma — "Portfolio Vibe Code" 파일 (Figma MCP로 접근 가능) |
| 토큰 파일 | `src/styles/design-tokens.ts` |

---

## 2. 폴더 구조

```
src/
├── components/          # 재사용 UI 컴포넌트
│   ├── NavBar/
│   │   ├── NavBar.tsx
│   │   └── NavBar.css
│   ├── NavLink/
│   ├── ProjectCard/
│   ├── Button/
│   ├── Tag/
│   └── SectionHeader/
├── pages/               # 라우트 단위 페이지
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── About/
│   ├── Playground/
│   ├── Resume/
│   └── work/            # 케이스 스터디 페이지들
│       ├── Wage/
│       ├── Heroes/
│       ├── WageDesignSystem/
│       ├── OrbAid/
│       └── DecompressionRoom/
├── styles/
│   ├── design-tokens.ts # Figma에서 추출한 토큰 — 직접 수정 금지
│   ├── global.css       # reset, body, :root CSS variables
│   └── typography.css   # @font-face, 공통 타입 유틸
├── assets/              # 이미지, 아이콘, 폰트
├── App.tsx              # 라우터 설정
└── main.tsx             # 엔트리포인트
docs/
├── project-context.md   # ← 이 파일
└── component-api.md
```

---

## 3. Design Tokens 사용 원칙

> **코드에서 색상, 폰트, spacing, radius, shadow 값을 직접 하드코딩하지 않는다.**  
> 반드시 `design-tokens.ts`에서 import하거나, `global.css`에서 선언된 CSS 변수(`--color-*`, `--spacing-*`)를 사용한다.

### 3-1. TypeScript에서 사용

```ts
import { colors, spacing, typography, radius, shadow } from '@/styles/design-tokens';

const cardStyle: React.CSSProperties = {
  backgroundColor: colors.semantic.bgSurface,  // '#fafafa'
  padding: spacing[6],                          // '24px'
  borderRadius: radius.sm,                      // '16px'
  boxShadow: shadow.sm,                         // '0px 1px 10px rgba(0,0,0,0.06)'
};
```

### 3-2. CSS에서 사용 (권장)

`global.css`에서 토큰을 CSS 변수로 선언하고, 각 컴포넌트 CSS에서 var()로 참조한다.

```css
/* global.css */
:root {
  --color-bg-page:    #f4f4f5;
  --color-bg-surface: #fafafa;
  --color-text-primary: #09090b;
  --color-accent:     #f76141;
  --spacing-4:  16px;
  --spacing-6:  24px;
  --radius-sm:  16px;
  --shadow-sm:  0px 1px 10px rgba(0, 0, 0, 0.06);
}

/* ProjectCard.css */
.card {
  background: var(--color-bg-surface);
  padding: var(--spacing-6);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}
```

### 3-3. 새 값이 필요할 때

1. Figma 파일에서 값 확인
2. `design-tokens.ts`에 추가 (Figma MCP로 추출)
3. `global.css` `:root`에 CSS 변수 추가
4. 그 후 컴포넌트에서 사용

---

## 4. 페이지 & 라우트 목록

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | `<Home>` | 포트폴리오 메인 — Hero 섹션 + 프로젝트 카드 그리드 |
| `/work/wage` | `<Wage>` | Wage 케이스 스터디 |
| `/work/heroes` | `<Heroes>` | Heroes 케이스 스터디 |
| `/work/wage-design-system` | `<WageDesignSystem>` | Wage Design System 케이스 스터디 |
| `/work/orbaid` | `<OrbAid>` | OrbAid 케이스 스터디 |
| `/work/decompression-room` | `<DecompressionRoom>` | ABC News VR 케이스 스터디 |
| `/about` | `<About>` | About 페이지 |
| `/playground` | `<Playground>` | Playground 페이지 |
| `/resume` | `<Resume>` | 이력서 페이지 |

### App.tsx 기본 구조

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Wage from './pages/work/Wage/Wage';
// ...

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"                         element={<Home />} />
        <Route path="/work/wage"                element={<Wage />} />
        <Route path="/work/heroes"              element={<Heroes />} />
        <Route path="/work/wage-design-system"  element={<WageDesignSystem />} />
        <Route path="/work/orbaid"              element={<OrbAid />} />
        <Route path="/work/decompression-room"  element={<DecompressionRoom />} />
        <Route path="/about"                    element={<About />} />
        <Route path="/playground"               element={<Playground />} />
        <Route path="/resume"                   element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 5. 네비게이션 동작 규칙

### Desktop (≥ 1440px / 태블릿 744px도 같은 패턴 사용)

- 상단 고정 `<nav>` 바 (height: 64px)
- 좌측: 로고 (SVG, 홈으로 링크)
- 중앙/우측: `Work` / `Playground` / `Resume` / `About` 텍스트 링크 가로 나열
- `position: fixed; top: 0;` — 스크롤 시 항상 상단 고정
- active 링크: 현재 경로와 일치하면 색상/weight 강조

### Mobile (< 744px)

- 상단 바 (height: 72px) + 로고 + 햄버거 아이콘 (3-line)
- 햄버거 클릭 → 오른쪽에서 슬라이드인 되는 Drawer (width: 280px, height: 100vh)
- Drawer 안에: X 닫기 버튼 + Work / Playground / About / Resume 목록 (세로 나열, 각 항목 height: 46px)
- Drawer 열릴 때: 배경에 overlay (반투명 검정) 적용
- 링크 클릭 시: Drawer 닫히고 해당 경로로 이동
- Figma 기준: `Size=Mobile` (72px) + `Size=Mobile_Burger_Popup` (280×813px drawer)

### 공통 규칙

- 모든 링크는 `<Link>` (React Router) — `<a href>` 사용 금지
- `NavBar`는 단일 컴포넌트. viewport width에 따라 내부 렌더링만 달라짐
- `useLocation()`으로 현재 경로를 읽어 active 상태 적용

---

## 6. 반응형 브레이크포인트

Figma 프레임 width 기준:

| 이름 | 기준 | CSS media query |
|------|------|-----------------|
| Mobile | ≤ 743px | `@media (max-width: 743px)` |
| Tablet | 744px – 1439px | `@media (min-width: 744px) and (max-width: 1439px)` |
| Desktop | ≥ 1440px | `@media (min-width: 1440px)` |

> 모바일 네비게이션 전환 기준: `max-width: 743px`  
> 태블릿은 데스크탑 nav 패턴 유지 (링크 가로 나열)

---

## 7. 폰트

| 폰트 | 용도 |
|------|------|
| `Noto Serif Georgian` | 모든 heading (display, h1–h5), body-serif |
| `Inter` | 모든 sans body, label, caption, UI 텍스트 |

Google Fonts 또는 self-hosting으로 로드. Tailwind 없이 `@font-face` 또는 `<link>` 태그로 직접 선언.
