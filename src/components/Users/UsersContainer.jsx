import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowigProgress } from '../../redux/usersReducer';
import Users from './Users.jsx'
import Loader from './../loader/Loader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setUsersTotalCount(response.totalCount);
            });
        } else {
            this.props.toggleIsFetching(false);
        }

    }

    onPageChanched = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
        });
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

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowigProgress })(UsersAPIComponent);

export default UsersContainer;