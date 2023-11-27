import { all } from "redux-saga/effects";
import countSaga from "./sagas/countSagas";
import postSaga from "./sagas/postSagas";
import calenderSaga from "./sagas/calenderSagas";

function* rootSaga() {
  yield all([...countSaga, ...postSaga, ...calenderSaga]);
}

// exports
export default rootSaga;
