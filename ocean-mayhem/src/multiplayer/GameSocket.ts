export type ClientAction={type:"FIRE";x:number;y:number}|{type:"READY"}|{type:"PLACE_SHIP";shipId:string;x:number;y:number;direction:string};
export class GameSocket{connect(){} send(_action:ClientAction){} disconnect(){}}
