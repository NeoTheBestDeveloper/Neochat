import React from 'react';
import s from "./Users.module.css";
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, unfollow, follow, avaDefault }) => {
    return <div>
        <div className={s.user}>
            <div className={s.userLeft}>
                <NavLink className={s.ava_wrapper} to={'/profile/' + user.id}> <img src={user.photos.small !== null ? user.photos.small : avaDefault} className={s.ava} alt="/" /> </NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        unfollow(user.id);

                    }} className={s.followBtn}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        follow(user.id);


                    }} className={s.followBtn}>Follow</button>
                }
            </div>
            <div className={s.userRight}>
                <div className={s.descriptions}>
                    <div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status !== undefined ? "Shouldn't worry" : user.status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>{user.country !== null ? "Belarus" : user.status}</div>
                    <div className={s.town}>{user.town !== null ? "Tokyo" : user.status}</div>
                </div>
            </div>
        </div>
    </div>
}

export default User;