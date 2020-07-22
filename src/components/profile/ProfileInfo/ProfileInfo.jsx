import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profile__title}>
        <div className={s.profile__ava} >
          <img className={s.ava__img} src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt="" />
        </div>
        <div className={s.profile__description} >
          <div className={s.name}>Jack Brown</div>
          <div className={s.status}>
            <div className={s.status__title}>Status:</div>
            <div className={s.status__text}>Shouldn't worry</div>
          </div>
          <div className={s.all__counts}>
            <div className={s.counts}>Friends<br/> 15</div>
            <div className={s.counts}>Subscribers<br/> 30</div>
            <div className={s.counts}>Photos<br/> 40</div>
            <div className={s.counts}>Audios<br/> 100</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileInfo;