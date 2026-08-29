export type GamePhase="MENU"|"DEPLOYMENT"|"BATTLE"|"GAME_OVER";
export type CellState="EMPTY"|"SHIP"|"HIT"|"MISS"|"SUNK";
export type Direction="HORIZONTAL"|"VERTICAL";
export type Coordinate={x:number;y:number};
export type ShipDefinition={id:string;name:string;length:number;count:number};
export type ShipInstance={id:string;definitionId:string;name:string;length:number;start:Coordinate;direction:Direction;hits:number};
export type Cell={state:CellState;shipId?:string};
