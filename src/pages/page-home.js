import { html, LitElement } from 'lit-element';
import '../sections/section-hero';

class PageHome extends LitElement {
  render() {
    return html`
      <section-hero has-social-media>
        <span slot="title">Yuliana</span>
        <span slot="subtitle">Visual & User </br> experiencie Designer</span>
      </section-hero>
    `;
  }
}

window.customElements.define('page-home', PageHome);
