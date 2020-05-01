import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";
const AUTHED_ID = "tylermcginnis"; // simple way, so we do not worry about authentication.

// thunk that gets tweets and users data from API and saves in store
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users)); // save users in store
      dispatch(receiveTweets(tweets)); //saves tweets in store
      dispatch(setAuthedUser(AUTHED_ID)); // saves authed user
      dispatch(hideLoading());
    });
  };
}
