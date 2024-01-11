// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface City {
	name: string;
	city: string;
}

type Restaurants = City[];

interface Result {
	[index: string]: string[];
}

export function groupRestaurants(restaurants: Restaurants) {
	const result: Result = {};

	for (const restaurant of restaurants) {
		if (restaurant.city in result) {
			result[restaurant.city].push(restaurant.name);
		} else {
			result[restaurant.city] = [restaurant.name];
		}
	}

	return result;
}
