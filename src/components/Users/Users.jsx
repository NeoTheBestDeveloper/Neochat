import React from 'react';
import s from "./Users.module.css";
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            <div className={s.users__header}>
                <div className={s.usersTitle}>Users</div>
                <ul className={s.pageChoise}>
                    {pages.map(p => {
                        return <li onClick={() => { props.onPageChanched(p) }} id={p - 1} key={p - 1} className={props.currentPage === p ? s.selected : undefined}>{p}</li>;
                    })}
                </ul>
            </div>
            <div className={s.users}>
                {props.users.map(u => <div key={u.id}>
                    <div className={s.user}>
                        <div className={s.userLeft}>
                            <NavLink className={s.ava_wrapper} to={'/profile/' + u.id}> <img src={u.ava !== null ? u.ava : props.avaDefault} className={s.ava} alt="/" /> </NavLink>
                            {u.subscriptionStatus
                                ? <button onClick={() => { props.unfollow(u.id) }} className={s.followBtn}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} className={s.followBtn}>Follow</button>
                            }
                        </div>
                        <div className={s.userRight}>
                            <div className={s.descriptions}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.country}>{u.country}</div>
                                <div className={s.town}>{u.town}</div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
}

export default Users;