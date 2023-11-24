import { fork, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_PHOTO_ERROR,
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  fetchPhotoSuccess,
  fetchPhotoError
} from "../actions/photoAction";
import { getRequest } from "../../api/axiosClient";
import API_URLS from "../../constants/apiConstants";

function* fetchPhotoSaga() {
  try {
    const photoResponse = yield getRequest(
      `${API_URLS.BASE_URL}${API_URLS.PHOTO}`
    );
    yield put(fetchPhotoSuccess(photoResponse.data));
  } catch (e) {
    yield put(fetchPhotoError(e));
  }
}

// watcher saga - MASTER
function* countWatcherSaga() {
  yield takeLatest(FETCH_PHOTO_REQUEST, fetchPhotoSaga);
}

const photoSaga = [fork(countWatcherSaga)];

// exports
export default photoSaga;
