import { useState } from "react";
import "./lobby.css";

type Player = {
  id: number;
  name: string;
  ready: boolean;
  host?: boolean;
};

const initialPlayers: Player[] = [
  {
    id: 1,
    name: "Captain",
    ready: true,
    host: true,
  },
];
type LobbyProps = {
  playerName?: string;
};

const createInitialPlayers = (name: string): Player[] => [
  {
    id: 1,
    name,
    ready: false,
    host: name === "Captain",
  },
];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(lobbyCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  const addBot = () => {
    if (players.length >= 4) return;

    const botNumber = players.length;

    setPlayers((current) => [
      ...current,
      {
        id: Date.now(),
        name: `Bot ${botNumber}`,
        ready: true,
      },
    ]);
  };

  const allReady = players.every((player) => player.ready);

  return (
    <main className="lobby">
      <div className="lobby-background">
        <div className="ocean-glow glow-one" />
        <div className="ocean-glow glow-two" />
        <div className="grid-lines" />
      </div>

      <section className="lobby-container">
        {/* HEADER */}
        <header className="lobby-header">
          <div>
            <p className="eyebrow">ONLINE NAVAL BATTLE</p>

            <h1>
              OCEAN <span>MAYHEM</span>
            </h1>

            <p className="subtitle">
              Bereit für die Schlacht auf dem 25 × 25 Ozean?
            </p>
          </div>

          <div className="status-badge">
            <span className="status-dot" />
            ONLINE
          </div>
        </header>

        {/* LOBBY CODE */}
        <section className="code-card">
          <div>
            <p className="card-label">LOBBY CODE</p>
            <strong>{lobbyCode}</strong>
          </div>

          <button
            className="copy-button"
            onClick={copyCode}
            type="button"
          >
            {copied ? "✓ KOPIERT" : "KOPIEREN"}
          </button>
        </section>

        {/* MAIN CONTENT */}
        <div className="lobby-grid">
          {/* PLAYERS */}
          <section className="panel players-panel">
            <div className="panel-header">
              <div>
                <p className="card-label">CREW</p>
                <h2>
                  Spieler{" "}
                  <span>
                    {players.length}/4
                  </span>
                </h2>
              </div>

              <div className="player-count">
                {players.length}/4
              </div>
            </div>

            <div className="players-list">
              {players.map((player) => (
                <div className="player-card" key={player.id}>
                  <div className="avatar">
                    ⚓
                  </div>

                  <div className="player-info">
                    <div className="player-name">
                      {player.name}

                      {player.host && (
                        <span className="host-tag">
                          HOST
                        </span>
                      )}
                    </div>

                    <div
                      className={
                        player.ready
                          ? "ready-text"
                          : "waiting-text"
                      }
                    >
                      <span />
                      {player.ready
                        ? "Bereit"
                        : "Wartet..."}
                    </div>
                  </div>
                </div>
              ))}

              {players.length < 4 && (
                <button
                  className="empty-slot"
                  onClick={addBot}
                  type="button"
                >
                  <span>＋</span>
                  Freien Platz hinzufügen
                </button>
              )}
            </div>
          </section>

          {/* GAME INFO */}
          <aside className="panel info-panel">
            <p className="card-label">MATCH SETTINGS</p>

            <h2>Spielregeln</h2>

            <div className="settings-list">
              <div className="setting">
                <span>Spielfeld</span>
                <strong>25 × 25</strong>
              </div>

              <div className="setting">
                <span>Spieler</span>
                <strong>2–4</strong>
              </div>

              <div className="setting">
                <span>Modus</span>
                <strong>Classic</strong>
              </div>

              <div className="setting">
                <span>Schiffe</span>
                <strong>5</strong>
              </div>
            </div>

            <div className="info-message">
              <span>◈</span>
              <p>
                Platziere deine Flotte strategisch
                und versenke die gegnerischen Schiffe.
              </p>
            </div>
          </aside>
        </div>

        {/* FOOTER ACTIONS */}
        <footer className="lobby-footer">
          <button
            className={
              allReady
                ? "ready-button active"
                : "ready-button"
            }
            onClick={toggleReady}
            type="button"
          >
            {allReady ? "✓ BEREIT" : "BEREIT"}
          </button>

          <button
            className="start-button"
            type="button"
            disabled={!allReady}
          >
            <span>⚓</span>
            SCHLACHT STARTEN
          </button>
        </footer>

        <p className="hint">
          Teile den Lobby-Code mit deinen Freunden
        </p>
      </section>
    </main>
  );
}
