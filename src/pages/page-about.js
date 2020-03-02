import { html, LitElement } from 'lit-element';
import '../sections/section-hero';

class PageAbout extends LitElement {
  render() {
    return html`
      <section-hero has-social-media>
        <span slot="title">Hola, soy</span>
        <span slot="subtitle">Yuliana Buitrago</span>
      </section-hero>
    `;
  }
}

window.customElements.define('page-about', PageAbout);
