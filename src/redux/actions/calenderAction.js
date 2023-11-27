const FETCH_CALENDER_REQUEST = 'FETCH_CALENDER_REQUEST';
const FETCH_CALENDER_SUCCESS = 'FETCH_CALENDER_SUCCESS';
const FETCH_CALENDER_ERROR = 'FETCH_CALENDER_ERROR';

const fetchCalenderRequest = (payload) => {
    return{
        type : FETCH_CALENDER_REQUEST,
        payload
    }
}

const fetchCalenderSuccess = (response) => {
    return{
        type : FETCH_CALENDER_SUCCESS,
        response
    }
}

const fetchCalenderError = (error) => {
    return{
        type : FETCH_CALENDER_ERROR,
        error
    }
}

export {
    FETCH_CALENDER_REQUEST,
    FETCH_CALENDER_SUCCESS,
    FETCH_CALENDER_ERROR,
    fetchCalenderRequest,
    fetchCalenderSuccess,
    fetchCalenderError
}
