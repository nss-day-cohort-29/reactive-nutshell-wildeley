import React, { Component } from "react"

export default class TaskForm extends Component {
    // Set initial state
    state = {
        taskName: "",
        completionDate: "",
        complete:""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewTask = evt => {
        evt.preventDefault()
            const task = {
                task: this.state.task,
                completionDate: this.state.completionDate,
                completed: this.state.complete,
                userId: this.state.userId
            }

            this.props.addTask(task).then(() => this.props.history.push("/tasks"))

    }

    render() {
        return (
            <React.Fragment>
                <form className="taskForm">
                    <div className="form-group">
                        <label htmlFor="taskName">What is your Task?</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="task"
                               placeholder="anything " />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">When do you need to complete it?</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="completionDate" placeholder="Date" />
                    </div>
                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Add Task</button>
                </form>
            </React.Fragment>
        )
    }
}