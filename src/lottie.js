import * as bodymovin from 'bodymovin';

import { LitElement, html } from '@polymer/lit-element/';

class Lottie extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.greeting = 'hello!';
  }

  firstUpdated() {
    this.animation = bodymovin.loadAnimation({
      container: this.shadowRoot.getElementById('lottie'), // Required
      path: '../assets/like.json', // Required
      renderer: 'svg', // Required
      loop: false, // Optional
      autoplay: false, // Optional
      name: 'Hello World', // Name for future reference. Optional.
      rendererSettings: {
        progressiveLoad: true
      }
    });
  }

  play() {
    this.animation.goToAndPlay(0);
  }

  render() {
    return html`
      <style>
        button {
          border: none;
          margin: 0;
          padding: 0;
          width: auto;
          overflow: visible;

          background: transparent;

          /* inherit font & color from ancestor */
          color: inherit;
          font: inherit;

          line-height: normal;

          /* Corrects font smoothing for webkit */
          -webkit-font-smoothing: inherit;
          -moz-osx-font-smoothing: inherit;

          -webkit-appearance: none;

          cursor: pointer;
          outline: none;
        }

        /* Remove excess padding and border in Firefox 4+ */
        &::-moz-focus-inner {
          border: 0;
          padding: 0;
        }
      </style>
      <button id="lottie" @click=${this.play}></button>
    `;
  }
}

customElements.define('lottie-animation', Lottie);
