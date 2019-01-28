import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";



export default class Messages  extends Component {
    render() {

        return (
            <section className="messageList"> Messages:
            {
                this.props.messages.map(message =>
                    <div className="Message" key={message.id}>
                        To {message.to} :  {message.message}
                    </div>
                )
            }
            </section>
        )
    }
}
