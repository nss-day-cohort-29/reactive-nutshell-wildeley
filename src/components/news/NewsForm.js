import React, { Component } from "react"
import NewsManager from "./NewsManager"

export default class NewsForm extends Component {
    // Set initial state
    state = {
      newsTitle: "",
      synopsis: "",
      url: ""
    }
    


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewArticle = evt => {
        evt.preventDefault()
            const article = {
                newsTitle: this.state.newsTitle,
                synopsis: this.state.synopsis,
                url: this.props.url            
            }
            this.props.addArticle(article).then(() => this.props.history.push("/"))
        }
        



    render() {
        return (
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="newsTitle">News Title</label>
                        <input type="text" required
                          className="form-control"
                         onChange={this.handleFieldChange}
                         id="newsTitle" 
                         value = {this.state.newsTitle} 
                     />
                 </div>
                    <div className="form-group">
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="synopsis" 
                          value={this.state.synopsis}
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Url</label>
                        <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="url" 
                          value={this.state.url}
                           />
                    </div>
                    
                    <button type="submit"
                     onClick={this.constructNewArticle} className="btn btn-primary">
                     Submit</button>
                </form>
            </React.Fragment>
        )
    }
}