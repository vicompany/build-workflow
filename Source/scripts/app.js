import R from 'ramda';
import Example from './modules/example.js';
import Unused from './modules/unused.js';

class App {
  constructor() {
    this.example = new Example();

    const f = R.pipe(Math.pow, R.negate, R.inc);
    console.log(f(3, 4));
  }
}

export default new App();
