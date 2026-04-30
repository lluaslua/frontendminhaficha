export type TypeOfDamage = 
"ACID" 
| "BLUDGEONING" 
| "COLD" 
| "FIRE" 
| "FORCE" 
| "LIGHTNING" 
| "NECROTIC" 
| "POISON" 
| "PSYCHIC" 
| "RADIANT" 
| "THUNDER" 
| "SLASHING" 
| "PIERCING";   

export type MagicSchool = 
  | "ABJURATION" 
  | "CONJURATION" 
  | "DIVINATION" 
  | "ENCHANTMENT" 
  | "EVOCATION" 
  | "ILLUSION" 
  | "NECROMANCY" 
  | "TRANSMUTATION";

export type SpellLevelType = 
  | "CANTRIP" 
  | "1ST LEVEL" 
  | "2ND LEVEL" 
  | "3RD LEVEL" 
  | "4TH LEVEL" 
  | "5TH LEVEL" 
  | "6TH LEVEL" 
  | "7TH LEVEL" 
  | "8TH LEVEL" 
  | "9TH LEVEL";

  export type CastingTime = 
  "1 ACTION" 
  | "1 BONUS ACTION" 
  | "1 REACTION" 
  | "1 MINUTE" 
  | "10 MINUTES" 
  | "1 HOUR";


export interface CharacterSheet {
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
    attributes: PlayerAttributes[];
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
    type: "Transmutation cantrip",
    castingTime: CastingTime,
    range: Range,
    components: string,
    duration: string,
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

export interface PlayerAttributes{

    id: number;
    name: string;
    score: number;
    modifier: number;
} 