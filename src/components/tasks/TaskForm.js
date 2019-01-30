import React, { Component } from "react"
import TaskManager from "../../modules/Taskmanager"
import TaskList from "./TaskList"

export default class TaskForm extends Component {
    state = {
        task: "",
        completionDate: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(evt.target.id)
        console.log(stateToChange)

    }

    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.task === "") {
            window.alert("Please select yout task");
        } else {
            const task = {
                task: this.state.task,
                completionDate: this.state.completionDate
            };
            console.log(task)
            this.props
                .addTask(task)
                .then(() => this.props.history.push("/tasks"));
        }
    }
    render() {
        return (
            <React.Fragment>
                <form className="listForm">
                    <div className="form-group">
                        <label htmlFor="task">Task:</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="task"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complete">Completion date:</label>
                        <input type="text" required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="completionDate"
                        />
                    </div>


                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>

        )
    }
}