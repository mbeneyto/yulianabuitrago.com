import { html, css, LitElement } from 'lit-element';

class ProjectCard extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
          display: flex;
          align-items: flex-end;
          width: var(--project-card-width, 280px);
          height: var(--project-card-height, 360px);
          padding: 32px 24px;
          border-radius: 16px;
          overflow: hidden;
          box-sizing: border-box;
          background-color: var(--project-card-background-color);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        /* :host(:hover) img {
          transform: scale(1);
        }
 */
        /* :host:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2;
          transition: opacity 0.5s ease-in-out;
          opacity: 0;
        }

        :host(:hover):before {
          opacity: 1;
        } */

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          transition: transform 0.4s ease-in-out;
          transform: scale(1.15);
        }

        .info {
          z-index: 3;
        }
      `,
    ];
  }

  static get properties() {
    return {
      thumbnail: { type: String },
    };
  }

  render() {
    return html`
      <img src=${this.thumbnail} />
      <div class="info">
        <slot name="category"></slot>
        <slot name="name"></slot>
      </div>
    `;
  }
}

window.customElements.define('project-card', ProjectCard);
