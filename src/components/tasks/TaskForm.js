import React , { Component } from "react"
import TaskManager from "../../modules/Taskmanager"

export default class TaskForm extends Component {
    state = {
        id : "",
        userId: "",
        task: "",
        completionDate: "",
    }

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = [evt.target.value]
    this.setState(stateToChange)
}
updateExistingTask = evt => {
    evt.preventDefault()

const ExistingTask = {
    id: this.state.id,
    userId: this.state.userId,
    task: this.state.task
}
this.props.updateTask(this.props.match.params.userId, ExistingTask)
.then(() => this.props.history.push("/tasks"))
}
componentDidMount() {

    TaskManager.get(this.props.match.params.id)
    .then(tasks => {
    this.setState({
        userId: tasks.userId,
        task: tasks.task,
        completionDate: tasks.completionDate

    })
    })
}
render() {
    return (
        <React.Fragment>
        <form className="listForm">
            <div className="form-group">
                <label htmlFor="task">Task</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="Task" 
                  value = {this.state.task} />
            </div>
            <div className="form-group">
                <label htmlFor="complete">Completion date</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="complete" 
                  value={this.state.completionDate} />
            </div>
            
            
            <button type="submit" onClick={this.ExistingTask} className="btn btn-primary">Submit</button>
        </form>
    </React.Fragment>

    )
}
}