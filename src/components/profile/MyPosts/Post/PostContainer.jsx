import Post from './Post';
import { changeLikeAC, changeDisikeAC } from './../../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapDataToProps = (state) => {
  return {
    
  }
}

let mapDispatchToProps= (dispatch) => {
  return {
    changeLike: (id) => {
      dispatch(changeLikeAC(id));
    },
    changedisilke: (id) => {
      dispatch(changeDisikeAC(id));
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