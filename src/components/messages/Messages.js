import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessagesCard from './MessagesCard'
import './Messages.css'

// import DataManager from './../../modules/DataManager'
import ApplicationViews from './../ApplicationViews'

//this component maps over allMessages, passed in via props from AppViews, and passes each message into the MessageCard

export default class Messages  extends Component {
    render() {

        // console.log("this.props", this.props)
        // console.log("this.state", this.state)
        return (

            this.props.messages.map(message =>
                <MessagesCard
                messages={this.props.messages}/>
            )
        )
    }

}