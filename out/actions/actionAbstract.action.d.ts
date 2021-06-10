import * as shelljs from "shelljs";
export declare abstract class AbstractAction {
    protected shellManager: typeof shelljs;
    constructor(shellManager: typeof shelljs);
    abstract execute(values: any): void;
}
