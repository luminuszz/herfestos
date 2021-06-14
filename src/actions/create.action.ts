import { AbstractAction } from "./actionAbstract.action";
import {
  createComponentFileModel,
  createStyledFileModel,
} from "../models/createComponent";
import { inject, injectable } from "tsyringe";
import { ShellManager, ShellManagerToken } from "../libs/shellManager.lib";

import { join } from "path";

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
    super(shellManager);
  }

  public execute({ name, path }: CreateActionDTO) {
    const createdPath = join(path, name);

    this.shellManager.manager.mkdir(createdPath);

    this.shellManager.manager.cd(createdPath);

    this.shellManager.manager.touch("index.tsx", "styles.ts");

    this.rewriteFile({
      fileName: "index.tsx",
      model: createComponentFileModel,
      modelParams: {
        name,
      },
    });

    this.rewriteFile({
      fileName: "styles.ts",
      model: createStyledFileModel,
    });
  }
}
