import {inc, pipe, negate} from 'ramda';

class OtherBundle {
  constructor() {
    const f = pipe(Math.pow, negate, inc);
    console.log(f(3, 4));
  }
}

export default new OtherBundle();
