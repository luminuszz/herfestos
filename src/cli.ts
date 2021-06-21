import { injectable, inject, container } from "tsyringe";

import { findHerfestosConfigFile } from "./utils/findHerfestosConfigFile";
import { ShellCommander, ShellCommanderToken } from "./libs/shellCommander.lib";
import { commands } from "./commands";
import { actions } from "./actions";
import { AbstractCommand } from "./commands/abstract.command";
import { AbstractAction } from "./actions/actionAbstract.action";

@injectable()
export class Herfestos {
	private commands;
	private actions;

	constructor(
		@inject(ShellCommanderToken)
		private readonly dependence: ShellCommander
	) {
		this.commands = commands;
		this.actions = actions;
	}

	public async ignite(args: any) {
		try {
			const cliOptions = await findHerfestosConfigFile();

			const currentCommandName: keyof typeof actions = args[2];

			if (this.commands[currentCommandName]) {
				const commandInstance: AbstractCommand = container.resolve(
					this.commands[currentCommandName] as any
				);

				const actionInstance: AbstractAction = container.resolve(
					this.actions[currentCommandName] as any
				);

				console.log("aqui");

				commandInstance.loadCommand(actionInstance, cliOptions);
			} else {
				throw new Error("Invalid command");
			}
		} catch (error) {
			console.error(error);
		} finally {
			this.interceptArgs(args);
		}
	}

	private interceptArgs(args: typeof process.argv) {
		this.dependence.shellCommander.parse(args);
	}
}
