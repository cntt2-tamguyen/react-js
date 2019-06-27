import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    render() {
        if(this.props.alertShow===false) return null;
        return (
            <AlertContainer>
                <Alert type="info">Hello, world</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch1: () => {
        //     dispatch(actionCreator)
        // }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertInfo);