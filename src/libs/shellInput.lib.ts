import * as inquirerFactory from "inquirer";

import inquirerFactoryAutoComplete from "inquirer-autocomplete-prompt";

export class ShellInput {
	public shellImputer: inquirerFactory.Inquirer;

	constructor() {
		this.shellImputer = inquirerFactory;

		this.shellImputer.registerPrompt(
			"autocomplete",
			inquirerFactoryAutoComplete
		);
	}
}

export const ShellInputToken = "ShellInputToken";
