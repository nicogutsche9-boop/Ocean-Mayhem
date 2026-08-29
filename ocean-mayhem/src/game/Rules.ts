import type {Cell,ShipInstance} from "./types";
import {BOARD_SIZE,cellsForShip} from "./Board";
export function createEmptyBoard():Cell[][]{
 return Array.from({length:BOARD_SIZE},()=>Array.from({length:BOARD_SIZE},()=>({state:"EMPTY" as const})));
}
export function applyShipsToBoard(board:Cell[][],ships:ShipInstance[]){
 const next=board.map(r=>r.map(c=>({...c})));
 for(const ship of ships) for(const c of cellsForShip(ship.start,ship.length,ship.direction)) next[c.y][c.x]={state:"SHIP",shipId:ship.id};
 return next;
}
