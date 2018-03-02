export default class StackListController {
  constructor() {
    this.stackItems = [{
      "id": 1,
      "name": "AngularJS",
      "type": "application",
      "vesion": "1.6.9",
      "description": "AngularJS is a structural framework for dynamic web apps."
    }, {
      "id": 2,
      "name": "Bootstrap",
      "type": "application",
      "version": "4.0.0",
      "description": "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS."
    }, {
      "id": 3,
      "name": "Font Awesome",
      "type": "application",
      "version": "5.0.8",
      "description": "Font Awesome is an icon toolkit."
    }, {
      "id": 4,
      "name": "Webpack",
      "type": "build",
      "version": "3.9.1",
      "description": "Webpack is a static module bundler for modern web applications."
    }, {
      "id": 5,
      "name": "Babel",
      "type": "build",
      "version": "6.26.0",
      "description": "Babel is a JavaScript transpiler."
    }, {
      "id": 6,
      "name": "Node.js",
      "type": "build",
      "version": "8.9.4",
      "description": "Node.js is a JavaScript runtime."
    }, {
      "id": 7,
      "name": "NPM",
      "type": "build",
      "version": "5.6.0",
      "description": "npm is the Node.js package manager."
    }, {
      "id": 8,
      "name": "Yarn",
      "type": "build",
      "version": "1.3.2",
      "description": "Yarn is an alternative to the npm client."
    }];

    this.applicationStack = this.stackItems.filter((item) => item.type === 'application');
    this.testStack = this.stackItems.filter((item) => item.type === 'test');
    this.buildStack = this.stackItems.filter((item) => item.type === 'build');
  }

}