import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      const res = await trackerApi.post("/signup", { email, password });
      AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "signup", payload: res.data.token });

      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup.",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      const res = await trackerApi.post("/signin", { email, password });
      AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "signin", payload: res.data.token });

      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Unable to signin.",
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
