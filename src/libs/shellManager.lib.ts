import * as shelljs from "shelljs";

export class ShellManager {
  public manager: typeof shelljs;

  constructor() {
    this.manager = shelljs;
  }
}

export const ShellManagerToken = "ShellManagerToken";
