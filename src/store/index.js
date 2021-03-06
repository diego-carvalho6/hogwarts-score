import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import studantReducer from "./modules/student/reducer.js";
import houseScoreReducer from "./modules/houseScore/reducer.js";
const reducers = combineReducers({
  student: studantReducer,
  houseScore: houseScoreReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
