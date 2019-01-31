import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import DataManager from './../modules/DataManager'

// import Messages from './messages/Messages'
import MessagesList from './messages/MessagesList'
import NewMessageForm from "./messages/NewMessageForm";

import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsManager from './news/NewsManager'
// import ".news/News.css"

export default class ApplicationViews extends Component {

  state = {
    messages: [],
    users: [],
    news: []
  }

  addMessage = message => {
    console.log("bloop")
    return DataManager.postNewMessage(message)
    .then(() => DataManager.getAllMessages())
    .then(allMessages => {
      this.setState({messages: allMessages})
    })
  }

  deleteMessage = messageId => {
    DataManager.deleteMessage(messageId)
    .then(() => DataManager.getAllMessages())
    .then(allMessages => {
      this.setState({messages: allMessages})
    })
  }

  // deleteArticle = id => {
  //   return fetch(`http://localhost:5002/news/${id}`, {
  //       method: "DELETE"
  //   })
  //   .then(e => e.json())
  //   .then(() => fetch(`http://localhost:5002/news`))
  //   .then(e => e.json())
  //   .then(allArticles => this.setState({
  //       news: allArticles
  //   })
  // )
  // }
 ///////////refactor delete///////

  deleteArticle = id => NewsManager.delete(id)
    .then(() => NewsManager.getAll())
    .then(allArticles => this.setState({
      news: allArticles
    })
    )


  newArticle = (article) => NewsManager.post(article)
    .then(() => NewsManager.getAll())
    .then(allArticles => this.setState({
      news: allArticles
    })
    )
  // deleteMessage = id => DataManager.delete("messages", id)
//     .then(() => DataManager.getAll("messages"))
//     .then(messages => this.setState({
//       messages: messages
//     }))


componentDidMount() {
  const newState = {}

  fetch("http://localhost:5002/news")
    .then(r => r.json())
    .then(allArticles => newState.news = allArticles)

    DataManager.getAllMessages()
    .then(allMessages => {
      newState.messages = allMessages
    })
  DataManager.getAllUsers()
    .then(allUsers => {
      newState.users = allUsers
    })

    // this.stickMessagesOnDom()
    .then(() => this.setState(newState))
}

stickMessagesOnDom() {

  // const newState = {}

  // DataManager.getAllMessages()
  //   .then(allMessages => {
  //     newState.messages = allMessages
  //   })
  // DataManager.getAllUsers()
  //   .then(allUsers => {
  //     newState.users = allUsers
  //   })

  //   .then(() => {
  //     this.setState(newState)
  //   })

}

  render() {
    return (
      <React.Fragment>



      <Route
        exact path="/" render={props => {
          return <React.Fragment>
            <NewsForm {...props} addArticle={this.newArticle} />
            <NewsList {...props} news={this.state.news} deleteArticle={this.deleteArticle} />
          </React.Fragment>
        }}
      />
       {/* <Route exact path="/new" render={props => {
          return
          <NewsForm {...props}
          addArticle= {this.newArticle} />

          }}
      /> */}

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          exact path="/messages" render={props => {
            return <MessagesList
              {...props}
              messages={this.state.messages}
              users={this.state.users}
              deleteMessage={this.deleteMessage}
              addMessage={this.addMessage}

              stickMessagesOnDom={this.stickMessagesOnDom}/> }}
        />

        <Route
          exact path="/messages/new" render={props => {
            return <NewMessageForm
              {...props}

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

  // deleteArticle = id => {
  //   return fetch(`http://localhost:5002/news/${id}`, {
  //       method: "DELETE"
  //   })
  //   .then(e => e.json())
  //   .then(() => fetch(`http://localhost:5002/news`))
  //   .then(e => e.json())
  //   .then(allArticles => this.setState({
  //       news: allArticles
  //   })
  // )
  }