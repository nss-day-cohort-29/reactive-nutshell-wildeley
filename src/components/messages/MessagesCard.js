import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

class MessagesCard extends Component {
    render()

    {
        console.log("<MessagesCard /> this.props", this.props)
        return (
            <React.Fragment>

            <button id="AddMessage" onClick={() => {console.log("add button clicked")

                               this.props.messages.history.push("/messages/new")
                            }}>Add a new message</button>

           {/* <MessagesList /> */}
            </React.Fragment>
        )
    }
}

export default MessagesCard