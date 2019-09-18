// node modules
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// styles
import { ThemeType } from '@/lib/theme';
import { fontFace } from '@/components/style/FontFace';

// Component
export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  ${({ theme }) => css`
    ${reset};
    ${fontFace};
    * {
      box-sizing: inherit;
    }

    body {
      font-family: ${theme.fontFamily.mark};
      color: ${theme.colors.primary};
      padding-right: ${theme.scrollbarWidth};
      box-sizing: border-box;
      font-size: 14px;
    }

    html {
      --scrollbar-width: 0px;
      &.has-modal {
        &, body {
          overflow: hidden;
        }
      }
    }

    a {
      color: currentColor;
      text-decoration: none;
      &:focus,
      &:active {
        outline: none;
      }
    }
  `}
`;
