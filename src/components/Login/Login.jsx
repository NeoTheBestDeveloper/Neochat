import React from 'react';
import s from './Login.module.css';
import { reduxForm, Field, reset } from 'redux-form';
import { FormControl } from '../common/FormsControl/FormControl';
import { required, maxLengthCreater } from '../../utils/validators/validators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';


const maxLenght50 = maxLengthCreater(50);
const Input = FormControl("input");

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.form_login_wrapper}>
                <Field type={'text'}
                    placeholder={'Email'}
                    className={s.form_loginInput}
                    component={Input}
                    validate={[required, maxLenght50]}
                    name={'email'} />
            </div>
            <div className={s.form_password_wrapper}>
                <Field type={'password'}
                    placeholder={'Password'}
                    className={s.form_passwordInput}
                    component={Input}
                    validate={[required, maxLenght50]}
                    name={'password'} />
            </div>
            <div className={s.submitBtn_wrapper}>
                <button className={s.submitBtn} >Login</button>
                <div className={s.checkbox_wrapper}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field type={'checkbox'} className={s.form_checkboxInput} id={'rememberMe'} component={"input"} name={'rememberMe'} />
                </div>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1 className={s.form_title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(login(email, password, rememberMe));
            dispatch(reset("login"));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);