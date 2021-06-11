import { CommanderStatic } from "commander";
import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

export abstract class CommandInterface {
  constructor(protected action: AbstractAction) {}

  protected cliOptions = {};

  public abstract loadCommand(
    commanderInterface: CommanderStatic,
    cliOptions: CLIOptionsDTO
  ): void;
}
