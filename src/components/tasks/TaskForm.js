import React , { Component } from "react"
import TaskManager from "../../modules/Taskmanager"

export default class TaskForm extends Component {
    state = {
        task: "",
        completionDate: "",
    }

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = [evt.target.value]
    this.setState(stateToChange)
    console.log("evt", evt.target.value)
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
        .then(() => this.props.history.push("/tasks/new"));
    }
}




updateExistingTask = evt => {
    evt.preventDefault()

const ExistingTask = {
    task: this.state.task,
    completionDate: this.state.completionDate
}
this.props.updateTask(this.props.match.params.taskId, ExistingTask)
.then(() => this.props.history.push("/tasks/new"))
}
componentDidMount() {

    TaskManager.get(this.props.match.params.taskId)
    .then(tasks => {
    this.setState({

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
                <label htmlFor="task">Task:</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="Task" 
                  value = {this.state.tasks} />
            </div>
            <div className="form-group">
                <label htmlFor="complete">Completion date:</label>
                <input type="text" required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="complete" 
                  value={this.state.completionDate} />
            </div>
            
            
            <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
        </form>
    </React.Fragment>

    )
}
}