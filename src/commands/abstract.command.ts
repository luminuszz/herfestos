import { inject, injectable } from "tsyringe";
import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";
import {
  ShellCommanderToken,
  ShellCommander,
} from "../libs/shellCommander.lib";

export abstract class CommandInterface {
  public abstract commandName: string;

  public abstract loadCommand(
    action: AbstractAction,
    cliOptions: CLIOptionsDTO
  ): void;
}
