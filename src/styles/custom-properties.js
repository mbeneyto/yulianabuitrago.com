import { css } from "../../web_modules/lit-element";

export const customProperties = css`
  --primary-font-family: "Fjalla One", "Helvetica", sans-serif;
  --secondary-font-family: "Source Sans Pro", "Helvetica", sans-serif;

  --text-color: rgba(var(--secondary-color), 1);
  --app-background: rgba(var(--primary-color), 1);

  font-family: var(--secondary-font-family, sans-serif);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.25;
  color: var(--text-color);
  background-color: var(--app-background);
`;
