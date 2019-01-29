import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

export default class TaskList extends Component {
            render () {
                return (
                    <React.Fragment>
        
                    {/* ADD TASK BUTTON */}
                    <div className="taskButton">
                    <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.history.push("/tasks/new")}
                            }>
                        Add a task
                    </button>
                    </div>
                    {/* <section className="tasks">
                    {this.props.tasks.map(task => (
                        <TaskForm key={task.id} task={task} {...this.props} />
                    ))}
                    </section> */}
                    </React.Fragment>
                )
            }
    }