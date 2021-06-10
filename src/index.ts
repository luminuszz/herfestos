import { program, CommanderStatic } from "commander";
import * as shelljs from "shelljs";

import { CreateAction } from "./actions/create.action";
import { CreateCommand } from "./commands/create.command";

const bootstrap = async () => {
  const commanderInstance = program;

  const action = new CreateAction(shelljs);

  const command = new CreateCommand(action);

  command.loadCommand(commanderInstance as CommanderStatic);

  commanderInstance.parse(process.argv);
};

bootstrap();
