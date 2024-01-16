import { getMammals, MammalsSettings } from "./fauna/getMammals";
import { getReptiles, ReptilesSettings } from "./fauna/getReptiles";

export interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}

export function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
