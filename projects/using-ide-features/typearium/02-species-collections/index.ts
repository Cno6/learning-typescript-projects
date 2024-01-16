// Refactor here! ✨
import { getFauna, FaunaSettings } from "./getFauna";
import { getFlora, FloraSettings } from "./getFlora";
import { onlyTruthy } from "./utils/onlyTruthy";

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
