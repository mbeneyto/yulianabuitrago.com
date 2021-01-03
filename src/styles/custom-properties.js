import { css } from 'lit-element';

export const customProperties = css`
  --primary-font-family: 'Fjalla One', 'Helvetica', sans-serif;
  --secondary-font-family: 'Source Sans Pro', 'Helvetica', sans-serif;

  --app-background: rgba(var(--primary-color), 1);
  --text-color: rgba(var(--secondary-color), 1);

  --button-color: rgba(var(--primary-color), 1);
  --button-background-color: rgba(var(--secondary-color), 1);
  --button-textual-color: rgba(var(--secondary-color), 1);
  --button-textual-background-color: transparent;
  --button-textual-stripe-color: rgba(var(--regular-accent-color), 1);
  --button-icon-color: rgba(var(--secondary-color), 1);
  --button-icon-background-color: rgba(var(--primary-color), 1);

  --section-menu-overlay-background: rgba(var(--primary-color), 1);
  --section-menu-option-subtitle-color: rgba(var(--regular-accent-color), 1);

  --section-hero-title-color: rgba(var(--light-accent-color), 1);

  --section-header-logo-name-color: rgba(var(--bold-accent-color), 1);
  --section-header-logo-lastname-color: rgba(var(--secondary-color), 1);

  --section-box-title-color: rgba(var(--bold-accent-color), 1);
  --section-box-background-color: rgba(var(--wild-sand), 1);

  --project-card-background-color: rgba(var(--wild-sand), 1);

  font-family: var(--secondary-font-family, sans-serif);
  font-weight: normal;
  font-size: 16px;
  line-height: 1.25;
  color: var(--text-color);
  background-color: var(--app-background);
`;
