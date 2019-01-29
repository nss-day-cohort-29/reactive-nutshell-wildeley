import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'


export default class Messages  extends Component {
    render() {
        return (
        <div>
            <h3>ChatRoom</h3>
            <button id="AddMessage" onClick={() => {console.log("add button clicked")
                                this.props.history.push("/messages/new")
                            }}>Add a new message</button>
            <section className="messagesList">
            {
                this.props.messages.map(message =>
                    <div className="message" key={message.id}>
                        From {message.person_sending_the_message} :
                        <br />
                        {message.message}
                        <br />
                        To : {message.person_receiving_the_message}
                        <br />
                        <button className="btn btn-primary" id={message.id} onClick={() => {console.log(`edit button # ${message.id} clicked`)}}> Edit this message </button>
                        <br />
                        <button className="btn btn-primary" onClick={() => {console.log(`delete button # ${message.id} clicked`)}}> Delete this message </button>
                    </div>
                )
            }
            </section>
        </div>
        )
    }
}
