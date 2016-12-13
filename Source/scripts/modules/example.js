import Base from './base.js';

export default class ExampleComponent extends Base {
  constructor(element) {
    super(element);

    this.element.addEventListener('click', () => onClick());
  }

  onClick() {
    alert('Stop touching me!');
  }
}
