import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from './../../redux/dialogsReducer';
import { connect } from 'react-redux';



let mapDataToProps = (state) => {

    let dialogsElements = state.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messageElements = state.dialogsPage.messagesData.map(message => <Message key={message.id} author={message.author} messageItem__text={message.messageItem__text} avatar={message.avatar} />);
    
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsElements: dialogsElements,
        messageElements: messageElements,
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        handleClick: (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                dispatch(addMessageActionCreator());
            }
        },
    }
}

const DialogsContainer = connect(mapDataToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;