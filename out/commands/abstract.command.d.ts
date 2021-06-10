import { CommanderStatic } from "commander";
import { AbstractAction } from "../actions/actionAbstract.action";
export declare abstract class CommandInterface {
    protected action: AbstractAction;
    constructor(action: AbstractAction);
    protected cliOptions: {};
    abstract loadCommand(commanderInterface: CommanderStatic): void;
}
