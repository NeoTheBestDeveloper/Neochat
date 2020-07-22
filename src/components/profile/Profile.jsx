import React from 'react';
import s from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;