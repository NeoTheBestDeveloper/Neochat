import React from 'react';
import s from './ProfileInfo.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.status}>
            <div className={s.status__title}>Status:</div>
            {editMode
                ? <div>
                    <input
                        value={status}
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode} />
                </div>
                : <div className={s.status__text}
                    onDoubleClick={activateEditMode} >
                    {props.status}
                </div>
            }
        </div >
    )
}


export default ProfileStatusWithHooks;