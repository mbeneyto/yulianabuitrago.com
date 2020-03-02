import { html, css, LitElement } from 'lit-element';
import '../components/icons';

class SectionMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1000;
          opacity: 0;
          transform: translate3d(0px, -100%, 0px);
          transition: opacity ease-in-out 0.3s;
        }

        :host([open]) {
          opacity: 1;
          transform: translate3d(0px, 0px, 0px);
        }

        .overlay {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--section-menu-overlay-background);
          opacity: 1;
          transition: opacity ease-in 0.3s;
        }

        :host([open]) .overlay {
          opacity: 1;
        }

        .menu {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .option {
          font-size: 40px;
          font-weight: bold;
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();

    this._escapeKeyPress = this._escapeKeyPress.bind(this);
  }

  render() {
    return html`
      <div class="overlay">
        <div class="menu">
          <button-textual class="option" link="/">Home</button-textual>
          <button-textual class="option" link="/about">About me</button-textual>
        </div>
      </div>
    `;
  }

  updated(changedProps) {
    super.updated();

    if (changedProps.has('open')) {
      if (this.open) {
        window.addEventListener('keydown', this._escapeKeyPress);
      } else {
        window.removeEventListener('keydown', this._escapeKeyPress);
      }
    }
  }

  _escapeKeyPress(event) {
    if (event.keyCode === 27) {
      this._closeMenu();
    }
  }

  _closeMenu() {
    this.dispatchEvent(new CustomEvent('close-menu'));
  }
}

window.customElements.define('section-menu', SectionMenu);
