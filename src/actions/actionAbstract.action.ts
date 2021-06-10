import * as shelljs from "shelljs";

export abstract class AbstractAction {
  constructor(protected shellManager: typeof shelljs) {}

  public abstract execute(values: any): void;
}
