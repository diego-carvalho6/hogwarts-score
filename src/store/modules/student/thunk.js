import { checkStudent } from "./actions.js";

export const checkStudentThunk = (student) => (dispatch, getStore) => {
  dispatch(checkStudent(student));
};
