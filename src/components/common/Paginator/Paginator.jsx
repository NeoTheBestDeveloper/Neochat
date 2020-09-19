import React from 'react';
import s from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, onPageChanched, currentPage}) => {
    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= 6; i++) {
        pages.push(i);
    }
    return <ul className={s.pageChoise}>
        {pages.map(p => {
            return <li onClick={() => { onPageChanched(p) }} id={p - 1} key={p - 1} className={ currentPage === p ? s.selected : undefined}>{p}</li>;
        })}
    </ul>
}

export default Paginator;