import { container } from "tsyringe";
import { ShellManager, ShellManagerToken } from "../libs/shellManager.lib";
import {
	ShellCommander,
	ShellCommanderToken,
} from "../libs/shellCommander.lib";

import { ShellInput, ShellInputToken } from "../libs/shellInput.lib";

container.registerSingleton<ShellManager>(ShellManagerToken, ShellManager);

container.registerSingleton<ShellCommander>(
	ShellCommanderToken,
	ShellCommander
);

container.registerSingleton<ShellInput>(ShellInputToken, ShellInput);
