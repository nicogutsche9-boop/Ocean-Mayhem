import {create} from "zustand";
import {canPlaceShip} from "./Board";
import {createEmptyBoard} from "./Rules";
import {FLEET} from "./Fleet";
import type {Direction,GamePhase,ShipInstance} from "./types";
type Store={
 phase:GamePhase; turn:"PLAYER"|"OPPONENT"; playerShips:ShipInstance[]; selectedShipId:string|null; direction:Direction; playerBoard:ReturnType<typeof createEmptyBoard>;
 selectShip:(id:string)=>void; rotateSelectedShip:()=>void; placeSelectedShip:(x:number,y:number)=>void; setPhase:(p:GamePhase)=>void;
};
export const useGameStore=create<Store>((set,get)=>({
 phase:"DEPLOYMENT",turn:"PLAYER",playerShips:[],selectedShipId:null,direction:"HORIZONTAL",playerBoard:createEmptyBoard(),
 selectShip:(definitionId)=>{
  const d=FLEET.find(s=>s.id===definitionId); if(!d)return;
  const instance:ShipInstance={id:`${d.id}-${crypto.randomUUID()}`,definitionId:d.id,name:d.name,length:d.length,start:{x:0,y:0},direction:get().direction,hits:0};
  set({selectedShipId:instance.id,playerShips:[...get().playerShips,instance]});
 },
 rotateSelectedShip:()=>{
  const {selectedShipId,playerShips}=get(); if(!selectedShipId)return;
  set({playerShips:playerShips.map(s=>s.id===selectedShipId?{...s,direction:s.direction==="HORIZONTAL"?"VERTICAL":"HORIZONTAL"}:s)});
 },
 placeSelectedShip:(x,y)=>{
  const {selectedShipId,playerShips}=get(); if(!selectedShipId)return;
  const selected=playerShips.find(s=>s.id===selectedShipId); if(!selected)return;
  const others=playerShips.filter(s=>s.id!==selectedShipId); const candidate={...selected,start:{x,y}};
  if(!canPlaceShip(others,candidate))return;
  set({playerShips:playerShips.map(s=>s.id===selectedShipId?candidate:s),selectedShipId:null});
 },
 setPhase:(phase)=>set({phase})
}));
