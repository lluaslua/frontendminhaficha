import { CharacterSheet } from "./character-sheet.types";
import { ElementType } from "react";

export interface AttributeProps{
    data: CharacterSheet;
}

export interface SheetHeaderProps{
    data: CharacterSheet;
    icon?: ElementType;
}