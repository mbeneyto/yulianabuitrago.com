import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import { appStyles } from '../styles';
import '../components/sections/section-header';
import '../components/sections/section-menu';
import '../pages/page-home';

export class YulianaPortfolio extends LitElement {
  static get styles() {
    return [
      css`
        ${appStyles}
        ${appStyles}

        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      _isMenuOpen: { type: Boolean },
    };
  }

  render() {
    return html`
      <section-header @open-menu=${this._headerButtonClick}></section-header>
      <section-menu ?open=${this._isMenuOpen} @close-menu=${this._closeMenu}> </section-menu>
      <main role="main" class="main" id="main"></main>
    `;
  }

  constructor() {
    super();

    window.addEventListener('vaadin-router-location-changed', event => {
      this._locationChanged(event);
    });
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('main'));
    router.setRoutes([
      {
        path: '/',
        component: 'page-home',
        action: async () => {
          await import('../pages/page-home.js');
        },
      },
      {
        path: '/about',
        component: 'page-about',
        action: async () => {
          await import('../pages/page-about.js');
        },
      },
    ]);
  }

  _updateMenuState(open) {
    this._isMenuOpen = open;
  }

  _locationChanged() {
    this._updateMenuState(false);
  }

  _closeMenu() {
    this._updateMenuState(false);
  }

  _headerButtonClick() {
    this._updateMenuState(true);
  }
}
