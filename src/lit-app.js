import './hello-world.js';
import './lottie.js';

import { LitElement, html } from '@polymer/lit-element/';

import { styles } from './lit-app-styles.js';

class LitApp extends LitElement {
  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="app" id="app">
        <header class="app-header">
          <img src="../assets/logo.svg" class="app-logo" alt="logo" />
          <h1 class="app-title">Welcome to LitHTML</h1>
          <a
            aria-label="Create lit app on Github"
            href="https://doesitmutate.xyz/"
          >
            Does is mutate 😱
          </a>
          <a
            aria-label="Create lit app on Github"
            href="https://ohshitgit.com/"
          >
            Oh, shit, git!
          </a>
          <a
            aria-label="Create lit app on Github"
            href="https://github.com/ryanmcdermott/clean-code-javascript"
          >
            Clean code Javascript!
          </a>
          <a
            aria-label="Create lit app on Github"
            href="https://cssgridgarden.com/"
          >
            CSS grid!
          </a>
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
