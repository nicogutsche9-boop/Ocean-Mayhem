import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ocean } from "./3d/Ocean";
import { Board3D } from "./3d/Board3D";
import { DeploymentPanel } from "./ui/DeploymentPanel";
import { useGameStore } from "./game/GameState";

export default function App(){
  const phase=useGameStore(s=>s.phase);
  return <main className="app"><section className="game-shell">
    <header className="topbar"><div><div className="eyebrow">NAVAL STRATEGY</div><h1>OCEAN <span>MAYHEM</span></h1></div>
    <div className="status"><span className="status-dot"/>{phase}</div></header>
    <div className="scene"><Canvas shadows dpr={[1,2]}>
      <PerspectiveCamera makeDefault position={[34,34,34]} fov={45}/>
      <color attach="background" args={["#04101d"]}/>
      <ambientLight intensity={1.4}/>
      <directionalLight position={[20,35,10]} intensity={3} castShadow/>
      <Ocean/><Board3D/>
      <OrbitControls enablePan minDistance={24} maxDistance={72} minPolarAngle={0.45} maxPolarAngle={1.35}/>
    </Canvas>
    <div className="hud hud-left"><div className="hud-label">GRID</div><div className="hud-value">25 × 25</div></div>
    <div className="hud hud-right"><div className="hud-label">FLEET</div><div className="hud-value">11 SHIPS</div></div>
    <DeploymentPanel/></div>
  </section></main>;
}