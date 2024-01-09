export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	while (day <= 7) {
		if (!food || !water) return false;

		const randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			default:
				if (!availableResource) {
					availableResource = randomNumber % 2 ? "water" : "food";
				} else {
					food += availableResource === "food" ? randomNumber : 0;
					water += availableResource === "water" ? randomNumber : 0;
					availableResource = undefined;
				}
				break;
		}

		food--;
		water--;

		day++;
	}

	return true;
}
