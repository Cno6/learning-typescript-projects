// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
export interface LandmarkBase {
	name: string;
}

export interface Mountain extends LandmarkBase {
	type: "mountain";
	height: number;
}

export interface Park extends LandmarkBase {
	type: "park";
	acres: number;
}

export interface Lighthouse extends LandmarkBase {
	type: "lighthouse";
	height: number;
	lit: number;
}

export interface Lake extends LandmarkBase {
	type: "lake";
	miles: number;
}

export interface Waterfall extends LandmarkBase {
	type: "waterfall";
	height: number;
}

export interface River extends LandmarkBase {
	type: "river";
	depth: number;
	length: number;
}

export interface Fort extends LandmarkBase {
	type: "fort";
}

export type Landmark =
	| Mountain
	| Park
	| Lighthouse
	| Lake
	| Waterfall
	| River
	| Fort;

export function describeLandmark(landmark: Landmark) {
	let result = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];

	switch (landmark.type) {
		case "lake":
			result.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			result.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			result.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			result.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			result.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			result.push(`It is ${landmark.height} feet high.`);
		default:
			break;
	}

	return result.join("\n");
}
