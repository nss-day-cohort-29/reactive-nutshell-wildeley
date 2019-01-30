import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsManager from './news/NewsManager'
// import ".news/News.css"


export default class ApplicationViews extends Component {

  state = {
    news: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/news")
      .then(r => r.json())
      .then(allArticles => newState.news = allArticles)
      .then(() => this.setState(newState))
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

      <Route
        path="/friends" render={props => {
          return null
          // Remove null and return the component which will show list of friends
        }}
      />

      <Route
        path="/messages" render={props => {
          return
          // Remove null and return the component which will show the messages
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
