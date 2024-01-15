// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
export type Params = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Params) {
	return (text: string) => {
		for (let attempt = 0; attempt < attempts; attempt++) {
			const guess = makeGuess(text, attempt);
			if (validateGuess(guess)) return guess;
		}

		return undefined;
	};
}
