// import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessagesCard from './MessagesCard'
import './Messages.css'

// import DataManager from './../../modules/DataManager'
// import ApplicationViews from './../ApplicationViews'


export default class Messages  extends Component {
    render() {
        return (
        <div>
            <h3>ChatRoom</h3>
            <button id="AddMessage" onClick={() => {console.log("add button clicked")
                                this.props.history.push("/messages/new")
                            }}>Add a new message</button>

             <section className="messagesCard">

                this.props.messages.map(message =>

                <MessagesCard messages={this.props.messages}/>

             </section>
        </div>
        )
    }
}
