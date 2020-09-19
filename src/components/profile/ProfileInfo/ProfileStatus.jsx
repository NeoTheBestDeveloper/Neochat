import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editmode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editmode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editmode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.status}>
                <div className={s.status__title}>Status:</div>
                {this.state.editmode
                    ? <div><input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true} /></div>
                    : <div className={s.status__text} onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                }
            </div >
        )
    };
}


export default ProfileStatus;