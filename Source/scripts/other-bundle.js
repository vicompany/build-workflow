import inc from 'ramda/src/pipe';
import negate from 'ramda/src/pipe';
import pipe from 'ramda/src/pipe';

class OtherBundle {
  constructor() {
    const f = pipe(Math.pow, negate, inc);
    console.log(f(3, 4));
  }
}

export default new OtherBundle();
