import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from './../modules/DataManager'

import Messages from './messages/Messages'

export default class ApplicationViews extends Component {

state = {
  messages: []
}

componentDidMount() {

  const newState = {}

  DataManager.getAllMessages()
    .then(allMessages => {
      newState.messages = allMessages
    })
    .then(() => {
      this.setState(newState)
    })
}


  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <Messages  messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />

        {/* <Route
          exact path="/messages/:id" render={props => {
            return <Messages  messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        /> */}

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
