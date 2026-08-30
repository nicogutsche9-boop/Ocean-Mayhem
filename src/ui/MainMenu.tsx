import "./main-menu.css";

type MainMenuProps = {
  onCreateGame: () => void;
};

export default function MainMenu({
  onCreateGame,
}: MainMenuProps) {
  return (
    <main className="main-menu">
      <div className="menu-background">
        <div className="menu-glow menu-glow-one" />
        <div className="menu-glow menu-glow-two" />
        <div className="menu-grid" />

        <div className="radar">
          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <div className="radar-ring ring-three" />
          <div className="radar-line" />
        </div>
      </div>

      <section className="menu-content">
        <div className="menu-status">
          <span />
          ONLINE
        </div>

        <p className="menu-eyebrow">
          ONLINE NAVAL BATTLE
        </p>

        <h1 className="menu-title">
          OCEAN <span>MAYHEM</span>
        </h1>

        <p className="menu-subtitle">
          Strategisches Seeschlacht-Gameplay
          <br />
          auf einem 25 × 25 Ozean.
        </p>

        <div className="menu-actions">
          <button
            className="menu-button primary"
            onClick={onCreateGame}
          >
            <span className="button-icon">⚓</span>

            <span className="button-text">
              <strong>SPIEL ERSTELLEN</strong>
              <small>Neue Lobby eröffnen</small>
            </span>

            <span className="button-arrow">→</span>
          </button>

          <button
            className="menu-button secondary"
            onClick={() => {}}
          >
            <span className="button-icon">🌊</span>

            <span className="button-text">
              <strong>SPIEL BEITRETEN</strong>
              <small>Mit Lobby-Code beitreten</small>
            </span>

            <span className="button-arrow">→</span>
          </button>

          <button
            className="menu-button secondary"
            onClick={() => {}}
          >
            <span className="button-icon">🤖</span>

            <span className="button-text">
              <strong>GEGEN BOTS</strong>
              <small>Alleine gegen die KI spielen</small>
            </span>

            <span className="button-arrow">→</span>
          </button>
        </div>

        <div className="menu-bottom">
          <button className="small-menu-button">
            ⚙ EINSTELLUNGEN
          </button>

          <div className="version">
            OCEAN MAYHEM
            <span>v0.1</span>
          </div>
        </div>
      </section>

      <div className="menu-corner top-left" />
      <div className="menu-corner top-right" />
      <div className="menu-corner bottom-left" />
      <div className="menu-corner bottom-right" />
    </main>
  );
}
