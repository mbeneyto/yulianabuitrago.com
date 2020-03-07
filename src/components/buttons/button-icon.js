import { css } from 'lit-element';
import { BaseButton } from './base-button';

export class ButtonIcon extends BaseButton {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --button-color: var(--button-icon-color);
          --button-background-color: var(--button-icon-background-color);
        }

        .button {
          padding: 0;
        }
      `,
    ];
  }
}

window.customElements.define('button-icon', ButtonIcon);
