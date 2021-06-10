import { AbstractAction } from "./actionAbstract.action";

interface CreateActionDTO {
  name: string;
  path: string;
}

export class CreateAction extends AbstractAction {
  public execute({ name, path }: CreateActionDTO) {
    console.log("foi");

    this.shellManager.touch(`${name}.txt`, path);
  }
}
