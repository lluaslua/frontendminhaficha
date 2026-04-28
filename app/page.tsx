import SheetHeader from "@/components/sheet-header/SheetHeader";
import { CharacterSheet } from "@/types/character-sheet.types";


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
    <div className="flex flex-col flex-1 items-center justify-center d:arkbg-black">
      <SheetHeader/>
      <div>
        {characterSheets.map((sheet) =>(
          <div key={sheet.id}>
            <h1>{sheet.name}</h1>
            <h1 className="text-4xl">{sheet.name}</h1>
          </div>
        ))}

      </div>
    </div>
  );
}
