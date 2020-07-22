import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let handleClick = (e) => {
    props.handleClick(e);
  };

  return (
    <div>
      <h1 className={s.MyPosts__title}>My Posts</h1>
      <div className={s.MyPosts__form}>
        <textarea placeholder="Add new post:)" className={s.form__text} ref={newPostElement} value={props.newPostText} onChange={onPostChange}  onKeyPress={handleClick}/>
        <button className={s.form__adder} onClick={ addPost }>Add post</button>
        <button className={s.form__remover}>Remove</button>
      </div>
      <div className={s.posts}>
      {props.Posts}
      </div>

    </div>
  );

}


export default MyPosts;