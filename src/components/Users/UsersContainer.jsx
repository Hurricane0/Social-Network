import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  follow,
  followThunk,
  getUsersThunk,
  setCurrentPageUsersThunk,
  toggleInFollowingProcess,
  toggleIsFetching,
  unfollow,
  unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import {
  selectUsers,
  selectPageSize,
  selectTotalUsersCount,
  selectCurrentPage,
  selectInFollowingProcess,
  selectIsFetching
} from "../../redux/selectors/users-selectors";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = newPage => {
    this.props.setCurrentPageUsersThunk(newPage, this.props.pageSize);
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <Users
        pages={pages}
        pagesCount={pagesCount}
        {...this.props}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    users: selectUsers(state),
    totalUsersCount: selectTotalUsersCount(state),
    pageSize: selectPageSize(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    inFollowingProcess: selectInFollowingProcess(state)
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFetching,
    toggleInFollowingProcess,
    getUsersThunk,
    setCurrentPageUsersThunk,
    followThunk,
    unfollowThunk
  })
)(UsersContainer);
