import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from './../../common/loader/Loader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile || !props.status) {
    return <Loader />
  }
  return (
    <div className={s.profile__title}>
      <div className={s.profile__ava} >
        <img className={s.ava__img} src={props.profile.photos.large} alt="" />
      </div>
      <div className={s.profile__description} >
        <div className={s.name}>{props.profile.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div className={s.all__counts}>
          <div className={s.counts}>Friends<br />{props.profile.friendsCount !== null ? 34 : props.profile.friendsCount}</div>
          <div className={s.counts}>Subscribers<br />{props.profile.subscribersCount !== null ? 23 : props.profile.subscribersCount}</div>
          <div className={s.counts}>Photos<br />{props.profile.photosCount !== null ? 78 : props.profile.photosCount}</div>
          <div className={s.counts}>Audios<br />{props.profile.audiosCount !== null ? 345 : props.profile.audiosCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;