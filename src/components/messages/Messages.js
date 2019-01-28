import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'


export default class Messages  extends Component {
    render() {

        return (
            <section className="messagesList"> Messages:
            {
                this.props.messages.map(message =>
                    <div className="message" key={message.id}>
                        To {message.to} :  {message.message}
                    </div>
                )
            }
            </section>
        )
    }
}
