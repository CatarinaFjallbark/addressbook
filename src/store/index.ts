import { Action, actionTypes } from "./types";

function rootReducer(state = [], action: Action): never[] {
  switch (action.type) {
    case actionTypes.loadData:
      return action.data;
    default:
      return state;
  }
}
export default rootReducer;
