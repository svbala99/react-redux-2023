import { fork, put, takeLatest } from "redux-saga/effects";
import { FETCH_CALENDER_ERROR, FETCH_CALENDER_REQUEST, FETCH_CALENDER_SUCCESS, fetchCalenderError, fetchCalenderSuccess } from "../actions/calenderAction";
import { getRequest } from "../../api/axiosClient";
import API_URLS from "../../constants/apiConstants";

function* fetchCalenderSaga(){
try{
    const calenderResponse = yield  getRequest(
        `${API_URLS.CALENDER}`
    );
    yield put(fetchCalenderSuccess(calenderResponse))
}
catch (e) {
    yield put(fetchCalenderError(e))
}
}

// watcher saga - MASTER
function* countWatcherSaga() {
    yield takeLatest(FETCH_CALENDER_REQUEST, fetchCalenderSaga);
  }
  
  const calenderSaga = [fork(countWatcherSaga)];
  
  // exports
  export default calenderSaga;