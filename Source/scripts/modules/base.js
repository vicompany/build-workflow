export default class Base {
  constructor(element = document.body) {
    this.element = element;
  }

  query(selector) {
    return this.element.querySelector(selector);
  }

  queryAll(selector) {
    return Array.from(this.element.querySelectorAll(selector));
  }
}
