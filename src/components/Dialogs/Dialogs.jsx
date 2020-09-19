import React from 'react';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../common/FormsControl/FormControl';
import { required, maxLengthCreater } from '../../utils/validators/validators';


const maxLenght50 = maxLengthCreater(50);
const Textarea = FormControl("textarea");

const AddMessaageForm = (props) => {
    return <form className={s.addMessageForm} onSubmit={props.handleSubmit}>
        <Field className={s.form__text}
            placeholder="Add new message:)"
            value={props.newMessageText}
            component={Textarea}
            validate={[required, maxLenght50]}
            name="newMessageBody"></Field>
        <button className={s.form__adder}>Add message</button>
    </form >
}

const AddMessageReduxForm = reduxForm({ form: "dialogsAddMessageForm" })(AddMessaageForm);

let messagesBlock = React.createRef();
const Dialogs = (props) => {
    const addNewMessage = (formData) => {
        props.addMessage(formData.newMessageBody);
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
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}




export default Dialogs;