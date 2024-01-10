// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
type Sequence = string[];

export function shallowEquality(first: Sequence, second: Sequence) {
	if (first.length === second.length) {
		return first.every((string, index) => string === second[index]);
	}

	return false;
}
