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
    try {
      const cliOptions = await findHerfestosConfigFile();

      const currentCommandName: keyof typeof actions = args[2];

      const ignitedCommands = this.commands.map((Command) => {
        const commanderInstance = container.resolve(Command);

        if (commanderInstance.commandName === currentCommandName) {
          const actionInstance = container.resolve(actions[currentCommandName]);

          commanderInstance.loadCommand(actionInstance, cliOptions);

          return currentCommandName;
        }
      });

      if (!ignitedCommands[0]) {
        throw new Error("invalid command");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      this.interceptArgs(args);
    }
  }

  private interceptArgs(args: typeof process.argv) {
    this.dependence.shellCommander.parse(args);
  }
}
