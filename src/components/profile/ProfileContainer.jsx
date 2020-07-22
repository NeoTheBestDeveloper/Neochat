import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profileReducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:8000/api/profile/1/`).then(response => {
      console.log(response.data);
      this.props.setProfile(response.data);
    });

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profie} />
    );
  }

}

let mapStateToProps = (state) => ({
  profie: state.profilePage.profile
});

export default connect (mapStateToProps, {
  setProfile,
}) (ProfileContainer); 