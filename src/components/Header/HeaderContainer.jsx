import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserDataTC } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserDataTC();
    }


    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, { setAuthUserDataTC })(HeaderContainer);