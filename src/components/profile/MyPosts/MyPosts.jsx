import React from 'react';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreater } from '../../../utils/validators/validators';
import { FormControl } from '../../common/FormsControl/FormControl';
import PostContainer from './Post/PostContainer';

const maxLenght30 = maxLengthCreater(30);
const Textarea = FormControl("textarea");

const MyPostForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <Field placeholder="Add new post:)"
      className={s.form__text}
      name="postText"
      component={Textarea}
      validate={[required, maxLenght30]} />
    <button className={s.form__adder} onClick={props.addPost} type="submit">Add post</button>
    <button className={s.form__remover}>Remove</button>
  </form>
};

const MyPostReduxForm = reduxForm({ form: "AddPostForm" })(MyPostForm);

const MyPosts = React.memo(props => {
  let addPost = (formData) => {
    props.addPost(formData.postText);
  }

  let Posts = [...props.Posts].reverse().map(post => <PostContainer key={post.id} message={post.message} dislikesCount={post.dislikesCount} likesCount={post.likesCount} id={post.id} likeSrc={post.likeSrc} dislikeSrc={post.dislikeSrc} />);
  return (
    <div>
      <h1 className={s.MyPosts__title}>My Posts</h1>
      <div className={s.MyPosts__form}>
        <MyPostReduxForm onSubmit={addPost} />
      </div>
      <div className={s.posts}>
        {Posts}
      </div>
    </div>
  );
});


export default MyPosts;