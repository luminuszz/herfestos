import { ShellManager } from "../libs/shellManager.lib";
import { RewriteFileDTO } from "../utils";

export abstract class AbstractAction {
  public abstract execute(values: any): void;

  constructor(protected shellManager: ShellManager) {}

  protected rewriteFile({ fileName, modelParams, model }: RewriteFileDTO) {
    this.shellManager.manager.exec(
      `echo "${model({ ...modelParams })}" >> ${fileName}`
    );
  }
}
