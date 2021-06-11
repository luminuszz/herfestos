import * as fs from "fs";
import { join } from "path";

export type CLIOptionsDTO = {
  componentsDir: string;
};

export const findHerfestosConfigFile = async () => {
  try {
    const configPath = join(__dirname, "..", "..", "herfestos.config.json");

    const jsonStringify = await fs.promises.readFile(configPath, "utf8");

    const cliOptions: CLIOptionsDTO = JSON.parse(jsonStringify);

    return cliOptions;
  } catch (error) {
    console.log(error);
    throw new Error("herfestos config not found");
  }
};
