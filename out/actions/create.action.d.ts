import { AbstractAction } from "./actionAbstract.action";
interface CreateActionDTO {
    name: string;
    path: string;
}
export declare class CreateAction extends AbstractAction {
    execute({ name, path }: CreateActionDTO): void;
}
export {};
