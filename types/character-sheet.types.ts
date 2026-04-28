export type TypeOfDamage = "ACID" | "BLUDGEONING" | "COLD" | "FIRE" | "FORCE" | "LIGHTNING" | "NECROTIC" | "POISON" | "PSYCHIC" | "RADIANT" | "THUNDER" | "SLASHING" | "PIERCING";   

interface CharacterSheet {
    id: number;
    name: string;
    playerClass: string;
    level: number;
    playerRace: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    armor: number;
    initiative: number;
    speed: number;
    proficiencyBonus: number;
    currentLife: number;
    maxLife: number;
    passiveWisdom: number;
    success: number;
    fail: number;
    platinumPieces: number;
    goldPieces: number;
    electrumPieces: number;
    silverPieces: number;
    copperPieces: number;
    equipments: PlayerEquipment[];
    languages: PlayerLanguage[];
    spells: PlayerSpell[];
    traits: PlayerTrait[];
    features: PlayerFeature[];
    skills: PlayerSkill[];
}

export interface PlayerEquipment {
    id: number;
    name: string;
    typeOfDamage: TypeOfDamage;
    hitBonus: number;
    damage: string;
    sheet?: Omit<CharacterSheet, "equipments">;
}

export interface PlayerLanguage{
    id: number;
    name: string;
    sheet?: Omit<CharacterSheet, "languages">;
}

export interface PlayerSpell{
    id: number;
    level: number;
    name: string;
    description: string;
    sheet?: Omit<CharacterSheet, "spells">;
}

export interface PlayerTrait{
    id: number;
    name: string;
    description: string;
    sheet?: Omit<CharacterSheet, "traits">;
}

export interface PlayerFeature{
    id: number;
    name: string;
    description: string;
    sheet?: Omit<CharacterSheet, "features">;
}

export interface PlayerSkill{
    id: number;
    name: string;
    bonus: number;
    isProeficient: boolean;
}