const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const logintRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
const logintSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};
const logintError = (error) => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  logintRequest,
  logintSuccess,
  logintError,
};
