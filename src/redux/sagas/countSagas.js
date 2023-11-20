import { fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  triggerIncrementError,
  triggerIncrementSuccess,
  triggerDecrementSuccess,
  triggerDecrementError
} from "../actions/countAction";

// worker sagas - SLAVES
function* incrementSaga() {
  try {
    yield put(triggerIncrementSuccess());
    // yield put(triggerDecrementSuccess());
  } catch (e) {
    yield put(triggerIncrementError(e));
    // yield put(triggerDecrementError(e));
  }
}

// function* decrementSaga() {
//   try {
//     yield put(triggerDecrementSuccess());
//   } catch (e) {
//     yield put(triggerDecrementError(e));
//   }
// }

// watcher saga - MASTER
function* countWatcherSaga() {
  yield takeLatest(INCREMENT_REQUEST, incrementSaga);
}

const countSaga = [fork(countWatcherSaga)];

// exports
export default countSaga;
