import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { GlobalStyles } from '@/components/style/GlobalStyle';

export default class KatVRApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
