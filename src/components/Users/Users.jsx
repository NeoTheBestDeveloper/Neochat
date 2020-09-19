import React from 'react';
import s from "./Users.module.css";
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanched,  users, avaDefault, ...props }) => {
    return <div>
        <div>
            <div className={s.users__header}>
                <div className={s.usersTitle}>Users</div>
                <Paginator onPageChanched={onPageChanched} currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            </div>
            <div className={s.users}>
                {users.map(u => <User key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    avaDefault={avaDefault}
                    follow={props.follow}
                    unfollow={props.unfollow} />)}
            </div>
        </div>
    </div>
}

export default Users;