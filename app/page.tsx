import SheetHeader from "@/components/sheet-header/SheetHeader";
import { CharacterSheet } from "@/types/character-sheet.types";
import PlayerAttributes  from "@/components/player-attributes/PlayerAttributes";


async function getCharacterSheet(): Promise<CharacterSheet[]>{
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/data`, {
    cache: 'no-store'
})
  if(!res.ok) {
    throw new Error("Fail to load characterData");
  }
  return res.json();
}

export default async function Home() {
  const characterSheets = await getCharacterSheet();

  return (
    <div className="d:arkbg-black w-[90%] m-auto">
        {characterSheets.map((sheet) =>(
          <div key={sheet.id} className="w-full">
            <SheetHeader data={sheet} />
            <PlayerAttributes data={sheet}/>
          </div>
        ))}
      </div>
    
  );
}
