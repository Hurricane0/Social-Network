import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { setUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log("hello");
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true
      })
      .then(response => {
        let { id, login, email } = response.data.data;
        this.props.setUserData(id, login, email);
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  username: state.auth.login
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
