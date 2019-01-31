import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard"

export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>

                {/* ADD TASK BUTTON */}
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }>
                        Add a task
                    </button>
                </div>
                {/* GETTING ALL TASKS CURRENTLY IN JSON*/}

                {this.props.tasks.map(task => (
                    <div key={task.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {task.task}<br></br>
                                {task.completionDate}
                            </h5>
                            <button>Delete</button>

                        </div>
                    </div>
                ))}
            </React.Fragment>
        )

    }
}
    
            