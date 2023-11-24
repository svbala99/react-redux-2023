import { all } from "redux-saga/effects";
import countSaga from "./sagas/countSagas";
import postSaga from "./sagas/postSagas";
import photoSaga from "./sagas/photoSagas";

function* rootSaga() {
  yield all([...countSaga, ...postSaga, ...photoSaga]);
}

// exports
export default rootSaga;
