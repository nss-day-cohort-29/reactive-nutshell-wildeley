import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'


export default class NewMessageForm  extends Component {
    render() {
        return (
        <div className="newMessageForm">
            <h3>New Messages Form Goes here:</h3>
            <h3>input field goes here</h3>
            <h3>input field goes here</h3>
            <button
                id="NewMessage"
                onClick={() => {
                console.log("new Message button clicked")
                this.addMessage("bloop")
                this.props.history.push("/messages/")
                }}>Add a new message
            </button>
        </div>
        )
    }
}
