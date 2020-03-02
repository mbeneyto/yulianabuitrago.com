import { html, css, LitElement } from 'lit-element';
import { linkedinIcon, mediumIcon, behanceIcon, twitterIcon } from '../components/icons';
import '../components/buttons';

class SectionHero extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px; // fixme: use margin and padding with media querys
        }

        .title {
          font-size: 96px;
          line-height: 1.5;
          font-family: var(--primary-font-family);
          color: var(--title-color);
          margin: 0;
        }

        .subtitle {
          font-size: 34px;
          font-family: var(--primary-font-family);
          margin: 0;
          text-align: center;
          transform: translate3d(0px, -70px, 0px);
        }

        .social-media {
          display: flex;
          align-items: center;
        }

        .social-media-link {
          padding: 0px 16px;
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
      ${this.socialMediaTemplate}
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

window.customElements.define('section-hero', SectionHero);
