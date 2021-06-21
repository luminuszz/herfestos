import { CreateCommand } from "./create.command";
import { CreateProjectCommand } from "./createPoject.command";
import { ListProjectCommand } from "./listProjects.command";

export const commands = {
	create: CreateCommand,
	list: ListProjectCommand,
	generate: CreateProjectCommand,
};
