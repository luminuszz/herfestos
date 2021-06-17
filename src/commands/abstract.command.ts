import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

import { ShellCommander } from "../libs/shellCommander.lib";

export abstract class AbstractCommand {
	public abstract loadCommand(
		action: AbstractAction,
		cliOptions: CLIOptionsDTO
	): void;
}
