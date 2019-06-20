import * as THREE from 'three';

import { LitElement, html } from '@polymer/lit-element/';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

class HelloWorld extends LitElement {
  static get properties() {
    return {
      greeting: { type: String }
    };
  }

  constructor() {
    super();
    this.greeting = 'hello!';
    this.createScene();
  }

  createScene() {
    var camera, scene, renderer, geometry, material, mesh;

    scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight('#fff');
    scene.add(ambientLight);

    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 500;
    scene.add(camera);

    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xff0000, 1);
    document.body.appendChild(renderer.domElement);
    var loader = new OBJLoader();
    var ship_material = new THREE.MeshBasicMaterial({ color: 0x444444 });

    loader.load(
      // resource URL
      'assets/obj/CHAHIN_EARTH.obj',
      // called when resource is loaded
      function(object) {
        object.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            child.material = ship_material;
          }
        });

        scene.add(object);
      },
      // called when loading is in progresses
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // called when loading has errors
      function(error) {
        console.log('An error happened');
      }
    );
  }

  loadObject() {}

  render() {
    const { greeting } = this;
    return html`
      <h1>${greeting}</h1>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
