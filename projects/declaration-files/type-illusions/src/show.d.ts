// Declare your types here! ✨
export interface Act {
	performer: string;
	name: string;
	sections: Array<Section>;
}

type Section = Trick | Illusion;

export interface Trick {
	gimmick: string;
}

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
	// duration: number
}

export interface VolunteerIllusion extends Illusion {
	duration: number;
	title: string;
}

export interface AudienceMember {
	name: string;
}

export interface GetAudienceMemberSettings {
	duration: number;
	title: string;
}

export function getAudienceMemberFor(
	settings: GetAudienceMemberSettings
): Promise<AudienceMember>;

export function isTrick(value: Section): value is Trick;
export function isVolunteerIllusion(
	illusion: Illusion
): illusion is VolunteerIllusion;
