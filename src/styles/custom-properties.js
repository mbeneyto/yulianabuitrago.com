import { css } from 'lit-element';

export const customProperties = css`
  --primary-font-family: 'Fjalla One', 'Helvetica', sans-serif;
  --secondary-font-family: 'Source Sans Pro', 'Helvetica', sans-serif;

  --app-background: rgba(var(--primary-color), 1);
  --text-color: rgba(var(--secondary-color), 1);
  --title-color: rgba(var(--light-accent-color), 1);

  --button-color: rgba(var(--primary-color), 1);
  --button-background-color: rgba(var(--secondary-color), 1);
  --button-textual-color: rgba(var(--secondary-color), 1);
  --button-textual-background-color: transparent;
  --button-icon-color: rgba(var(--secondary-color), 1);
  --button-icon-background-color: rgba(var(--primary-color), 1);

  --section-menu-overlay-background: rgba(var(--regular-accent-color), 0.9);

  font-family: var(--secondary-font-family, sans-serif);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.25;
  color: var(--text-color);
  background-color: var(--app-background);
`;
