import { checkStudant } from "./actionsType";

const studantReducer = (state = [], action) => {
  switch (action.type) {
    case checkStudant:
      const { studant } = action;
      state = [studant];
      return state;

    default:
      return state;
  }
};

export default studantReducer;
