import { css, html, LitElement } from "lit-element";

export class MyTitle extends LitElement {
  static get styles() {
    return [
      css`
        h1 {
          color: var(--text-color);
        }
      `
    ];
  }

  render() {
    return html`
      <h1>WIP awesome portfolio 😎</h1>
    `;
  }
}

window.customElements.define("my-title", MyTitle);
