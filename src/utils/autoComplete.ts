import * as fuzzy from "fuzzy";

export function autoComplete(
	currentInputtedValue: string,
	values: string[]
): string[] {
	const parsedValue = currentInputtedValue.toLowerCase();

	if (!currentInputtedValue) {
		return values;
	}

	const filteredList = fuzzy.filter(parsedValue, values);

	return filteredList.map((value) => value.string);
}
