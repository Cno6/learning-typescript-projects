import { getFlowers, FlowersSettings } from "./flora/getFlowers";
import { getTrees, TreesSettings } from "./flora/getTrees";

export interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}

export function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
