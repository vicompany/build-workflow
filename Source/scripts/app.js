import Example from './modules/example.js';

class App {
  constructor() {
    this.example = new Example();
  }
}

window.app = new App();
