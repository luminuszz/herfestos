"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAction = void 0;
const actionAbstract_action_1 = require("./actionAbstract.action");
class CreateAction extends actionAbstract_action_1.AbstractAction {
    execute({ name, path }) {
        console.log("foi");
        this.shellManager.touch(`${name}.txt`, path);
    }
}
exports.CreateAction = CreateAction;
