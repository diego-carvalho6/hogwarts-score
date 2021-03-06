import { checkStudant } from "./actionsType";

export const checkStudent = (studant) => ({
  type: checkStudant,
  studant,
});
