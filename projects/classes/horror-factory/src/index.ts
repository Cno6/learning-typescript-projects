// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.
// Write your classes here! ✨
// You'll need to export them so the tests can run them.
interface ConsumedHorror {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorChars {
	name: string;
	isEvil(): boolean;
	getPowerFrom(consumed: ConsumedHorror): number;
}

export class Horror {
	#consumed: ConsumedHorror[] = [];

	name: string;

	readonly getPowerFrom: (consumed: ConsumedHorror) => number;
	readonly isEvil: () => boolean;

	constructor({ name, isEvil, getPowerFrom }: HorrorChars) {
		this.name = name;
		this.isEvil = isEvil;
		this.getPowerFrom = getPowerFrom;
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower() {
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.getPowerFrom(consumed),
			this.#consumed.length
		);
	}
}

export function createDemon() {
	return new Horror({
		name: "Demon",
		isEvil: () => true,
		getPowerFrom: (consumed: ConsumedHorror) =>
			consumed.evil ? consumed.power / 2 : consumed.power * 2,
	});
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name,
		isEvil: () => evil,
		getPowerFrom: (consumed: ConsumedHorror) =>
			consumed.evil === evil ? consumed.power * 2 : consumed.power,
	});
}
