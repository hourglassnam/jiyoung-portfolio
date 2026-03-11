# Component API — Ji Young Nam Portfolio

> Figma "Portfolio Vibe Code" 기준으로 정의된 컴포넌트 스펙.  
> 모든 스타일 값은 `design-tokens.ts`에서 import. 직접 하드코딩 금지.

---

## NavBar

### 개요

단일 컴포넌트. `window.innerWidth` 또는 CSS media query 기반으로  
Desktop(≥744px)과 Mobile(<744px) 렌더링을 내부에서 분기한다.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| — | — | — | — | 외부 props 없음. 내부에서 `useLocation()` 으로 active 경로 판별 |

### 내부 상태

| state | type | 설명 |
|-------|------|------|
| `isMenuOpen` | `boolean` | Mobile Drawer 열림/닫힘 |

### Desktop 렌더링 (≥ 744px)

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]          Work   Playground        Resume  About  │  height: 64px
└─────────────────────────────────────────────────────────┘
```

- `position: fixed; top: 0; width: 100%; z-index: 100`
- 로고: SVG, `<Link to="/">`
- 링크 그룹 좌측: Work, Playground
- 링크 그룹 우측: Resume, About
- 배경: `var(--color-bg-surface)` / `var(--color-bg-page)` (Figma 기준)

### Mobile 렌더링 (< 744px)

```
┌──────────────────────┐
│  [Logo]   ☰          │  height: 72px
└──────────────────────┘

☰ 클릭 시 →

┌──────────┐
│  [X]     │  Drawer: width 280px, height 100vh
│  Work    │  오른쪽에서 슬라이드인
│  Playground │
│  About   │
│  Resume  │
└──────────┘
+ 배경 Overlay (rgba 반투명)
```

- 햄버거(☰) 클릭 → `isMenuOpen = true` → Drawer + Overlay 표시
- X 버튼 또는 Overlay 클릭 → `isMenuOpen = false`
- 링크 클릭 → Drawer 닫힘 + 해당 경로로 이동
- Drawer 각 항목 height: 46px

### States

| state | 설명 |
|-------|------|
| default | 일반 상태 |
| active | 현재 경로와 일치 (`useLocation().pathname`) — 폰트 weight 강조 |
| menu-open | Mobile Drawer 열림 상태 |

### 사용 예시

```tsx
// App.tsx — NavBar는 라우터 외부에서 한 번만 렌더링
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
```

---

## NavLink

### 개요

NavBar 안에서만 사용되는 단일 링크 단위. React Router `<Link>`를 래핑.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `to` | `string` | ✅ | — | 이동할 경로 (`/work/wage` 등) |
| `label` | `string` | ✅ | — | 표시할 텍스트 |
| `onClick` | `() => void` | ❌ | — | 클릭 시 추가 동작 (Drawer 닫기 등) |
| `variant` | `'desktop' \| 'mobile'` | ❌ | `'desktop'` | 렌더링 스타일 |

### States

| state | 스타일 |
|-------|--------|
| default | `color: var(--color-text-secondary)`, `font-weight: 500` |
| hover | `color: var(--color-text-primary)`, underline 또는 opacity 변화 |
| active | `color: var(--color-text-primary)`, `font-weight: 600` |
| focus-visible | outline (접근성) |

### 사용 예시

```tsx
import NavLink from './NavLink/NavLink';

<NavLink to="/work/wage" label="Work" onClick={() => setIsMenuOpen(false)} />
```

---

## ProjectCard

### 개요

Home 페이지의 프로젝트 그리드에서 각 케이스 스터디로 이동하는 카드.  
Figma `Thumbnail Card` 컴포넌트 기준.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `title` | `string` | ✅ | — | 프로젝트 이름 (`"Wage"`) |
| `description` | `string` | ✅ | — | 한 줄 설명 |
| `tags` | `string[]` | ✅ | — | 최대 3개 태그 (`["Product Design", "User Research", "Fintech"]`) |
| `thumbnail` | `string` | ✅ | — | 썸네일 이미지 경로 또는 컴포넌트 |
| `href` | `string` | ✅ | — | 이동할 경로 (`"/work/wage"`) |
| `variant` | `'default' \| 'mobile' \| 'coming-soon'` | ❌ | `'default'` | Figma variant 대응 |

### 라우트 연결

| title | href |
|-------|------|
| Wage | `/work/wage` |
| Heroes | `/work/heroes` |
| Wage Design System | `/work/wage-design-system` |
| OrbAid | `/work/orbaid` |
| Decompression Room | `/work/decompression-room` |

### 내부 구조 (Figma 기준)

```
┌──────────────────────────────┐
│  [Project Thumbnail Image]   │  상단: 이미지 영역
├──────────────────────────────┤
│  [Tag1] [Tag2] [Tag3]        │  type/label (16px Inter Medium)
│  Project Title               │  type/h5 (28px Noto Serif SemiBold)
│  Description text...         │  type/body (18px Inter Regular)
└──────────────────────────────┘
```

### States

| state | 스타일 |
|-------|--------|
| default | `box-shadow: var(--shadow-sm)` |
| hover | `box-shadow: var(--shadow-md)`, `transform: translateY(-2px)` |
| coming-soon | 썸네일 위에 "Coming Soon" 오버레이 |

### 사용 예시

```tsx
import ProjectCard from './components/ProjectCard/ProjectCard';

<ProjectCard
  title="Wage"
  description="Turning investing into a competitive training ground where beginners learn decision-making through gameplay."
  tags={["Product Design", "User Research", "Fintech"]}
  thumbnail="/assets/thumbnails/wage.png"
  href="/work/wage"
/>
```

---

## Button

### 개요

CTA, 폼 제출, 링크 이동 등에 사용하는 범용 버튼.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `label` | `string` | ✅ | — | 버튼 텍스트 |
| `onClick` | `() => void` | ❌ | — | 클릭 핸들러 |
| `href` | `string` | ❌ | — | 지정 시 `<Link>` 또는 `<a>`로 렌더링 |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | ❌ | `'primary'` | 시각적 스타일 |
| `size` | `'sm' \| 'md' \| 'lg'` | ❌ | `'md'` | 크기 |
| `disabled` | `boolean` | ❌ | `false` | 비활성화 |
| `leftIcon` | `React.ReactNode` | ❌ | — | 왼쪽 아이콘 |
| `rightIcon` | `React.ReactNode` | ❌ | — | 오른쪽 아이콘 |

### Variants × States

| variant | default | hover | active | disabled |
|---------|---------|-------|--------|----------|
| primary | `bg: var(--color-text-primary)`, white text | opacity 0.85 | scale 0.98 | opacity 0.4 |
| secondary | border + transparent bg | bg fill | — | opacity 0.4 |
| ghost | 텍스트만 | underline | — | opacity 0.4 |

### Sizes

| size | font | padding |
|------|------|---------|
| sm | 14px (caption) | `var(--spacing-2)` `var(--spacing-4)` |
| md | 16px (label) | `var(--spacing-3)` `var(--spacing-6)` |
| lg | 18px (body) | `var(--spacing-4)` `var(--spacing-8)` |

### 사용 예시

```tsx
import Button from './components/Button/Button';

<Button label="View Case Study" href="/work/wage" variant="primary" size="md" />
<Button label="Download Resume" onClick={handleDownload} variant="secondary" />
```

---

## Tag / Chip

### 개요

ProjectCard의 카테고리 레이블. Figma `Badge` 컴포넌트 기준.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `label` | `string` | ✅ | — | 태그 텍스트 |
| `color` | `'blue' \| 'sky' \| 'mint' \| 'yellow' \| 'pink' \| 'peach' \| 'default'` | ❌ | `'default'` | 배경 색상 (design-tokens `tag.*`) |
| `size` | `'sm' \| 'md' \| 'lg'` | ❌ | `'sm'` | 크기 |
| `fill` | `'solid' \| 'outline'` | ❌ | `'solid'` | 채우기 방식 |

### Color 토큰 매핑

| color | 배경 토큰 | 텍스트 |
|-------|----------|--------|
| blue | `colors.tag.blue` (#c2d3ed) | `colors.semantic.textPrimary` |
| sky | `colors.tag.sky` (#8bc2fa) | `colors.semantic.textPrimary` |
| mint | `colors.tag.mint` (#cbefe7) | `colors.semantic.textPrimary` |
| yellow | `colors.tag.yellow` (#fff5cb) | `colors.semantic.textPrimary` |
| pink | `colors.tag.pink` (#ffdfd9) | `colors.semantic.textPrimary` |
| peach | `colors.tag.peach` (#ffdeb2) | `colors.semantic.textPrimary` |

### 사용 예시

```tsx
import Tag from './components/Tag/Tag';

<Tag label="Product Design" color="blue" size="sm" />
<Tag label="User Research" color="mint" size="sm" />
<Tag label="Fintech" color="peach" size="sm" />
```

---

## SectionHeader

### 개요

각 섹션 상단의 레이블 + 제목 조합. 케이스 스터디 페이지와 Home 섹션에 공통 사용.

### Props

| prop | type | 필수 | 기본값 | 설명 |
|------|------|------|--------|------|
| `label` | `string` | ❌ | — | 상단 소제목 (e.g. `"01. CHALLENGE & Outcome"`) — `type/caption-medium` |
| `title` | `string` | ✅ | — | 메인 제목 — `type/h2` 또는 `type/h3` |
| `subtitle` | `string` | ❌ | — | 부제목 또는 설명 — `type/body` |
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4'` | ❌ | `'h2'` | 렌더링할 HTML heading 태그 |
| `align` | `'left' \| 'center'` | ❌ | `'left'` | 텍스트 정렬 |
| `accentColor` | `string` | ❌ | `var(--color-accent)` | label 색상 오버라이드 |

### 사용 예시

```tsx
import SectionHeader from './components/SectionHeader/SectionHeader';

// 케이스 스터디 섹션
<SectionHeader
  label="01. CHALLENGE & Outcome"
  title="What We Learned, What We Changed"
  level="h2"
/>

// 홈 섹션
<SectionHeader
  title="Selected Work"
  subtitle="A few things I've been building."
  align="left"
/>
```

---

## 컴포넌트 의존성 맵

```
App
├── NavBar  ← 전역. 모든 페이지에서 공통 렌더링. 여기서 한 번만 선언.
│   ├── Logo → /              ← 클릭 시 Home으로 이동
│   └── NavLink × 4
│       ├── "Work"        → /
│       ├── "Playground"  → /playground
│       ├── "Resume"      → /resume
│       └── "About"       → /about
│
├── / (Home)
│   ├── SectionHeader
│   └── ProjectCard × 5       ← 각 카드가 /work/* 로 이동
│       └── Tag × 1–3
│
├── /work/wage                 ← NavBar는 App에서 이미 렌더링되므로 여기선 선언 안 함
│   ├── SectionHeader
│   └── Button
├── /work/heroes
│   ├── SectionHeader
│   └── Button
├── /work/wage-design-system
│   ├── SectionHeader
│   └── Button
├── /work/orbaid
│   ├── SectionHeader
│   └── Button
├── /work/decompression-room
│   ├── SectionHeader
│   └── Button
│
├── /playground
├── /resume
└── /about
```

---

## CSS 변수 참조 (global.css에서 선언 필요)

```css
:root {
  /* Colors */
  --color-brand-600:     #2368ac;
  --color-neutral-100:   #f4f4f5;
  --color-text-primary:  #09090b;
  --color-text-secondary:#27272a;
  --color-text-muted:    #52525b;
  --color-text-disabled: #71717a;
  --color-text-inverse:  #fafafa;
  --color-bg-page:       #f4f4f5;
  --color-bg-surface:    #fafafa;
  --color-bg-dark:       #09090b;
  --color-accent:        #f76141;

  /* Spacing */
  --spacing-1:  4px;
  --spacing-2:  8px;
  --spacing-3:  12px;
  --spacing-4:  16px;
  --spacing-5:  20px;
  --spacing-6:  24px;
  --spacing-8:  32px;
  --spacing-10: 40px;
  --spacing-14: 56px;
  --spacing-20: 80px;

  /* Radius */
  --radius-xs:   12px;
  --radius-sm:   16px;
  --radius-md:   24px;
  --radius-full: 999px;

  /* Shadow */
  --shadow-sm: 0px 1px 10px rgba(0, 0, 0, 0.06);
  --shadow-md: 0px 16px 40px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0px 8px 60px rgba(0, 0, 0, 0.01);

  /* Breakpoints (참고용 — CSS에서는 직접 사용 불가) */
  /* mobile:  375px */
  /* tablet:  744px */
  /* desktop: 1440px */
}
```
