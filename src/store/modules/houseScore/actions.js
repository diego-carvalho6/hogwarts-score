import { updateScoreType } from "./actionsType";

export const updateScore = (houses) => ({
  type: updateScoreType,
  houses,
});
