import './App.css';
import Synthwave from './Synthwave';

import { ComponentMeta } from '@storybook/react';
import React from 'react';
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  MenuList, MenuListItem, Separator, styleReset 
} from 'react95';
import { styled, createGlobalStyle, ThemeProvider } from 'styled-components';

import raspberry from 'react95/dist/themes/raspberry';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;
function App() {
  return (
    <div className="App">
      <Synthwave/>
      <img id="fred" src="fred.png"></img>
      <GlobalStyles />
      <ThemeProvider theme={raspberry}>
      </ThemeProvider>
    </div>
  );
}

export default App;
