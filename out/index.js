"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const shelljs = require("shelljs");
const create_action_1 = require("./actions/create.action");
const create_command_1 = require("./commands/create.command");
const bootstrap = async () => {
    const commanderInstance = commander_1.program;
    const action = new create_action_1.CreateAction(shelljs);
    const command = new create_command_1.CreateCommand(action);
    command.loadCommand(commanderInstance);
    commanderInstance.parse(process.argv);
};
bootstrap();
