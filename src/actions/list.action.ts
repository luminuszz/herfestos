import { inject, injectable } from "tsyringe";
import { ShellManager, ShellManagerToken } from "../libs/shellManager.lib";
import { ShellInput, ShellInputToken } from "../libs/shellInput.lib";
import { AbstractAction } from "./actionAbstract.action";

import { autoComplete } from "../utils/autoComplete";

import * as fs from "fs";
import * as path from "path";

interface ListActionDTO {
	projectPath: string;
}

type ProjectInformation = {
	name: string;
	projects: {
		projectName: string;
		rootPaths: string;
	}[];
};

@injectable()
export class ListAction extends AbstractAction {
	static actionName = "list";

	constructor(
		@inject(ShellManagerToken)
		protected readonly shellManager: ShellManager,

		@inject(ShellInputToken)
		private readonly shellInput: ShellInput
	) {
		super(shellManager);
	}

	public async execute(values: ListActionDTO): Promise<void> {
		const dirs = await fs.promises.readdir(values.projectPath);

		const { workSpace }: { workSpace: string } =
			await this.shellInput.shellImputer.prompt([
				{
					choices: dirs,
					name: "workSpace",
					message: "Qual seu workspace",
					type: "list",
				},
			]);

		const currentWorkspaceDir = path.join(values.projectPath, workSpace);

		const response = await fs.promises.readdir(currentWorkspaceDir);

		const currentWorkspaceProjects = response.sort();

		const { projectName }: { projectName: string } =
			await this.shellInput.shellImputer.prompt([
				{
					choices: currentWorkspaceProjects,
					name: "projectName",
					message: "Selecione o seu projeto",
					type: "autocomplete",
					source: (_: any, value: string = "") =>
						autoComplete(value, currentWorkspaceProjects),
				},
			]);

		const fullProjectPath = path.join(currentWorkspaceDir, projectName);

		this.shellManager.manager.exec(`code ${fullProjectPath}`);

		this.shellManager.manager.echo("Good job !");
	}
}
