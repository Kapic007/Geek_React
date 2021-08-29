import {PROFILE_CHANGE_AVATAR, PROFILE_SET_AUTH, PROFILE_SET_ERROR, PROFILE_SET_NAME} from "./actionTypes";
import { auth } from "../../common/config/firebase/firebase";

export const profileChangeAvatar = (toggle) => ({
  type: PROFILE_CHANGE_AVATAR,
  payload: toggle,
});

export const changeName = (payload) => ({
  type: PROFILE_SET_NAME,
  payload,
});

const setAuth = (authed) => ({
  type: PROFILE_SET_AUTH,
  payload: authed,
});

const setError = (error) => ({
  type: PROFILE_SET_ERROR,
  payload: error,
});

export const connectProfileToFB = () => (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setAuth(true));
      } else {
        dispatch(setAuth(false));
      }
    });
  } catch (e) {
    dispatch(setError(e.message))
  }
};

export const loginWithFB = (name, pass) => (dispatch) => {
  try {
    auth.signInWithEmailAndPassword(name, pass);
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const signUpWithFB = (name, pass) => (dispatch) => {
  try {
    auth.createUserWithEmailAndPassword(name, pass);
  } catch (e) {
    dispatch(setError(e.message));
  }
};

export const logoutWithFB = () => (dispatch) => {
  try {
    auth.signOut();
  } catch (e) {
    dispatch(setError(e.message));
  }
};