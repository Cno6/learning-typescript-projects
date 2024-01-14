import { characters } from "./characters";

interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.
export function announceCharacter(character: string) {
	const char = JSON.parse(character) as Character;

	console.log(`I am ${char.name}.`);
	console.log(`My powers are: ${char.powers.join(", ")}.`);
	console.log(`I am ${char.side}.`);

	return char;
}
