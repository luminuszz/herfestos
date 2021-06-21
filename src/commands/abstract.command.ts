import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";

export abstract class AbstractCommand {
	public abstract loadCommand(
		action: AbstractAction,
		cliOptions: CLIOptionsDTO
	): void;
}
