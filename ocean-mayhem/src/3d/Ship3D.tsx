import type {ShipInstance} from "../game/types";
export function Ship3D({ship,offset,cell}:{ship:ShipInstance;offset:number;cell:number}){
 const x=ship.start.x*cell-offset,z=ship.start.y*cell-offset,length=ship.length*cell;
 return <group position={[x,.65,z]} rotation={[0,ship.direction==="HORIZONTAL"?0:Math.PI/2,0]}>
  <mesh castShadow receiveShadow><boxGeometry args={[length*.82,1.15,2.4]}/><meshStandardMaterial color="#2b3f4c" metalness={.65} roughness={.28}/></mesh>
  <mesh position={[0,.9,0]} castShadow><boxGeometry args={[length*.28,1.05,1.55]}/><meshStandardMaterial color="#172b38" metalness={.75} roughness={.24}/></mesh>
  <mesh position={[length*.18,1.5,0]} castShadow><cylinderGeometry args={[.55,.55,.7,12]}/><meshStandardMaterial color="#536774" metalness={.85} roughness={.2}/></mesh>
 </group>;
}
