const FETCH_PHOTO_REQUEST = "FETCH_PHOTO_REQUEST";
const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
const FETCH_PHOTO_ERROR = "FETCH_PHOTO_ERROR";

const fetchPhotoRequest = (payload) => {
  return {
    type: FETCH_PHOTO_REQUEST,
    payload,
  };
};

const fetchPhotoSuccess = (response) => {
  return {
    type: FETCH_PHOTO_SUCCESS,
    response,
  };
};

const fetchPhotoError = (error) => {
  return {
    type: FETCH_PHOTO_ERROR,
    error,
  };
};

export {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_ERROR,
  fetchPhotoError,
  fetchPhotoRequest,
  fetchPhotoSuccess,
};
