import { inject, injectable } from "tsyringe";

import { AbstractAction } from "../actions/actionAbstract.action";
import {
	ShellCommander,
	ShellCommanderToken,
} from "../libs/shellCommander.lib";
import { AbstractCommand } from "./abstract.command";

@injectable()
class CreateProjectCommand implements AbstractCommand {
	public commandName = "generate";

	constructor(
		@inject(ShellCommanderToken)
		protected readonly commandInterface: ShellCommander
	) {}

	public loadCommand(action: AbstractAction): void {
		this.commandInterface.shellCommander
			.command("generate <projectName>")
			.alias("g")
			.description("Create a scaffold Projects")
			.action(async projectName => {
				action.execute({ projectName });
			});
	}
}

export { CreateProjectCommand };
