// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
type Sequence = (string | undefined)[];

export const shallowDifferences = (first: Sequence, second: Sequence) => {
	const result: Sequence = [];

	if (first.length !== second.length) return undefined;

	for (let i = 0; i < first.length; i++) {
		if (first[i] === second[i]) result.push(first[i]);
		else result.push(undefined);
	}

	return result;
};
