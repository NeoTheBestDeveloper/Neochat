import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowigProgress, getUsersThunkCreater } from '../../redux/usersReducer';
import Users from './Users.jsx'
import Loader from './../loader/Loader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize);
    }

    onPageChanched = (pageNumber) => {
        this.props.getUsersThunkCreater(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                onPageChanched={this.onPageChanched}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                avaDefault={this.props.avaDefault}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                toggleFollowigProgress={this.props.toggleFollowigProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        avaDefault: state.usersPage.avaDefault,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowigProgress, getUsersThunkCreater
})(UsersAPIComponent);

export default UsersContainer;