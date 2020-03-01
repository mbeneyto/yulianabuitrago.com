import { html, css, LitElement } from "../../web_modules/lit-element";
import { commonStyles, appStyles } from "../styles";
import "../components/title";

export class YulianaPortfolio extends LitElement {
  static get styles() {
    return css`
      ${commonStyles}
      ${appStyles}

      :host {
        display: block;
      }
    `;
  }
  render() {
    return html`
      <my-title></my-title>
    `;
  }
}
