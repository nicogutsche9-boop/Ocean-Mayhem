import { useState } from "react";
import Lobby from "./ui/Lobby";
import "./styles.css";

type Screen = "menu" | "join" | "lobby";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [playerName, setPlayerName] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");
  const [error, setError] = useState("");

  const createLobby = () => {
    setPlayerName("Captain");
    setScreen("lobby");
  };

  const openJoin = () => {
    setError("");
    setLobbyCode("");
    setPlayerName("");
    setScreen("join");
  };

  const joinLobby = () => {
    const code = lobbyCode.trim().toUpperCase();
    const name = playerName.trim();

    if (!name) {
      setError("Bitte gib deinen Spielernamen ein.");
      return;
    }

    if (!code) {
      setError("Bitte gib einen Lobby-Code ein.");
      return;
    }

    // Aktuell gültiger Demo-Lobby-Code
    if (code !== "OCEAN-7X4") {
      setError("Diese Lobby wurde nicht gefunden.");
      return;
    }

    setError("");
    setLobbyCode(code);
    setScreen("lobby");
  };

  if (screen === "lobby") {
    return <Lobby playerName={playerName || "Captain"} />;
  }

  return (
    <main className="app-menu">
      <div className="menu-glow menu-glow-one" />
      <div className="menu-glow menu-glow-two" />
      <div className="menu-grid" />

      <section className="menu-content">
        <p className="menu-eyebrow">ONLINE NAVAL BATTLE</p>

        <h1 className="menu-title">
          OCEAN <span>MAYHEM</span>
        </h1>

        <p className="menu-subtitle">
          Bereit für die Schlacht auf dem 25 × 25 Ozean?
        </p>

        {screen === "menu" && (
          <div className="menu-actions">
            <button
              className="menu-button primary"
              onClick={createLobby}
              type="button"
            >
              <span>⚓</span>
              SPIEL ERSTELLEN
            </button>

            <button
              className="menu-button secondary"
              onClick={openJoin}
              type="button"
            >
              <span>＋</span>
              SPIEL BEITRETEN
            </button>
          </div>
        )}

        {screen === "join" && (
          <div className="join-card">
            <div className="join-header">
              <span className="join-icon">⚓</span>

              <div>
                <p className="card-label">MULTIPLAYER</p>
                <h2>Spiel beitreten</h2>
              </div>
            </div>

            <label>
              Spielername
              <input
                type="text"
                placeholder="z. B. Admiral"
                value={playerName}
                maxLength={16}
                onChange={(event) => {
                  setPlayerName(event.target.value);
                  setError("");
                }}
              />
            </label>

            <label>
              Lobby-Code
              <input
                type="text"
                placeholder="OCEAN-7X4"
                value={lobbyCode}
                maxLength={10}
                onChange={(event) => {
                  setLobbyCode(
                    event.target.value.toUpperCase()
                  );
                  setError("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    joinLobby();
                  }
                }}
              />
            </label>

            {error && (
              <div className="join-error">
                ⚠ {error}
              </div>
            )}

            <button
              className="menu-button primary join-button"
              onClick={joinLobby}
              type="button"
            >
              <span>⚓</span>
              LOBBY BEITRETEN
            </button>

            <button
              className="back-button"
              onClick={() => setScreen("menu")}
              type="button"
            >
              ← ZURÜCK
            </button>
          </div>
        )}

        <div className="menu-status">
          <span />
          SERVER ONLINE
        </div>
      </section>
    </main>
  );
}
