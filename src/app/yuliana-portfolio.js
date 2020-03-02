import { html, css, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import { commonStyles, appStyles } from '../styles';
import '../sections/section-header';
import '../sections/section-menu';
import '../components/title';
import '../pages/page-home';

export class YulianaPortfolio extends LitElement {
  static get styles() {
    return css`
      ${commonStyles}
      ${appStyles}

      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      _isMenuOpen: { type: Boolean },
    };
  }

  render() {
    return html`
      <section-header @open-menu=${this._menuButtonClicked}></section-header>
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
      { path: '/', component: 'page-home' },
      {
        path: '/about',
        action: async () => {
          await import('../pages/page-about.js');
        },
        component: 'page-about',
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

  _menuButtonClicked() {
    this._updateMenuState(true);
  }
}
