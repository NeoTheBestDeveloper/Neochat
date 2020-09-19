import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';
import Friends from './Friends';
import { connect } from 'react-redux';

let mapDataToProps = (state) => {
    let friends = state.siteBar.friendsData.map(fr => <FriendsItem name={fr.name} ava={fr.ava} key={fr.id}/>);

    return {
        friends: friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapDataToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;
