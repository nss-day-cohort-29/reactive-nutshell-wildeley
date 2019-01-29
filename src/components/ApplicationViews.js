import { Route } from "react-router-dom";
import React, { Component } from "react";
import TaskManager from "../modules/Taskmanager"
import TaskList from "../components/tasks/TaskList"
import TaskForm from "../components/tasks/TaskForm"

export default class ApplicationViews extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    TaskManager.getAll()
    .then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
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
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <TaskList tasks = { this.state.tasks} />
          }}
        />
        <Route
        path="/tasks/:task(\d+)/edit" render={props => {
            return <TaskForm {...props} updateTask={this.updateTask}/>
          }}
        />
        
      </React.Fragment>
    );
  }
}
