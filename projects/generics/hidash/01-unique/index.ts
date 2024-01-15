// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: T[][]) {
	let result = new Set<T>();

	items.forEach((item) => {
		result = new Set([...result, ...item]);
	});

	return Array.from(result.values());
}
