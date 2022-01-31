import React from 'react';
import { connect } from 'react-redux';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../redux/dialogs-reducer'
import Dialogs from './Dialogs';





let MapStateToProps =(state)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}

let MapDispatchToProps =(dispatch)=>{
    return{
        addMessageActionCreator:()=>{dispatch(addMessageActionCreator())},
        updateNewMessageTextActionCreator:(text)=>{dispatch(updateNewMessageTextActionCreator(text))}

    }

}


const DialogsContainer = connect(MapStateToProps,MapDispatchToProps)(Dialogs)



export default DialogsContainer;