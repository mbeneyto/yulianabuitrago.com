import { css } from 'lit-element';
import { BaseButton } from './base-button';

export class ButtonTextual extends BaseButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --button-color: var(--button-textual-color);
          --button-background-color: var(--button-textual-background-color);
        }
      `,
    ];
  }
}

window.customElements.define('button-textual', ButtonTextual);
