import s from './Dialogs.module.css'
import Dialogitem from './DialogItem/DialogItem';
import Message from './Message/Message'
import React from 'react';



const Dialogs = (props) => {
    
    let state = props.dialogsPage

    let newMessage = React.createRef();
    let newMessageText = state.newMessageText

    let buttonMessage = ()=>{
        props.addMessageActionCreator()
    }
    


    let onChangeMessage =()=>{
    let text = newMessage.current.value;
    props.updateNewMessageTextActionCreator(text)
}

    let messagesElements = state.messages.map(m =><Message dialog={m.message}/> )
    let dialogsElements = state.dialogs.map(d=><Dialogitem name = {d.name} id={d.id}/>)    
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