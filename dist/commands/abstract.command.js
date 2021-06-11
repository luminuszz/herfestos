"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandInterface = void 0;

class CommandInterface {
  constructor(action) {
    this.action = action;
  }

  cliOptions = {};
}

exports.CommandInterface = CommandInterface;