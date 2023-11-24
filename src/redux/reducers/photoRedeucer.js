import {
  FETCH_PHOTO_ERROR,
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
} from "../actions/photoAction";

const initialState = {
  loading: false,
  data: null,
};

const photoRedeucer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PHOTO_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_PHOTO_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action?.response,
      };
    }
    case FETCH_PHOTO_ERROR: {
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

export default photoRedeucer;