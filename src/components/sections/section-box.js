import { html, css, LitElement } from 'lit-element';

class SectionBox extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
          display: block;
          margin: 0 24px;
        }

        .box {
          padding: 48px 32px;
          margin: 0 auto;
          background-color: var(--section-box-background-color);
          box-sizing: border-box;
        }

        .title {
          font-size: 24px;
          line-height: 1.5;
          font-family: var(--primary-font-family);
          color: var(--section-box-title-color);
          margin: 0px 0px 24px 0px;
          letter-spacing: 1px;
        }

        .text {
          margin: 0;
          line-height: 1.5;
        }

        @media screen and (min-width: 480px) {
          :host {
            margin: 0px 40px;
          }
        }

        @media screen and (min-width: 768px) {
          .box {
            width: 688px;
          }
        }

        @media screen and (min-width: 1000px) {
          :host {
            margin: 0px 56px;
          }

          .box {
            transform: translate3d(80px, 0px, 0px);
          }

          .title {
            margin-left: calc(-32px - 80px - 90px);
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      inverted: { type: Boolean },
    };
  }

  render() {
    return html`
      <div class="box">
        <h4 class="title">
          <slot name="title"></slot>
        </h4>
        <p class="text">
          <slot name="text"></slot>
        </p>
      </div>
    `;
  }
}

window.customElements.define('section-box', SectionBox);
