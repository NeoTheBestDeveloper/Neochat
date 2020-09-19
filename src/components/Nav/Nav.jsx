import React from 'react';
import s from './Nav.module.css';
import FriendsContainer from './Friends/FriendsContainer';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/profile">Profile</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.activelink} to="/dialogs">Messages</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/news">News</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/music">Music</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/settings">Settings</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/games">Games</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activelink}  to="/servises">Servises</NavLink></div>
            </div>
            <FriendsContainer />
            <div className={s.usersItem}><NavLink activeClassName={s.activelink}  to="/users">Users</NavLink></div>
        </nav>
    );
}

export default Nav