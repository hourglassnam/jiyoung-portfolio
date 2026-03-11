// ============================================================
// design-tokens.ts
// Auto-extracted from Figma: Portfolio Vibe Code
// Source of truth: Figma Variables + Text Styles + Style Guide
// DO NOT manually edit — re-extract from Figma MCP if changed
// ============================================================

// ── Colors ──────────────────────────────────────────────────

export const colors = {
  brand: {
    50:  '#f0f6fd',
    100: '#ddeaf9',
    200: '#b8d4f3',
    300: '#85b6ea',
    400: '#548fdc',
    500: '#3170c4',
    600: '#2368ac',
    700: '#1c5490',
    800: '#174270',
    900: '#112f52',
    950: '#0b1e35',
  },

  neutral: {
    50:  '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  semantic: {
    textPrimary:   '#09090b',
    textSecondary: '#27272a',
    textMuted:     '#52525b',
    textDisabled:  '#71717a',
    textInverse:   '#fafafa',
    bgPage:        '#f4f4f5',
    bgSurface:     '#fafafa',
    bgDark:        '#09090b',
    accent:        '#f76141',
  },

  tag: {
    blue:   '#c2d3ed',
    sky:    '#8bc2fa',
    mint:   '#cbefe7',
    yellow: '#fff5cb',
    pink:   '#ffdfd9',
    peach:  '#ffdeb2',
  },

  // Wage project brand colors
  wage: {
    50:  '#f3eeff',
    100: '#e4d4fe',
    200: '#c9aafd',
    300: '#a87bfb',
    400: '#8a4ef8',
    500: '#6d28f5',
    600: '#4701b6',
    700: '#3a0192',
    800: '#2d006e',
    900: '#1e004a',
    950: '#110029',
    primary:   '#4701b6',
    primaryLt: '#6d28f5',
    bg:        '#f3eeff',
    text:      '#1e004a',
    accent:    '#a87bfb',
  },
} as const;

// ── Typography ───────────────────────────────────────────────

export const typography = {
  fontFamily: {
    serif:    '"Noto Serif Georgian", Georgia, serif',
    sans:     '"Inter", system-ui, -apple-system, sans-serif',
  },

  fontWeight: {
    regular:  400,
    medium:   500,
    semiBold: 600,
    bold:     700,
  },

  // Text styles — exactly as defined in Figma
  styles: {
    display: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '88px',
      fontWeight: 500,         // Medium
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    h1: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '64px',
      fontWeight: 400,         // Regular
      lineHeight: '100%',
      letterSpacing: '-0.53px',
    },
    h1Semibold: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '64px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '-1.5px',
    },
    h2: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '56px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '-1.5px',
    },
    h3: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '48px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '-1.5px',
    },
    h4: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '32px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '-1.5px',
    },
    h5: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '28px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    h5Regular: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '28px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    bodyLgSerif: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '24px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '-0.6px',
    },
    bodyLgSerif20: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '20px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    bodySerif: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '18px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    labelSerif16: {
      fontFamily: '"Noto Serif Georgian", Georgia, serif',
      fontSize:   '16px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    bodyLgSans: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '24px',
      fontWeight: 500,         // Medium
      lineHeight: '120%',
      letterSpacing: '-1.5px',
    },
    bodyLgSans20: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '20px',
      fontWeight: 600,         // Semi Bold
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    labelSans20: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '20px',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    body: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '18px',
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '0px',
    },
    bodySansSemibold: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '18px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    label: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '16px',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    bodyMobile: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '16px',
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '0px',
    },
    caption: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '14px',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    captionMedium: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '14px',
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
    captionSemibold26: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize:   '26px',
      fontWeight: 600,
      lineHeight: '120%',
      letterSpacing: '0px',
    },
  },
} as const;

// ── Spacing ──────────────────────────────────────────────────
// Based on Figma spacing variables (4px base unit)

export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  10: '40px',
  14: '56px',
  20: '80px',
} as const;

// Raw number values (useful for calc() or JS logic)
export const spacingRaw = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  14: 56,
  20: 80,
} as const;

// ── Border Radius ────────────────────────────────────────────

export const radius = {
  xs:   '12px',
  sm:   '16px',
  md:   '24px',
  full: '999px',
} as const;

// ── Shadow / Elevation ───────────────────────────────────────
// Extracted from Figma 05_Shadow section

export const shadow = {
  sm: '0px 1px 10px rgba(0, 0, 0, 0.06)',
  md: '0px 16px 40px rgba(0, 0, 0, 0.03)',
  lg: '0px 8px 60px rgba(0, 0, 0, 0.01)',
} as const;

// ── Breakpoints ──────────────────────────────────────────────
// Figma frame widths: 375 / 744 / 1440 — desktop breakpoint overridden to 1024

export const breakpoints = {
  mobile:  375,
  tablet:  744,
  desktop: 1024,
} as const;

// CSS media query strings
export const mediaQuery = {
  mobile:        '@media (max-width: 743px)',
  tablet:        '@media (min-width: 744px) and (max-width: 1023px)',
  tabletUp:      '@media (min-width: 744px)',
  desktop:       '@media (min-width: 1024px)',
  desktopDown:   '@media (max-width: 1023px)',
} as const;
