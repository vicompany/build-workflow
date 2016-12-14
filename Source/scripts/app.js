import moment from 'moment';

import Example from './modules/example.js';
import Unused from './modules/unused.js';

class App {
  constructor() {
    this.example = new Example();

    console.log(moment().format());
  }
}

export default new App();
