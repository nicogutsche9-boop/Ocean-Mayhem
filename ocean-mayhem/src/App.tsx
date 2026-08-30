import { useState } from "react";
import Lobby from "./ui/Lobby";
import MainMenu from "./ui/MainMenu";

type Screen = "menu" | "lobby";

function App() {
  const [screen, setScreen] = useState<Screen>("menu");

  return (
    <div className="app">
      {screen === "menu" ? (
        <MainMenu onCreateGame={() => setScreen("lobby")} />
      ) : (
        <Lobby onBack={() => setScreen("menu")} />
      )}
    </div>
  );
}

export default App;
