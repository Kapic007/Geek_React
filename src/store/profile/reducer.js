import {PROFILE_CHANGE_AVATAR, PROFILE_SET_ERROR, PROFILE_SET_AUTH, PROFILE_DROP_NAME, PROFILE_SET_NAME, PROFILE_TOGGLE_SHOW} from "./actionTypes";

const initialState = {
  show: false,
  name: "No name",
  authorized: false,
  error: null,
  togleAvatar: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_AVATAR: {
      return {
        ...state,
        togleAvatar: action.payload,
      };
    }
    case PROFILE_TOGGLE_SHOW: {
      return {
        ...state,
        show: !state.show,
      };
    }
    case PROFILE_DROP_NAME: {
      return {
        ...state,
        name: "",
      };
    }
    case PROFILE_SET_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case PROFILE_SET_AUTH: {
      return {
        ...state,
        authorized: action.payload,
        error: null,
      };
    }
    case PROFILE_SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;