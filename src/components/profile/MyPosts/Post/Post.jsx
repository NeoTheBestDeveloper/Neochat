import React from 'react';
import './Post.css'
import s from './Post.module.css';

const Post = (props) => {
  let likeEl = React.createRef();
  let dislikeEl = React.createRef();

  let changeLike = () => {
    let id = props.id;
    props.changeLike(id);
  };

  let changedisilke = () => {
    let id = props.id;
    props.changedisilke(id);
  };

  return (
    <div className={s.item}>
      <div className={s.post__description}>
        <img className={s.post__ava} src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt="" />
        <div className={s.reiting}>
          <div className={s.like}>
            <img className={s.like__item} ref={likeEl} src={props.likeSrc} alt="" onClick={changeLike} />
            <div className={s.likesCount}>{props.likesCount}</div>
          </div>
          <div className={s.dislike}>
            <img className={s.dislike__item} ref={dislikeEl} src={props.dislikeSrc} alt="" onClick={changedisilke} />
            <div className={s.dislikesCount}>{props.dislikesCount}</div>
          </div>
        </div>
      </div>

      <div className={s.post__text}>{props.message}</div>
    </div>

  );
}



export default Post