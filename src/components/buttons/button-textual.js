import { css } from 'lit-element';
import { BaseButton } from './base-button';

export class ButtonTextual extends BaseButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          --button-color: var(--button-textual-color);
          --button-background-color: var(--button-textual-background-color);
        }

        :host([with-stripe]) .button::before {
          display: block;
          content: '';
          position: absolute;
          z-index: -1;
          width: 0;
          height: 40%;
          background-color: var(--button-textual-stripe-color);
          transition: width ease-in 0.3s;
        }

        :host([with-stripe]) .button:hover {
          opacity: 1;
        }

        :host([with-stripe]) .button:hover::before {
          width: 130%;
        }

        .button {
          padding: 0;
        }
      `,
    ];
  }
}

window.customElements.define('button-textual', ButtonTextual);
