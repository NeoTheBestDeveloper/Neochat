import Post from './Post';
import { changeLikeActionCreator, changeDisikeActionCreator } from './../../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapDataToProps = (state) => {
  return {
    
  }
}

let mapDispatchToProps= (dispatch) => {
  return {
    changeLike: (id) => {
      dispatch(changeLikeActionCreator(id));
    },
    changedisilke: (id) => {
      dispatch(changeDisikeActionCreator(id));
    },
  }
}

let mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    id: ownProps.id,
    message: ownProps.message,
    dislikesCount: ownProps.dislikesCount,
    likesCount: ownProps.likesCount,
    likeSrc: ownProps.likeSrc,
    dislikeSrc: ownProps.dislikeSrc,
    changeLike: dispatchProps.changeLike,
    changedisilke: dispatchProps.changedisilke
  }
}

let PostContainer = connect(mapDataToProps, mapDispatchToProps, mergeProps) (Post);


export default PostContainer;