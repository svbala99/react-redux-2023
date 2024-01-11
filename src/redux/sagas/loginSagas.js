import { fork, put, takeLatest } from "redux-saga/effects";
import {
  INCREMENT_REQUEST,
  triggerIncrementError,
  triggerIncrementSuccess,
} from "../actions/countAction";

// worker sagas - SLAVES
function* login() {
  try {
    yield put(triggerIncrementSuccess());
  } catch (e) {
    yield put(triggerIncrementError(e));
  }
}

// watcher saga - MASTER
function* loginWatcher() {
  yield takeLatest(INCREMENT_REQUEST, login);
}

const loginSaga = [fork(loginWatcher)];

// exports
export default loginSaga;
