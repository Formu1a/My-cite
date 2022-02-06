import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageTextActionCreator: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    };
};

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs);
