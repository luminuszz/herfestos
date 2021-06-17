import * as fs from "fs";
import { join } from "path";

interface CLIOptions {
	componentsDir: string;
	isNative: boolean;
}

export type CLIOptionsDTO = Partial<CLIOptions>;

export async function findHerfestosConfigFile() {
	try {
		const configPath = join(__dirname, "..", "..", "herfestos.config.json");

		const verifyFileExists = fs.existsSync(configPath);

		if (!verifyFileExists) {
			return {
				componentsDir: "./src/components",
				isNative: true,
			};
		}

		const jsonStringify = await fs.promises.readFile(configPath, "utf8");

		const cliOptions: CLIOptionsDTO = JSON.parse(jsonStringify);

		return cliOptions;
	} catch (error) {
		console.log(error);
		throw new Error("herfestos config not found");
	}
}
