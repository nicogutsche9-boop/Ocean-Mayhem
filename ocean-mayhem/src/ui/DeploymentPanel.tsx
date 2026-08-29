import {FLEET} from "../game/Fleet";
import {useGameStore} from "../game/GameState";
export function DeploymentPanel(){
 const select=useGameStore(s=>s.selectShip),rotate=useGameStore(s=>s.rotateSelectedShip),selected=useGameStore(s=>s.selectedShipId),ships=useGameStore(s=>s.playerShips),phase=useGameStore(s=>s.phase),setPhase=useGameStore(s=>s.setPhase);
 if(phase!=="DEPLOYMENT")return null;
 return <aside className="deployment-panel"><div className="panel-title">DEPLOY YOUR FLEET</div><div className="panel-subtitle">Wähle ein Schiff und platziere es auf dem 25×25-Ozean.</div>
 <div className="fleet-list">{FLEET.map(s=>{const placed=ships.filter(x=>x.definitionId===s.id).length;return <button className="fleet-row" key={s.id} onClick={()=>select(s.id)} disabled={placed>=s.count}><span>{s.name}</span><b>{placed}/{s.count}</b></button>})}</div>
 <button className="rotate-btn" onClick={rotate} disabled={!selected}>↻ DREHEN</button>
 <button className="ready-btn" onClick={()=>setPhase("BATTLE")} disabled={ships.length!==11}>{ships.length===11?"START BATTLE":`${ships.length}/11 PLATZIERT`}</button>
 </aside>;
}
