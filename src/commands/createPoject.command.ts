import { AbstractAction } from "../actions/actionAbstract.action";
import { CLIOptionsDTO } from "../utils/findHerfestosConfigFile";
import { AbstractCommand } from "./abstract.command";

class CreateProjectCommand implements AbstractCommand {
	public loadCommand(
		action: AbstractAction,
		cliOptions: Partial<CLIOptionsDTO>
	): void {
		throw new Error("Method not implemented.");
	}
}

export { CreateProjectCommand };
