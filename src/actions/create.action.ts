import { AbstractAction } from "./actionAbstract.action";

interface CreateActionDTO {
  name: string;
  path: string;
}

import {
  createComponentFileModel,
  createStyledFileModel,
} from "../models/createComponent";

type RewriteFileDTO = {
  model: ({}: any) => {};
  fileName: string;
  modelParams?: {};
};

export class CreateAction extends AbstractAction {
  public execute({ name, path }: CreateActionDTO) {
    this.shellManager.mkdir(name);

    const newPath = `${path}${name}`;

    this.shellManager.cd(newPath);

    this.shellManager.touch("index.tsx", "styles.ts");

    console.log(newPath);

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

  private rewriteFile({ fileName, modelParams, model }: RewriteFileDTO) {
    this.shellManager.exec(
      `echo "${model({ ...modelParams })}" >> ${fileName}`
    );
  }
}
