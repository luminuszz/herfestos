import { inject, injectable } from "tsyringe";
import { ShellInput, ShellInputToken } from "../libs/shellInput.lib";
import { ShellManager, ShellManagerToken } from "../libs/shellManager.lib";
import { AbstractAction } from "./actionAbstract.action";

interface CreateProjectActionDTO {
	projectName: string;
}

type Scaffold = {
	key: string;
	invoke: string;
};

type Scaffolds = "nestjs" | "nextjs" | "createReactApp";

@injectable()
class CreateProjectAction extends AbstractAction {
	static actionName = "generate";

	constructor(
		@inject(ShellManagerToken)
		protected readonly shellManager: ShellManager,

		@inject(ShellInputToken)
		private readonly shellInput: ShellInput
	) {
		super(shellManager);
	}

	private scaffolds: Record<Scaffolds, Scaffold> = {
		nestjs: {
			key: "Nestjs",
			invoke: "nest new",
		},
		nextjs: { key: "Next.js", invoke: "yarn create next-app" },
		createReactApp: {
			key: "create-react-app",
			invoke: "yarn create react-app ",
		},
	};

	private invokeScaffold(projectName: string, scaffold: Scaffold) {
		this.shellManager.manager.exec(`${scaffold.invoke} ${projectName}`);
	}

	public async execute({ projectName }: CreateProjectActionDTO): Promise<void> {
		const { response } = await this.shellInput.shellImputer.prompt({
			message: "Deseja utilizar um scaffold ? ",
			name: "response",
			type: "rawlist",
			choices: ["yes", "no"],
		});

		if (response === "yes") {
			const { scaffoldKey }: { scaffoldKey: string } =
				await this.shellInput.shellImputer.prompt({
					type: "list",
					name: "scaffoldKey",
					choices: ["create-react-app", "Nestjs", "Next.js"],
				});

			const currentScaffold = Object.keys(this.scaffolds).reduce(
				(acc, current) => {
					if (this.scaffolds[current as Scaffolds].key === scaffoldKey) {
						acc = this.scaffolds[current as Scaffolds];
					}

					return acc;
				},
				{} as Scaffold
			);

			this.invokeScaffold(projectName, currentScaffold);
		}
	}
}

export { CreateProjectAction };
