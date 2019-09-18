import { css } from 'styled-components';
import { theme } from '@/lib/theme';

// Font face
export const fontFace = css`
  @font-face {
    font-family: "Mark";
    src: url("/static/fonts/mark-regular.woff2") format("woff2"),
      url("/static/fonts/mark-regular.woff") format("woff");
    font-weight: ${theme.fontWeight.regular};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Mark";
    src: url("/static/fonts/mark-medium.woff2") format("woff2"),
      url("/static/fonts/mark-medium.woff") format("woff");
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Mark";
    src: url("/static/fonts/mark-heavy.woff2") format("woff2"),
      url("/static/fonts/mark-heavy.woff") format("woff");
    font-weight: ${theme.fontWeight.bold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Quantum";
    src: url("/static/fonts/quantum.woff2") format("woff2"),
      url("/static/fonts/quantum.woff") format("woff");
    font-display: swap;
    font-style: normal;
  }
`;
