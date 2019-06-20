import * as bodymovin from 'bodymovin';

import { LitElement, html } from '@polymer/lit-element/';

class Lottie extends LitElement {
  static get properties() {
    return {
      greeting: { type: String },
      animation: { type: String }
    };
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
    this.animation.addEventListener('complete', () => {
      console.log('asdf');
      // this.animation.destroy();
    });
  }

  play() {
    this.animation.goToAndPlay(0);
  }

  render() {
    const { greeting } = this;
    return html`
      <button id="lottie" @click=${this.play}>Click me ❤</button>
    `;
  }
}

customElements.define('lottie-animation', Lottie);
