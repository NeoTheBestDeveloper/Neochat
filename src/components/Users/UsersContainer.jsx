import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowigProgress, getUsersThunkCreater } from '../../redux/usersReducer';
import Users from './Users.jsx'
import Loader from './../common/loader/Loader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getAvaDefault, getIsFetching, getFollowingInProgress  } from '../../redux/users-selectors';

class UsersComponent extends React.Component {
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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         avaDefault: state.usersPage.avaDefault,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        avaDefault: getAvaDefault(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowigProgress, getUsersThunkCreater
    }),
    withAuthRedirect,
)(UsersComponent);
