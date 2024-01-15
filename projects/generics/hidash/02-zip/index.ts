// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export function zip<T, K>(a: T[], b: K[]) {
	const longestLength = a.length > b.length ? a.length : b.length;
	const result = [];

	for (let i = 0; i < longestLength; i++) {
		if (a[i]) result.push(a[i]);
		if (b[i]) result.push(b[i]);
	}

	return result;
}
