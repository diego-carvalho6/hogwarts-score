import { updateScore } from "./actions.js";

export const updateScoreThunk = (house) => (dispatch, getStore) => {
  const { houseScore } = getStore();
  const houses = houseScore.map((element) =>
    element.name === house[0]
      ? (element.score += house[1])
      : (element.score = element.score)
  );
  dispatch(updateScore(houses));
};
