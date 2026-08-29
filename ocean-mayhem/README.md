# 🌊 Ocean Mayhem

3D-Schiffeversenken auf einem 25×25-Raster.

## Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Architektur
- `src/game/` – Regeln, Board, Schiffe und Game State
- `src/3d/` – Three.js / React Three Fiber
- `src/ui/` – HUD und Menüs
- `src/ai/` – spätere KI
- `src/multiplayer/` – spätere Online-Funktionen

Die Spiellogik bleibt unabhängig von der 3D-Darstellung.

## Roadmap
1. 3D-Ozean + 25×25-Board
2. Deployment
3. Kampf
4. Effekte/Sound
5. KI
6. Mobile/Polish
7. Multiplayer
