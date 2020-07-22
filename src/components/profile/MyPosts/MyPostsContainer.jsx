import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import PostContainer from './Post/PostContainer';
import { connect } from 'react-redux';


let mapDataToProps = (state) => {
  let Posts = state.profilePage.postData.map(post => <PostContainer key={post.id} message={post.message} dislikesCount={post.dislikesCount} likesCount={post.likesCount} id={post.id} likeSrc={post.likeSrc} dislikeSrc={post.dislikeSrc}/>);

  return {
    newPostText: state.profilePage.newPostText,
    Posts: Posts,
  }

}

let mapDispatchToProps = (dispatch) => {

  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    handleClick: (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        dispatch(addPostActionCreator());
      }
    }
  }
}

const MyPostsContainer = connect(mapDataToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;