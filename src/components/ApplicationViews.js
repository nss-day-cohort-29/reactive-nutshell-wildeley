import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from './../modules/DataManager'

import Messages from './messages/Messages'
import NewMessageForm from "./messages/NewMessageForm";

export default class ApplicationViews extends Component {

state = {
  messages: [],
  users: []
}

addMessage = newmessage => DataManager.postNewMessage(newmessage)
    .then(() => DataManager.getAllMessages())
    .then(messages => this.setState({
      messages: messages
    }))

componentDidMount() {

  const newState = {}

  DataManager.getAllMessages()
    .then(allMessages => {
      newState.messages = allMessages
    })
  DataManager.getAllUsers()
    .then(allUsers => {
      newState.users = allUsers
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
          exact path="/messages" render={props => {
            return <Messages  {...props} messages={this.state.messages}/>
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          exact path="/messages/new" render={props => {
            return <NewMessageForm {...props}
              addMessage={this.addMessage}
              users={this.state.users}
            />
          }}
        />

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
