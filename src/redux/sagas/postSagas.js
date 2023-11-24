import { fork, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsError,
  fetchPostsSuccess,
} from "../actions/postAction";
import { getRequest, postRequest } from "../../api/axiosClient";
import API_URLS from "../../constants/apiConstants";

// worker sagas - SLAVES
function* fetchPostSaga(action) {
  try {
    const postsResponse = yield getRequest(
      `${API_URLS.BASE_URL}${API_URLS.POSTS}`
    );
    const req = yield postRequest( `${API_URLS.BASE_URL}${API_URLS.POSTS}`, action?.payload)
    yield put(fetchPostsSuccess(postsResponse?.data));
    yield put(fetchPostsSuccess(req?.data));

  } catch (e) {
    yield put(fetchPostsError(e));
  }
}

// watcher saga - MASTER
function* countWatcherSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostSaga);
}

const postSaga = [fork(countWatcherSaga)];

// exports
export default postSaga;
