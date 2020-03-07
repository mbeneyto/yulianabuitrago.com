import { html, css } from 'lit-element';
import { Page } from './page';
import '../sections/section-hero';
import '../sections/section-box';

class PageHome extends Page {
  static get styles() {
    return [
      css`
        section-box {
          margin-bottom: 80px;
        }
      `,
    ];
  }

  render() {
    return html`
      <section-hero has-social-media>
        <span slot="title">Yuliana</span>
        <span slot="subtitle">Visual & User </br> experiencie Designer</span>
      </section-hero>
      <section-box>
        <span slot="title">Observar, investigar y diseñar</span>
        <span slot="text">La esencia de mi proceso de diseño es observar, preguntar y entender cómo funciona mi entorno para investigar y encontrar soluciones estrategicas tanto para negocio como para los usuarios.</span>
      </section-box>
    `;
  }
}

window.customElements.define('page-home', PageHome);
