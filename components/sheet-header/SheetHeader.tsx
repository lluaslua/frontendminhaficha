'use client'

import { ElementType } from "react";
import { Card } from "../ui/card"
import { CharacterSheet } from "@/types/character-sheet.types"
import { Button } from "../ui/button";
import { Pen, PenLine  } from "lucide-react"

interface SheetHeaderProps{
    data: CharacterSheet;
    icon?: ElementType;
}

export default function SheetHeader({ data, icon: Icon }: SheetHeaderProps) {


    return(
        <Card className="flex flex-row p-4 justify-between items-center">
            <div className="flex flex-row items-center gap-3">
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-black overflow-hidden flex-shrink-0 p-4">
                    {Icon && <Icon className="text-white opacity-50 w-full w-full" />}
                </div>
            <div className="flex-col gap-1">
            <h1>{data.name}</h1>
            <p className="text-ds-label text-primary-foreground">{data.playerClass} - Nível {data.level} - {data.playerRace}</p>
            </div>
            </div>
            <Button><PenLine/>Editar Ficha</Button>
        </Card>
    )
}