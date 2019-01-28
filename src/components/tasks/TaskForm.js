import React , { Component } from "react"
import TaskManager from "../../modules/Taskmanager"

export default class TaskForm extends Component {
    state = {
        id : "",
        userId: "",
        task: ""
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
.then(() => this.props.history.push("/students"))
}
componentDidMount() {

    TaskManager.get(this.props.match.params.userId)
    .then(task => {
    this.setState({
        id: task.id,
        userId: task.userId,
        task: task.task

    })
    })
}
render() {
    return (
        <React.Fragment>
        <form className="studentForm">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="firstName" 
                  value = {this.state.firstName} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="lastName" 
                  value={this.state.lastName} />
            </div>
            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="notes" 
                  value={this.state.notes} />
            </div>
            
            <button type="submit" onClick={this.updateExistingStudent} className="btn btn-primary">Submit</button>
        </form>
    </React.Fragment>

    )
}
}