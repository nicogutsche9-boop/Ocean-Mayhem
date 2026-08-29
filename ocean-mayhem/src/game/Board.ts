import type {Coordinate,Direction,ShipInstance} from "./types";
export const BOARD_SIZE=25;
export function cellsForShip(start:Coordinate,length:number,direction:Direction):Coordinate[]{
 return Array.from({length},(_,i)=>({x:start.x+(direction==="HORIZONTAL"?i:0),y:start.y+(direction==="VERTICAL"?i:0)}));
}
export function isInsideBoard(cells:Coordinate[]){return cells.every(c=>c.x>=0&&c.x<BOARD_SIZE&&c.y>=0&&c.y<BOARD_SIZE);}
export function canPlaceShip(ships:ShipInstance[],candidate:Pick<ShipInstance,"start"|"length"|"direction">){
 const cells=cellsForShip(candidate.start,candidate.length,candidate.direction);
 if(!isInsideBoard(cells)) return false;
 const occupied=new Set(ships.flatMap(s=>cellsForShip(s.start,s.length,s.direction).map(c=>`${c.x}:${c.y}`)));
 return cells.every(c=>!occupied.has(`${c.x}:${c.y}`));
}
