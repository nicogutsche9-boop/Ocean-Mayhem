export type AIDifficulty="EASY"|"NORMAL"|"HARD";
export function chooseRandomTarget(size=25){return{x:Math.floor(Math.random()*size),y:Math.floor(Math.random()*size)};}
