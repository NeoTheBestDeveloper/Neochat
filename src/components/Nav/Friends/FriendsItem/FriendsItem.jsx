import React from 'react';
import s from './FriendsItem.module.css';


const FriendsItem = (props) => {
    return (
        <div className={s.friends__item}>
            <div className={s.item__ava}>
                <img src={props.ava} alt=""/>
            </div>
            <div className={s.item__name}>{props.name}</div>
        </div>
    );
}

export default FriendsItem;
