import { CommanderStatic } from "commander";
import { CommandInterface } from "./abstract.command";
export declare class CreateCommand extends CommandInterface {
    static commandName: string;
    loadCommand(commander: CommanderStatic): void;
}
