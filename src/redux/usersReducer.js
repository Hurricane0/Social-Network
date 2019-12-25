const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
  totalUsersCount: 28,
  pageSize: 3,
  currentPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};

export const followAC = userID => ({
  type: FOLLOW,
  userID
});
export const unfollowAC = userID => ({
  type: UNFOLLOW,
  userID
});
export const setUsersAC = users => ({
  type: SET_USERS,
  users
});

export default usersReducer;
