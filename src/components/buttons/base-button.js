import { LitElement, css, html } from 'lit-element';

export class BaseButton extends LitElement {
  static get styles() {
    return [
      css`
        .button {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          border: none;
          cursor: pointer;
          margin: 0;
          padding: 8px;
          color: var(--button-color);
          background-color: var(--button-background-color);
        }

        .button:hover {
          opacity: 0.8;
        }
      `,
    ];
  }

  static get properties() {
    return {
      link: { type: String },
      target: { type: String },
    };
  }

  constructor() {
    super();

    this.target = '_self';
  }

  render() {
    return html`
      ${this.link ? this.renderLink : this.renderButton}
    `;
  }

  get renderLink() {
    return html`
      <a class="button" .href=${this.link} .target=${this.target}>
        ${this.renderContent}
      </a>
    `;
  }

  get renderButton() {
    return html`
      <button class="button">
        ${this.renderContent}
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  get renderContent() {
    return html`
      <slot></slot>
    `;
  }
}
