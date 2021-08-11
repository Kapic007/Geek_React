import {PROFILE_CHANGE_AVATAR} from "./actionTypes";

export const reducer = (state = true, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_AVATAR: {
      const toggle = action.payload;
      state = toggle;
      return state;
    }
    default:
      return state;
  }
}

export default reducer;