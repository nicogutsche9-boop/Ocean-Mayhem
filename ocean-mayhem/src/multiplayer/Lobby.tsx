import { useState } from "react";
import "./lobby.css";

type LobbyMode = "menu" | "create" | "join" | "waiting";

export default function Lobby() {
  const [mode, setMode] = useState<LobbyMode>("menu");
  const [lobbyCode, setLobbyCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [playerReady, setPlayerReady] = useState(false);

  const createLobby = () => {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < 5; i++) {
      code += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setLobbyCode(code);
    setMode("waiting");
  };

  const joinLobby = () => {
    const code = joinCode.trim().toUpperCase();

    if (code.length !== 5) {
      return;
    }

    setLobbyCode(code);
    setMode("waiting");
  };

  const leaveLobby = () => {
    setMode("menu");
    setLobbyCode("");
    setJoinCode("");
    setPlayerReady(false);
  };

  return (
    <main className="lobby-page">
      <div className="lobby-ocean-glow" />

      <header className="lobby-header">
        <div className="lobby-brand">
          <span className="brand-wave">〰</span>

          <div>
            <div className="brand-small">3D NAVAL BATTLE</div>
            <h1>
              OCEAN <span>MAYHEM</span>
            </h1>
          </div>
        </div>

        <div className="online-status">
          <span className="status-dot" />
          ONLINE
        </div>
      </header>

      <section className="lobby-content">
        <div className="hologram-panel">
          <div className="panel-line panel-line-top" />
          <div className="panel-line panel-line-bottom" />

          {mode === "menu" && (
            <div className="lobby-menu">
              <div className="menu-heading">
                <span className="eyebrow">MULTIPLAYER</span>
                <h2>ENTER THE OCEAN</h2>
                <p>
                  Erstelle eine Lobby oder tritt einem bestehenden Gefecht bei.
                </p>
              </div>

              <div className="menu-buttons">
                <button
                  className="holo-button primary"
                  onClick={() => setMode("create")}
                >
                  <span className="button-icon">＋</span>

                  <span>
                    <strong>LOBBY ERSTELLEN</strong>
                    <small>Neues Gefecht starten</small>
                  </span>
                </button>

                <button
                  className="holo-button"
                  onClick={() => setMode("join")}
                >
                  <span className="button-icon">⌁</span>

                  <span>
                    <strong>LOBBY BEITRETEN</strong>
                    <small>Mit einem Lobby-Code verbinden</small>
                  </span>
                </button>
              </div>

              <div className="menu-footer">
                <span>25 × 25 BATTLEFIELD</span>
                <span>•</span>
                <span>2 PLAYERS</span>
              </div>
            </div>
          )}

          {mode === "create" && (
            <div className="lobby-create">
              <button
                className="back-button"
                onClick={() => setMode("menu")}
              >
                ← ZURÜCK
              </button>

              <span className="eyebrow">NEW BATTLE</span>
              <h2>CREATE LOBBY</h2>

              <p className="description">
                Erstelle eine private Lobby und teile den Code mit deinem
                Gegner.
              </p>

              <div className="create-visual">
                <div className="radar-ring ring-one" />
                <div className="radar-ring ring-two" />
                <div className="radar-ring ring-three" />

                <div className="radar-center">
                  <span>⚓</span>
                </div>
              </div>

              <button className="holo-button primary large" onClick={createLobby}>
                LOBBY ERSTELLEN
              </button>
            </div>
          )}

          {mode === "join" && (
            <div className="lobby-join">
              <button
                className="back-button"
                onClick={() => setMode("menu")}
              >
                ← ZURÜCK
              </button>

              <span className="eyebrow">JOIN BATTLE</span>
              <h2>LOBBY BEITRETEN</h2>

              <p className="description">
                Gib den fünfstelligen Lobby-Code deines Gegners ein.
              </p>

              <label htmlFor="lobby-code">LOBBY CODE</label>

              <input
                id="lobby-code"
                className="lobby-input"
                type="text"
                maxLength={5}
                placeholder="7K4P9"
                value={joinCode}
                onChange={(event) =>
                  setJoinCode(event.target.value.toUpperCase())
                }
              />

              <button
                className="holo-button primary large"
                onClick={joinLobby}
                disabled={joinCode.trim().length !== 5}
              >
                BEITRETEN
              </button>
            </div>
          )}

          {mode === "waiting" && (
            <div className="lobby-waiting">
              <span className="eyebrow">LOBBY READY</span>

              <h2>WAITING FOR PLAYER</h2>

              <p className="description">
                Teile diesen Code mit deinem Gegner.
              </p>

              <div className="lobby-code-box">
                <span>LOBBY CODE</span>

                <strong>{lobbyCode}</strong>

                <button
                  className="copy-button"
                  onClick={() => navigator.clipboard?.writeText(lobbyCode)}
                >
                  CODE KOPIEREN
                </button>
              </div>

              <div className="players">
                <div className="player-card active">
                  <div className="player-avatar">
                    ⚓
                  </div>

                  <div className="player-info">
                    <strong>PLAYER 1</strong>
                    <span>YOU</span>
                  </div>

                  <div className="player-status ready">
                    ONLINE
                  </div>
                </div>

                <div className="player-card">
                  <div className="player-avatar empty">
                    ?
                  </div>

                  <div className="player-info">
                    <strong>PLAYER 2</strong>
                    <span>WAITING...</span>
                  </div>

                  <div className="player-status waiting">
                    SEARCHING
                  </div>
                </div>
              </div>

              <button
                className={`ready-button ${
                  playerReady ? "is-ready" : ""
                }`}
                onClick={() => setPlayerReady(!playerReady)}
              >
                {playerReady ? "✓ READY" : "READY UP"}
              </button>

              <button className="leave-button" onClick={leaveLobby}>
                LOBBY VERLASSEN
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="lobby-footer">
        <span>OCEAN MAYHEM</span>
        <span>25 × 25</span>
        <span>3D BATTLE SYSTEM</span>
      </footer>
    </main>
  );
}
