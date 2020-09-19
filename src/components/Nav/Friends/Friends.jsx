import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <h1 className={s.friends__title}>Friends</h1>
            <div className={s.friends__items}>
                {props.friends}
            </div>

        </div>
    );
}

export default Friends;
