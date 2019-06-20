import './hello-world.js';
import './lottie.js';

import * as bodymovin from 'bodymovin';

import { LitElement, html } from '@polymer/lit-element/';

import { styles } from './lit-app-styles.js';

class LitApp extends LitElement {
  firstUpdated() {
    this.animation = bodymovin.loadAnimation({
      container: this.shadowRoot.getElementById('app'), // Required
      path: '../assets/loader.json', // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: 'Hello World' // Name for future reference. Optional.
    });
    this.animation.addEventListener('complete', () => {
      console.log('asdf');
      // this.animation.destroy();
    });
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="app" id="app">
        <header class="app-header">
          <img src="../assets/logo.svg" class="app-logo" alt="logo" />
          <h1 class="app-title">Welcome to LitHTML</h1>
        </header>

        <lottie-animation .greeting=${'Welcome'}></lottie-animation>

        <a
          aria-label="Create lit app on Github"
          href="https://github.com/thepassle/create-lit-app"
        >
          <img src="../assets/github.svg" class="app-gh" alt />
        </a>
      </div>
    `;
  }
}
// <hello-world .greeting=${'Welcome'}></hello-world>
customElements.define('lit-app', LitApp);
