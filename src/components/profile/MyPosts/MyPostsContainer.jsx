import React from 'react';
import { addPostActionCreator } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import PostContainer from './Post/PostContainer';
import { connect } from 'react-redux';
import { reset } from 'redux-form';


let mapDataToProps = (state) => {
  let Posts = state.profilePage.postData.map(post => <PostContainer key={post.id} message={post.message} dislikesCount={post.dislikesCount} likesCount={post.likesCount} id={post.id} likeSrc={post.likeSrc} dislikeSrc={post.dislikeSrc} />);

  return {
    newPostText: state.profilePage.newPostText,
    Posts: Posts,
  }

}

let mapDispatchToProps = (dispatch) => {

  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
      dispatch(reset('AddPostForm'));
    },

  }
}

const MyPostsContainer = connect(mapDataToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;