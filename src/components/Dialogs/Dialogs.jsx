import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import Dialogitem from './DialogItem/DialogItem';
import Message from './Message/Message'
import React from 'react';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../redux/dialogs-reducer'



const Dialogs = (props) => {


    let newMessage = React.createRef();
    let newMessageText = props.dialogsPage.newMessageText

    let buttonMessage = ()=>{props.dispatch(addMessageActionCreator())}
    


    let onChangeMessage =()=>{
    let text = newMessage.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
}

    let messagesElements = props.dialogsPage.messages.map(m =><Message dialog={m.message}/> )
    let dialogsElements = props.dialogsPage.dialogs.map(d=><Dialogitem name = {d.name} id={d.id}/>)    
    return(
        <div className={s.Dialogs} >
            <div className={s.Dialogsitem}>
                {dialogsElements}
            </div>
            <div className={`${s.Massages} ${s.writeMessage}`}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onChangeMessage} value={newMessageText} ref={newMessage}/></div>
                    <div><button  onClick={buttonMessage} >send</button></div>
                </div>
            </div>
            
        </div>
    )
    
}
export default Dialogs;