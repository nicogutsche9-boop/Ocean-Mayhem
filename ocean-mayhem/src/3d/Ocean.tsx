import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import * as THREE from "three";
export function Ocean(){
 const ref=useRef<THREE.Mesh>(null);
 useFrame(({clock})=>{if(ref.current)(ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity=.15+Math.sin(clock.elapsedTime*.8)*.04;});
 return <mesh ref={ref} rotation={[-Math.PI/2,0,0]} position={[0,-.25,0]} receiveShadow>
  <planeGeometry args={[120,120,64,64]}/>
  <meshStandardMaterial color="#063454" roughness={.28} metalness={.35} emissive="#021725" emissiveIntensity={.15}/>
 </mesh>;
}
