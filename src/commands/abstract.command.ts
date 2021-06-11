import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

export abstract class CommandInterface {
  public abstract commandName: string;

  public abstract loadCommand(
    action: AbstractAction,
    cliOptions: CLIOptionsDTO
  ): void;
}
