import React from 'react';
import avadefault from './../../img/user.svg';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    };
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      console.log(response)
      if (response.data.photos.large === null) {
        response.data.photos.large = avadefault;
      }
      this.props.setProfile(response.data);
    });

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setProfile,
})(WithUrlDataContainerComponent); 