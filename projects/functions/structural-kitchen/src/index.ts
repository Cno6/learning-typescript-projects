// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
	[index: string]: number;
};

type RecipeFunc = (stock: Stock) => { succeeded: boolean; newStock?: Stock };
export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: RecipeFunc) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	const announce = () =>
		`I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;

	const clean = (time?: number) => {
		dirt = cleaner(dirt, time);
	};

	const purchase = (expense: number) => {
		const isEnoughBudget = expense <= budget;

		if (isEnoughBudget) {
			const additionalStock = supplier(expense);

			for (const key in additionalStock) {
				stock[key] += additionalStock[key];
			}

			budget -= expense;
		}

		return isEnoughBudget;
	};

	const prepare = (recipe: RecipeFunc) => {
		if (dirt >= 100) return false;

		dirt++;

		const { succeeded, newStock } = recipe(stock);

		if (succeeded) {
			stock = newStock!;
		} else {
			return false;
		}

		return true;
	};

	return { announce, clean, purchase, prepare };
}
