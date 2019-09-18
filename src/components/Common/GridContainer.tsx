import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => {
    const { gutterWidth, containerMaxWidth } = theme.flexboxgrid;
    return css`
      width: 100%;
      margin: 0 auto;
      max-width: ${containerMaxWidth}rem;
      padding-left: ${gutterWidth / 2}rem;
      padding-right: ${gutterWidth / 2}rem;
    `;
  }}
`;
