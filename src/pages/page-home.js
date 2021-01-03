import { html, css } from 'lit-element';
import { Page } from './page';
import '../components/sections/section-hero';
import '../components/sections/section-box';
import '../components/sections/section-projects';
import '../components/project-card';

class PageHome extends Page {
  static get styles() {
    return [
      super.styles,
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
        <span slot="title">Yuliana Buitrago</span>
        <span slot="subtitle">
          Diseñadora de Interfaces <br />
          y de Experiencia de Usuario
        </span>
      </section-hero>
      <section-box>
        <span slot="title">Observar, investigar y diseñar</span>
        <span slot="text">
          La esencia de mi proceso de diseño es observar, preguntar y entender cómo funciona mi
          entorno para investigar y encontrar soluciones estrategicas tanto para negocio como para
          los usuarios.
        </span>
      </section-box>
      <section-projects>
        <span slot="title">Proyectos</span>
        <span slot="subtitle"> Proyectos</span>
        <project-card thumbnail="../../assets/projects/uworld/thumbnail.jpeg">
          <span slot="category">Case study</span>
          <span slot="name">
            Uworld: <br />
            Seguros de viaje
          </span>
        </project-card>
        <project-card thumbnail="../../assets/projects/uworld/thumbnail.jpeg">
          <span slot="category">Case study</span>
          <span slot="name">
            Uworld: <br />
            Seguros de viaje
          </span>
        </project-card>
        <project-card thumbnail="../../assets/projects/uworld/thumbnail.jpeg">
          <span slot="category">Case study</span>
          <span slot="name">
            Uworld: <br />
            Seguros de viaje
          </span>
        </project-card>
      </section-projects>
    `;
  }
}

window.customElements.define('page-home', PageHome);
