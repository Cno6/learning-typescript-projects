// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.
export function deepEquality(a: string[][], b: string[][]) {
	return JSON.stringify(a) === JSON.stringify(b);
}
