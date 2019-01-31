// import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import './Messages.css'

export default class NewMessageForm  extends Component {

    // Set initial state
    state = {
        person_sending_the_message: "",
        message: "",
        // person_receiving_the_message: "",
        date: new Date().toISOString()
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        console.log("evt", evt.target.value)
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        // console.log("constructNewMessage Function executed")
        evt.preventDefault()
        console.log("this.state :", this.state)
        this.props.addMessage(this.state)
        .then( () => this.props.history.push("/messages"))
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

            <React.Fragment>
                <form className="newMessageForm-v1">

                    <div className="form-group">
                        <label htmlFor="person_sending_the_message">From</label>
                        <select defaultValue="" name="person_sending_the_message" id="person_sending_the_message"
                                onChange={this.handleFieldChange}>
                            <option value="">(select user)</option>
                        {
                            this.props.users.map(e => <option key={e.id} id={e.id}>{e.username}</option>)
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">New Message</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="message" placeholder="What's on your mind today?" />
                    </div>

                <br />
                <button
                    type="submit"
                    className="btn btn-primary"
                    id="NewMessage"
                    onClick={this.constructNewMessage}
                    >Add a new message
                </button>

                </form>
            </React.Fragment>
        )
    }
}
