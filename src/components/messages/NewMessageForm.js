// import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'


export default class NewMessageForm  extends Component {

    // Set initial state
    state = {
        to: "",
        message: "",
        userId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        // evt.preventDefault()
        this.props.addMessage()

        // const credentials = JSON.parse(localStorage.getItem('credentials'))
        // const messages = {
        //     "bloop"
            // id: this.state.messageId,
            // to: this.state.messageTo,
            // message: this.state.message,
            // date: new Date().toISOString(),
            // userId: credentials.id
        // }

        // this.props.addMessage(messages)
        // .then(() => this.props.history.push("/messages"))
    }


    render() {
        return (
        <div>BIG DIV - encapsulates 2 divs: Grady's way and Kennel-way
            <div className="newMessageForm-v1">
                <h3>New Messages Form Goes here:</h3>
                <h3>input field goes here</h3>
                <h3>input field goes here</h3>
                <button
                    id="NewMessage"
                    onClick={() => {
                    console.log("new Message button clicked")
                    this.constructNewMessage()
                    this.props.history.push("/messages/")
                    }}>Add a new message
                </button>
            </div>
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to user</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.users.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        </div>
        )
    }
}
