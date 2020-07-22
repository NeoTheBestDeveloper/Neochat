import React from 'react';
import s from './Dialogs.module.css';


let messagesBlock = React.createRef();
const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let autoScrolling = () => {
        let messages = messagesBlock.current;
        messages.scrollTop = messages.scrollHeight;
    }

    let addMessage = () => {
        props.addMessage();
        setTimeout(() => {autoScrolling()}, 1);
    };

    let handleClick = (e) => {
        props.handleClick(e);
        setTimeout(() => {autoScrolling()}, 1);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__left}>
                <div className={s.dialogs__title}>Dialogs</div>
                <ul className={s.dialogs__items}>
                    {props.dialogsElements}
                </ul>
            </div>
            <div className={s.wrapper}></div>
            <div className={s.messages}>
                <div className={s.messagesItems} ref={messagesBlock}>
                    {props.messageElements}
                </div>
                <div className={s.addMessageForm}>
                    <textarea ref={newMessageElement} className={s.form__text} onChange={updateNewMessageText} onKeyPress={handleClick} placeholder="Add new message:)" value={props.newMessageText}></textarea>
                    <button className={s.form__adder} onClick={addMessage}>Add message</button>
                </div>

            </div>
        </div>
    )
}


export default Dialogs;