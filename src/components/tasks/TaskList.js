import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TaskList extends Component {
    render() {
        return (
            <section className="tasks">
                {/* this .map loops through the list of tasks*/}
                {this.props.tasks.map(tasks => (
                    <div key={tasks.userId} className="card card_tasks">
                        <div className="card_body">
                            <h5 className="card_title">
                                {tasks.task} 
                            </h5>
                            <p>{tasks.completionDate}</p>
                            <Link className="nav-link" to={`/tasks/${tasks.id}/edit`}>Edit</Link>
                        </div>
                    </div>
                ))}
            </section>

        );

    }
}