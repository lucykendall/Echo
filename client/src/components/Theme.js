import React from "react";
import { ThemeProvider } from "styled-components";
import Raleigh from '../fonts/Raleigh Demi Bold.woff2'

const theme = {
    colors: {
      pearlLusta: "#FBEEDD",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
    },
    font: {
      fontFamily: 'Raleigh',
      src: `
        localStorage('Raleigh'),
        url(${Raleigh}) format('woff2')
      `
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  export default Theme;