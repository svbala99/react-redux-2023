import {
  FETCH_CALENDER_ERROR,
  FETCH_CALENDER_REQUEST,
  FETCH_CALENDER_SUCCESS,
} from "../actions/calenderAction";

const initState = {
  loading: false,
  data: null,
};

const calenderReducer = (state = initState, action = {}) => {
  switch (action?.type) {
    case FETCH_CALENDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CALENDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action?.response,
      };
    }
    case FETCH_CALENDER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default calenderReducer;
