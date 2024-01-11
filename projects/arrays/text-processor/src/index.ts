// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(
	texts: string[],
	{ align = "left", width }: AlignmentOptions
): string[][] {
	let words = texts.map((text) => text.split(" "));

	for (let i = 0; i < words.length; i++) {
		const text = words[i];

		let word = text[0];

		for (let j = 1; j < text.length; j++) {
			if (word.length + text[j].length + 1 <= width) {
				word += ` ${text[j]}`;
			} else {
				word += `-${text[j]}`;
			}
		}

		words[i] = word.split("-").map((text) => {
			switch (align) {
				case "left":
					return text.padEnd(width, " ");
				case "middle":
					const additionalLength = width - text.length;
					const sideAdditional = Math.floor(additionalLength / 2);

					return text
						.padStart(text.length + sideAdditional, " ")
						.padEnd(width, " ");
				case "right":
					return text.padStart(width, " ");
			}
		});
	}

	return words;
}
