import { html, css, LitElement } from 'lit-element';
import '../icons';

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
          z-index: -1;
        }

        :host([open]) {
          z-index: 1000;
        }

        .overlay {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--section-menu-overlay-background);
          opacity: 0;
          visibility: hidden;
          transition: opacity ease-in-out 0.3s 0.1s, visibility ease-in-out 0.3s 0.1s;
        }

        :host([open]) .overlay {
          opacity: 1;
          visibility: visible;
        }

        .menu {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        :host([open]) .option {
          opacity: 1;
          transform: translate3d(0px, 0px, 0px);
        }

        .option {
          margin-bottom: 32px;
          text-align: center;
          opacity: 0;
          transform: translate3d(-50px, 0px, 0px);
        }

        .option:nth-child(1) {
          transition: opacity ease-in-out 0.4s 0.5s, transform ease-in-out 0.4s 0.5s;
        }
        .option:nth-child(2) {
          transition: opacity ease-in-out 0.4s 0.6s, transform ease-in-out 0.4s 0.6s;
        }
        .option:nth-child(3) {
          transition: opacity ease-in-out 0.4s 0.7s, transform ease-in-out 0.4s 0.7s;
        }
        .option:nth-child(4) {
          transition: opacity ease-in-out 0.4s 0.8s, transform ease-in-out 0.4s 0.8s;
        }

        .option button-textual {
          font-size: 32px;
          font-family: var(--primary-font-family);
        }

        .option span {
          display: block;
          color: var(--section-menu-option-subtitle-color);
        }

        .option button-textual:hover ~ span {
          --section-menu-option-subtitle-color: var(--bold-accent-color);
          color: var(--section-menu-option-subtitle-color);
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
        <nav class="menu">
          ${this._renderMenuOption('/', 'Home', 'Vuelve a la página principal')}
          ${this._renderMenuOption('/portfolio', 'Portfolio', 'Echa un vistazo a mis proyectos')}
          ${this._renderMenuOption('/work', 'Otros trabajos', 'Profesionales y hobbies')}
          ${this._renderMenuOption('/about', 'Sobre mí', 'Quién soy yo y cual es mi historia')}
        </nav>
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

  // eslint-disable-next-line class-methods-use-this
  _renderMenuOption(url, title, subtitle = '') {
    return html`
      <div class="option">
        <button-textual with-stripe link=${url}>${title}</button-textual>
        <span>${subtitle}</span>
      </div>
    `;
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
