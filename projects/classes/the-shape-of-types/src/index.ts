// Write your classes here! ✨
// You'll need to export them so the tests can run them.
interface ConsumedHorror {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	#consumed: ConsumedHorror[] = [];

	abstract readonly name: string;

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

	protected abstract getPowerFrom(consumed: ConsumedHorror): number;

	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	readonly name = "Demon";

	getPowerFrom(consumed: ConsumedHorror) {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	}

	isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();

		this.name = name;
		this.#evil = evil;
	}

	getPowerFrom(consumed: ConsumedHorror) {
		return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
	}

	isEvil(): boolean {
		return this.#evil;
	}
}
