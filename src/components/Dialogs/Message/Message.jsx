import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <div className={s.item__description}>
                <img className={s.item__ava} src={props.avatar} alt="" />
                <div className={s.item__author}>{props.author}</div>
            </div>
            <div>
                <div className={s.item__text}>{props.messageItem__text}</div>
            </div>
        </div>
    );
}


export default Message