import { addPostActionCreator } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { reset } from 'redux-form';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    Posts: state.profilePage.postData,
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;