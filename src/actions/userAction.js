import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUserAction = () => {
  return (dispacth) => {
    axios
      .get(
        "http://my-json-server.typicode.com/Tesargantarasuherman/learn-redux-api/user"
      )
      .then(function (response) {
        dispacth({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispacth({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
