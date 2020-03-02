import { html, css, LitElement } from 'lit-element';
import { menuIcon } from '../components/icons';
import '../components/buttons';

class SectionHeader extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 16px;
        }

        .logo {
          width: 100px;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.mobileTemplate}
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  get mobileTemplate() {
    return html`
      <img class="logo" src="../../assets/images/logo.svg" />
      <button-icon @click=${this._openMenu}>
        ${menuIcon}
      </button-icon>
    `;
  }

  _openMenu() {
    this.dispatchEvent(new CustomEvent('open-menu', { bubbles: true, composed: true }));
  }
}

window.customElements.define('section-header', SectionHeader);
