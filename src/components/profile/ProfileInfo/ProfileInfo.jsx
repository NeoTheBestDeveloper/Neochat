import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from './../../loader/Loader';

const ProfileInfo = (props) => {
  if (props.profile === null) {
    return <Loader />
  }
  
    return (
        <div className={s.profile__title}>
        <div className={s.profile__ava} >
          <img className={s.ava__img} src={props.profile.ava} alt="" />
        </div>
        <div className={s.profile__description} >
        <div className={s.name}>{props.profile.name}</div>
          <div className={s.status}>
            <div className={s.status__title}>Status:</div>
            <div className={s.status__text}>{props.profile.status}</div>
          </div>
          <div className={s.all__counts}>
            <div className={s.counts}>Friends<br/>{props.profile.friendsCount}</div>
            <div className={s.counts}>Subscribers<br/>{props.profile.subscribersCount}</div>
            <div className={s.counts}>Photos<br/>{props.profile.photosCount}</div>
            <div className={s.counts}>Audios<br/>{props.profile.audiosCount}</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileInfo;