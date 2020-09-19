import s from './Loader.module.css';
import React from 'react';

let Loader = (props) => {
    return <div className={s.loader__wrapper}><div className={s.loader}><div></div><div></div><div></div><div></div></div></div>
}

export default Loader;