interface ISkill {
	name: string;
	number: number;
}

export interface IDataSkills {
	icon: string;
	type: string;
	description: string;
	skills: Array<ISkill>;
}