import { updateScoreType } from "./actionsType";
const houseBase = [
  { name: "Gryffindor", score: 0 },
  { name: "Slytherin", score: 0 },
  { name: "Hufflepuff", score: 0 },
  { name: "Ravenclaw", score: 0 },
];
const houseScoreReducer = (state = houseBase, action) => {
  switch (action.type) {
    case updateScoreType:
      const { houses } = action;
      state = houses;
      return state;

    default:
      return state;
  }
};

export default houseScoreReducer;
