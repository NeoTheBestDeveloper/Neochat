import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from './../../common/loader/Loader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile || !status) {
    return <Loader />
  }
  return (
    <div className={s.profile__title}>
      <div className={s.profile__ava} >
        <img className={s.ava__img} src={profile.photos.large} alt="" />
      </div>
      <div className={s.profile__description} >
        <div className={s.name}>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className={s.all__counts}>
          <div className={s.counts}>Friends<br />{profile.friendsCount !== null ? 34 : profile.friendsCount}</div>
          <div className={s.counts}>Subscribers<br />{profile.subscribersCount !== null ? 23 : profile.subscribersCount}</div>
          <div className={s.counts}>Photos<br />{profile.photosCount !== null ? 78 : profile.photosCount}</div>
          <div className={s.counts}>Audios<br />{profile.audiosCount !== null ? 345 : profile.audiosCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;