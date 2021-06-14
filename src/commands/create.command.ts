import { inject, injectable } from "tsyringe";

import { AbstractAction } from "../actions/actionAbstract.action";
import {
  ShellCommander,
  ShellCommanderToken,
} from "../libs/shellCommander.lib";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";
import { CommandInterface } from "./abstract.command";

@injectable()
export class CreateCommand extends CommandInterface {
  public commandName: string = "create";

  constructor(
    @inject(ShellCommanderToken)
    protected commanderInterface: ShellCommander
  ) {
    super(commanderInterface);
  }

  public loadCommand(action: AbstractAction, cliOptions: CLIOptionsDTO) {
    this.commanderInterface.shellCommander
      .command("create <name> [path]")
      .alias("c")
      .description("create component")
      .action((name, path) => {
        const { componentsDir, isNative } = cliOptions;

        if (!path && !componentsDir) {
          throw new Error(
            "not specified path in cliOptions use create <name> [path]"
          );
        }

        action.execute({
          name,
          path: path || cliOptions.componentsDir,
          isNative,
        });
      });
  }
}
