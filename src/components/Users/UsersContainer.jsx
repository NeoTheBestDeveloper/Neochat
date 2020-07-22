import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users.jsx'
import Loader from './../loader/Loader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`http://localhost:8000/api/user?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.results);
                this.props.setUsersTotalCount(response.data.count);
            });
        } else {
            this.props.toggleIsFetching(false);
        }

    }

    onPageChanched = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:8000/api/user?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.results);
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
    }
}

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, })(UsersAPIComponent);

export default UsersContainer;