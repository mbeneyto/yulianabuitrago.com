import { css, LitElement } from 'lit-element';
import '../sections/section-hero';
import '../sections/section-box';

export class Page extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
          display: block;
        }
      `,
    ];
  }
}
