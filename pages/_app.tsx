import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {theme} from '../lib/theme';

export default class KatVRApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
