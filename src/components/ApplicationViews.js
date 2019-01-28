import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import DataManager from './../modules/DataManager'

import Messages from './messages/Messages'

export default class ApplicationViews extends Component {

messages = [
  {
    id: 1,
    to: "Jisie",
    message: "Oh My God!",
    date: "2018-09-07T19:11:28.887Z",
    userId: 2
  },
  {
    id: 2,
    to: "Meg",
    message: "Double Trouble on the way",
    date: "2018-09-07T19:21:42.394Z",
    userId: 2
  },
  {
    id: 3,
    to: "Emily",
    message: "Why not both?",
    date: "2018-09-07T19:21:42.394Z",
    userId: 2
  },
  {
    id: 4,
    to: "Leah",
    message: "Can't spell 'Leah' without L. A. ",
    date: "2018-09-07T19:21:42.394Z",
    userId: 2
  },
  {
    id: 5,
    to: "Andy",
    message: "Why?, Why?, Why?, Why?, Why?",
    date: "2018-09-07T19:21:42.394Z",
    userId: 2
  }

]

state = {
  messages: this.messages
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
