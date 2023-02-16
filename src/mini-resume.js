import { LitElement, html, css } from 'lit';

export class MiniResume extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }

}
customElements.define('mini-resume', MiniResume);