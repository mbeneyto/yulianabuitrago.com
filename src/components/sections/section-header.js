import { html, css, LitElement } from 'lit-element';
import { menuIcon } from '../icons';
import '../buttons';

class SectionHeader extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
        }

        .logo {
          font-size: 20px;
          line-height: 1.5;
          font-family: var(--primary-font-family);
          color: var(--section-header-logo-name-color);
          margin: 0;
        }

        .logo span:last-child {
          margin-left: -4px;
          color: var(--section-header-logo-lastname-color);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="logo">
        <span>Yuliana</span>
        <span>Buitrago</span>
      </div>
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
