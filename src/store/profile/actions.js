import {PROFILE_CHANGE_AVATAR} from "./actionTypes";

export const profileChangeAvatar = (toggle) => ({
  type: PROFILE_CHANGE_AVATAR,
  payload: toggle,
});
