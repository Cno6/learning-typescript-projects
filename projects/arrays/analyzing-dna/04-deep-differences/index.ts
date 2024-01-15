// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) return undefined;

	const result: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			result.push(undefined);
			continue;
		}

		result.push([]);

		const inner = result[i];

		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] === b[i][j]) inner?.push(a[i][j]);
			else inner?.push(undefined);
		}
	}

	return result;
}
