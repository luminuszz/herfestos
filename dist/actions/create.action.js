"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAction = void 0;

var _actionAbstract = require("./actionAbstract.action");

class CreateAction extends _actionAbstract.AbstractAction {
  execute({
    name,
    path
  }) {
    console.log("foi");
    this.shellManager.touch(`${name}.txt`, path);
  }

}

exports.CreateAction = CreateAction;