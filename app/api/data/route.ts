import { NextResponse } from "next/server";
import mockPlayerData from '@/mocks/player-data.json';

export async function GET(){
    return NextResponse.json(mockPlayerData);
}