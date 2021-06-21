import { CreateAction } from "./create.action";
import { CreateProjectAction } from "./createProject.action";
import { ListAction } from "./list.action";

export const actions = {
	create: CreateAction,
	list: ListAction,
	generate: CreateProjectAction,
};
