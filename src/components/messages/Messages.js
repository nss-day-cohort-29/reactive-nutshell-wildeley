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
                        To {message.to} :  {message.message}
                        <br />
                        <button id={message.id} onClick={() => {console.log(`edit button # ${message.id} clicked`)}}> Edit this message </button>
                    </div>
                )
            }
            </section>
        </div>
        )
    }
}
