import { html, css, LitElement } from 'lit-element';
import { linkedinIcon, mediumIcon, behanceIcon, twitterIcon } from '../icons';
import '../buttons';

class SectionProjects extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 96px;
          line-height: 1.5;
          font-family: var(--primary-font-family);
          color: var(--section-hero-title-color);
          margin: 0;
        }

        .subtitle {
          font-size: 34px;
          font-family: var(--primary-font-family);
          margin: 0;
          text-align: center;
          transform: translate3d(0px, -70px, 0px);
        }

        .projects {
          display: block;
          width: calc(100% - 48px);
          box-sizing: border-box;
          margin: 0px 24px;
        }

        ::slotted(project-card) {
          margin-bottom: 32px;
          --project-card-width: 100%;
        }
      `,
    ];
  }

  static get properties() {
    return {
      hasSocialMedia: { type: Boolean, attribute: 'has-social-media' },
      hasDescription: { type: Boolean, attribute: 'has-description' },
    };
  }

  render() {
    return html`
      <h1 class="title">
        <slot name="title"></slot>
      </h1>
      <h2 class="subtitle">
        <slot name="subtitle"></slot>
      </h2>
      <div class="projects">
        <slot></slot>
      </div>
    `;
  }

  get socialMediaTemplate() {
    return this.hasSocialMedia
      ? html`
          <div class="social-media">
            <button-icon class="social-media-link" link="https://www.linkedin.com/in/yulianabglez/">
              ${linkedinIcon}
            </button-icon>
            <button-icon class="social-media-link" link="https://medium.com/@yuliana.glez">
              ${mediumIcon}
            </button-icon>
            <button-icon class="social-media-link" link="https://www.behance.net/yulianabuitrago">
              ${behanceIcon}
            </button-icon>
            <button-icon class="social-media-link" link="https://twitter.com/mapetiteluune">
              ${twitterIcon}
            </button-icon>
          </div>
        `
      : '';
  }
}

window.customElements.define('section-projects', SectionProjects);
