import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'


export default class NewMessageForm  extends Component {


    constructNewMessage = evt => {
        // evt.preventDefault()
        this.props.addMessage()

        // const credentials = JSON.parse(localStorage.getItem('credentials'))
        // const messages = {
        //     "bloop"
            // id: this.state.messageId,
            // to: this.state.messageTo,
            // message: this.state.message,
            // date: new Date().toISOString(),
            // userId: credentials.id
        // }

        // this.props.addMessage(messages)
        // .then(() => this.props.history.push("/messages"))
    }


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
                this.constructNewMessage()
                this.props.history.push("/messages/")
                }}>Add a new message
            </button>
        </div>
        )
    }
}
