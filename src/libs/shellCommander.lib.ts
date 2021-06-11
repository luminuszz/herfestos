import { program, CommanderStatic } from "commander";
import { injectable } from "tsyringe";

export class ShellCommander {
  public shellCommander: CommanderStatic;

  constructor() {
    this.shellCommander = program as CommanderStatic;
  }
}

export const ShellCommanderToken = "ShellCommander";
