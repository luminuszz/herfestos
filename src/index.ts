#!/usr/bin/env node

import { program, CommanderStatic } from "commander";
import * as shelljs from "shelljs";

import { CreateAction } from "./actions/create.action";
import { CreateCommand } from "./commands/create.command";

import { findHerfestosConfigFile } from "./utils/findHerfestosConfigFile";

const bootstrap = async () => {
  const commanderInstance = program;

  const action = new CreateAction(shelljs);

  const command = new CreateCommand(action);

  const cliOptions = await findHerfestosConfigFile();

  command.loadCommand(commanderInstance as CommanderStatic, cliOptions);

  commanderInstance.parse(process.argv);
};

bootstrap();
