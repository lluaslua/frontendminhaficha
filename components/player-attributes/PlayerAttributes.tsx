'use client'

import { CharacterSheet } from "@/types/character-sheet.types";
import { Card } from "../ui/card";
import { modifierFormatter } from "@/utils/atribute-utils";
import { AttributeProps } from "@/types/data-sheet.types";

export default function PlayerAttributes({data}: AttributeProps){
    const attributes = data.attributes;

    return(
        <div className="flex flex-row flex-wrap">
            {attributes.map((attribute) =>(
                <Card key={attribute.id} className="flex flex-col py-4 bg-background justify-center flex-1 items-center gap-2">
                    <h3 className="text-center text-secondary">{attribute.name}</h3>
                    <h1 className="text-center">{attribute.score}</h1>
                    <p className="text-center px-4 py-2 border rounded-xl text-primary-foreground">{modifierFormatter(attribute.modifier)}</p>
                </Card>
            ))}
        </div>
    )

}