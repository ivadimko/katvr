import { css, FlattenSimpleInterpolation } from 'styled-components';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type BreakpointsList = { [key in Breakpoint]: number}
type MediaQuery = (
  label: Breakpoint,
  styles: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;

export const breakpoints: BreakpointsList = {
  xs: 0,
  sm: 40,
  md: 64,
  lg: 75,
  xl: 90,
  xxl: 100,
};

export const mediaBiggerThan: MediaQuery = (label, styles) => css`
  @media (min-width: ${(breakpoints)[label]}em) {
    ${styles};
  }
`;

export const mediaSmallerThan: MediaQuery = (label, styles) => css`
  @media (max-width: ${(breakpoints)[label] - 1 / 16}em) {
    ${styles};
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },


  // transition
  transition: {
    duration: '0.35s',
    durationLong: '0.7s',
    ease: 'cubic-bezier(.3, .1, .3, 1)',
    easeIn: 'cubic-bezier(.75,0,.25,1)',
    easeOut: 'cubic-bezier(.165,.84,.44,1)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  },

  // flexbox grid
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    containerMaxWidth: 75, // rem
    breakpoints,
  },

  // general
  scrollbarWidth: 'var(--scrollbar-width, 0px)',
};
