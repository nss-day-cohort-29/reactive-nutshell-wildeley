// import React, { Component } from "react"
// import { Link } from "react-router-dom"

// export default class TaskCard extends Component {

//     state = {
//         complete: true
//     }
//     handleChange = () => {
//         this.setState({
//             complete: !this.setState.complete
//         })
//         this.putChecked();
//     }
//     putChecked =() => {
//         const task = {
//             userId: this.props.tasks.userId,
//             task: this.props.tasks.task,
//             CompletionDate: this.props.tasks.CompletionDate,
//             complete: this.state.complete

//         }
//         this.props.putTask(this.props.tasks.id,task)
//             .then(()=> this.props.history.push("/tasks"))
//     }
//     showChecked = () => {
//         let sessionId = sessionStorage.getItem("User")
//         if (this.state.complete === true && this.props.tasks.userId === Number(sessionId))
//         {
//             return (
//                 <div>
//                     <h4>{this.props.tasks.task}</h4>
//                     <p>Completion Date: {this.props.tasks.expectedCompletionDate}</p>
//                     <p>Complete <input type="checkbox" onChange={this.handleChange} id={this.props.tasks.id}/></p>
//                     <Link to={`/tasks/${this.props.tasks.id}/edit`}>Edit</Link>
//                     </div>
//                     )
//         }
//  }

// render() {
//     return (
//         <div>
//             {this.showChecked()}
//         </div>
//     )
// }
// }