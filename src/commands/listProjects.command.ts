import { inject, injectable } from "tsyringe";
import { AbstractCommand } from "./abstract.command";
import {
	ShellCommander,
	ShellCommanderToken,
} from "../libs/shellCommander.lib";
import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

import { normalize } from "path";

@injectable()
export class ListProjectCommand implements AbstractCommand {
	constructor(
		@inject(ShellCommanderToken)
		protected readonly commandInterface: ShellCommander
	) {}

	public loadCommand(
		action: AbstractAction,
		cliOptions: Partial<CLIOptionsDTO>
	): void {
		this.commandInterface.shellCommander
			.command("list")
			.alias("l")
			.description("Lists project directory")
			.action(async () => {
				const projectPath = normalize(
					process.env.PROJECTS_PATH_DIRECTORY as string
				);

				action.execute({ projectPath });
			});
	}
}
