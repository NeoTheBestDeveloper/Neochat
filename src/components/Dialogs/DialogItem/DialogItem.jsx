import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <li>
            <div className={s.dialogs__item}>
                <NavLink activeClassName={s.activeLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </li>
    );
}

export default DialogItem;