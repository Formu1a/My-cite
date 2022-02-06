import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapDispatchToProps, { getAuthUserData })(
    HeaderContainer
);
