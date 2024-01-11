// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
export interface City {
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	name: string;
	catchphrase?: string;
}

export function describeCity({
	name,
	catchphrase,
	coordinates: { north, west },
}: City) {
	const strings = [`${name}, New York`];

	if (catchphrase) {
		strings.push(`* "${catchphrase}"`);
	}

	const northFormatted = north.map((coord) => {
		return String(coord).padStart(2, "0");
	});

	const westFormatted = west.map((coord) => {
		return String(coord).padStart(2, "0");
	});

	strings.push(
		`* Located at ${northFormatted[0]}°${northFormatted[1]}'${northFormatted[2]}"N ${westFormatted[0]}°${westFormatted[1]}'${westFormatted[2]}"W`
	);

	return strings.join("\n");
}
