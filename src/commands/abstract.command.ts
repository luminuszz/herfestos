import { CommanderStatic } from "commander";
import { AbstractAction } from "../actions/actionAbstract.action";

interface CLIOptions {
  componentsPath: string;
  rootDir: string;
}

export abstract class CommandInterface {
  constructor(protected action: AbstractAction) {}

  protected cliOptions = {};

  public abstract loadCommand(commanderInterface: CommanderStatic): void;
}
