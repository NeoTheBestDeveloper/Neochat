import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:8000/api${this.props.location.pathname}`).then(response => {
      console.log(response.data);
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