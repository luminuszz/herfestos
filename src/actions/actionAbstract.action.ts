import { ShellManager } from "../libs/shellManager.lib";
import { RewriteFileDTO } from "../utils";

export abstract class AbstractAction {
  public abstract execute(values: any): void;

  protected rewriteFile(
    { fileName, modelParams, model }: RewriteFileDTO,
    shellManager: ShellManager
  ) {
    shellManager.manager.exec(
      `echo "${model({ ...modelParams })}" >> ${fileName}`
    );
  }
}
