import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from './../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';
 


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
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
            dispatch(reset("dialogsAddMessageForm"))
        },
    }
}






export default compose(
    connect(mapDataToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;