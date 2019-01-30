import { Route } from "react-router-dom";
import React, { Component } from "react";
import TaskManager from "../modules/Taskmanager"
import TaskList from "../components/tasks/TaskList"
import TaskForm from "../components/tasks/TaskForm"

export default class ApplicationViews extends Component {

  state = {
    tasks: []
  };

  componentDidMount() {
    TaskManager.getAll()
    .then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }
  updateTask = (TaskId, editedTaskObj) => {
    return TaskManager.put(TaskId, editedTaskObj)
    .then(() => TaskManager.getAll())
    .then(tasks => {
      this.setState({
        tasks: tasks
      })
    });
  };
  addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: task
        })
      );

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
          exact 
          path="/tasks" render={props => {
            return <TaskList {...props} tasks = { this.state.tasks} />
          }}
        />
        <Route
          exact 
          path="/tasks/new" render={props => {
            return <TaskForm {...props} addTask={this.addTask} />
          }}
        />
        <Route
        path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskForm {...props} updateTask={this.updateTask}/>
          }}
        />
        
      </React.Fragment>
    );
  }
}
