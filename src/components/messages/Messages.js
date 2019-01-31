import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessagesList from './MessagesList'
import './Messages.css'

//this component maps over allMessages, passed in via props from AppViews, and passes each message into the MessageCard

export default class Messages  extends Component {
    render() {

        // console.log("<Messages /> this.props", this.props)
        // console.log("this.state", this.state)
        return (
            <React.Fragment>

                <button id="AddMessage" onClick={() => {console.log("add button clicked")
                this.props.addMessage()
                // this.props.messages.history.push("/messages/new")
                }}>Add a new message</button>

                <MessagesList />
            </React.Fragment>

            
        )
    }

}