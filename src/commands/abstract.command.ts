import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

import { ShellCommander } from "../libs/shellCommander.lib";

export abstract class CommandInterface {
  public abstract commandName: string;

  constructor(protected commandInterface: ShellCommander) {}

  public abstract loadCommand(
    action: AbstractAction,
    cliOptions: CLIOptionsDTO
  ): void;
}
