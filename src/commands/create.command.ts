import { CommanderStatic } from "commander";
import { CommandInterface } from "./abstract.command";

export class CreateCommand extends CommandInterface {
  public static commandName = "create";

  public loadCommand(commander: CommanderStatic) {
    commander
      .command("create <name> [path]")
      .alias("c")
      .description("create component")
      .action((name, path) => {
        console.log("name", name);
        console.log("path", path);

        this.action.execute({ name, path });
      });
  }
}
