"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCommand = void 0;

var _abstract = require("./abstract.command");

class CreateCommand extends _abstract.CommandInterface {
  static commandName = "create";

  loadCommand(commander) {
    commander.command("create <name> [path]").alias("c").description("create component").action((name, path) => {
      console.log("name", name);
      console.log("path", path);
      this.action.execute({
        name,
        path
      });
    });
  }

}

exports.CreateCommand = CreateCommand;