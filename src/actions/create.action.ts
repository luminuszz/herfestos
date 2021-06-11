import { AbstractAction } from "./actionAbstract.action";
import {
  createComponentFileModel,
  createStyledFileModel,
} from "../models/createComponent";
import { inject, injectable } from "tsyringe";
import { ShellManager, ShellManagerToken } from "../libs/shellManager.lib";

interface CreateActionDTO {
  name: string;
  path: string;
}

@injectable()
export class CreateAction extends AbstractAction {
  static actionName = "create";

  constructor(
    @inject(ShellManagerToken)
    protected shellManager: ShellManager
  ) {
    super();
  }

  public execute({ name, path }: CreateActionDTO) {
    this.shellManager.manager.mkdir(name);

    const newPath = `${path}${name}`;

    this.shellManager.manager.cd(newPath);

    this.shellManager.manager.touch("index.tsx", "styles.ts");

    console.log(newPath);

    this.rewriteFile(
      {
        fileName: "index.tsx",
        model: createComponentFileModel,
        modelParams: {
          name,
        },
      },
      this.shellManager
    );

    this.rewriteFile(
      {
        fileName: "styles.ts",
        model: createStyledFileModel,
      },
      this.shellManager
    );
  }
}
