import { css, unsafeCSS } from 'lit-element';
import './typography';
import { colors } from './colors';
import { customProperties } from './custom-properties';
import { themes } from './themes';

export const appStyles = css`
  :host {
    ${colors}
    ${customProperties}
  }

  :host([theme='light']) {
    ${unsafeCSS(themes.lightTheme)}
  }

  :host([theme='dark']) {
    ${unsafeCSS(themes.darkTheme)}
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
