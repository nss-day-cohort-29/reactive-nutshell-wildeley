import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
import NewsManager from './news/NewsManager'


export default class ApplicationViews extends Component {

  state ={
    news:[]
  }

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
            return <NewsForm {...props} addArticle={this.newArticle} />
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
