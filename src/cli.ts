import { injectable, inject, container } from "tsyringe";

import { findHerfestosConfigFile } from "./utils/findHerfestosConfigFile";
import { ShellCommander, ShellCommanderToken } from "./libs/shellCommander.lib";
import { commands } from "./commands";
import { actions } from "./actions";

@injectable()
export class Herfestos {
  private commands;

  constructor(
    @inject(ShellCommanderToken)
    private readonly dependence: ShellCommander
  ) {
    this.commands = commands;
  }

  public async ignite(args: any) {
    const cliOptions = await findHerfestosConfigFile();

    const currentCommandName: keyof typeof actions = args[2];

    const ignitedCommands = this.commands.map((Command) => {
      const commanderInstance = container.resolve(Command);

      if (commanderInstance.commandName === currentCommandName) {
        const actionInstance = container.resolve(actions[currentCommandName]);

        commanderInstance.loadCommand(actionInstance, cliOptions);

        return Command;
      }
    });

    if (!!ignitedCommands.length) {
      console.log("invalid command");
    }

    this.interceptArgs(args);
  }

  private interceptArgs(args: typeof process.argv) {
    this.dependence.shellCommander.parse(args);
  }
}
