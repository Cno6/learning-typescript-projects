// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type Cipher = (text: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let result = "";

		for (const char of text) {
			if (char.match(/[aeiou]/i)) result += onVowel(char);
			else if (char.match(/[bcdfghjklmnpqrstvwxyz]/i))
				result += onConsonant(char);
			else result += onPunctuation(char);
		}

		return result;
	};
}
