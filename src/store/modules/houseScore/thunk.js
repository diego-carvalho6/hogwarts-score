import { updateScore } from "./actions.js";

export const updateScoreThunk = (house) => (dispatch, getStore) => {
  const { houseScore } = getStore();
  const houses = houseScore.map((element) =>
    element.name === house[0]
      ? { name: element.name, score: (element.score += Number(house[1])) }
      : { name: element.name, score: element.score }
  );

  dispatch(updateScore(houses));
};
