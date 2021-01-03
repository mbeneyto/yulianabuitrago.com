import { css, LitElement } from 'lit-element';
import '../components/sections/section-hero';
import '../components/sections/section-box';

export class Page extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
          display: block;
        }

        @media screen and (min-width: 600px) {
        }
      `,
    ];
  }
}
