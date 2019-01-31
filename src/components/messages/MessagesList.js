import React, { Component } from 'react'
// import MessagesCard from './MessagesCard'

class MessagesList extends Component {
    render() {
        console.log(this.props.messages)

        return (
            <div>
            <button id="AddMessage" onClick={() => {console.log("add button clicked")
                            // this.props.addMessage()
                               this.props.history.push("/messages/new")
                            }}>Add a new message</button>
            <section className="messages">
            {
                this.props.messages.map(message =>
                    <div className="message" key={message.id}>
                        <strong>{message.person_sending_the_message} </strong> says: {message.message}
                        <br />
                        <button className="btn btn-primary" id={message.id} onClick={() => {console.log(`edit button # ${message.id} clicked`)}}> Edit this message </button>
                        <br />
                        <button className="btn btn-primary" onClick={() => {
                            console.log(`delete button # ${message.id} clicked`)
                            this.props.deleteMessage(message.id)
                            // this.props.stickMessagesOnDom()
                            }}> Delete this message </button>
                    </div>

                )
            }
            </section>
             </div>
        )
    }
}

export default MessagesList