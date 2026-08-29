import {Grid} from "@react-three/drei";
import {BOARD_SIZE} from "../game/Board";
import {Ship3D} from "./Ship3D";
import {useGameStore} from "../game/GameState";
const CELL=4,OFFSET=((BOARD_SIZE-1)*CELL)/2;
export function Board3D(){
 const ships=useGameStore(s=>s.playerShips);
 return <group><Grid args={[BOARD_SIZE*CELL,BOARD_SIZE*CELL]} position={[0,.02,0]} cellSize={CELL} cellThickness={.7} cellColor="#126b9c" sectionSize={CELL*5} sectionThickness={1.2} sectionColor="#28b9e8" fadeDistance={180}/>
 {ships.map(s=><Ship3D key={s.id} ship={s} offset={OFFSET} cell={CELL}/>)}</group>;
}
