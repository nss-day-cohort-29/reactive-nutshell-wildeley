import React, { Component } from "react"
import NewsManager from "./NewsManager"

export default class NewsForm extends Component {
    // Set initial state
    state = {
      newsId:"",
      newsTitle: "",
      synopsis: "",
      url: ""
    }
    


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingStudent = evt => {
      evt.preventDefault()

      const existingNews = {
        newsId: this.state.newsId,
        newsTitle: this.state.newsTitle,
        synopsis: this.state.synopsis,
        url:this.state.url
      }

    
    this.props.updateNews(this.props.match.params.newsId,existingNews)
    .then(() => this.props.history.push("/news"))      
    }

    // componentDidMount() {
    //   NewsManager.get(this.props.match.params.newsId)
    //   .then(student => {
    //     this.setState({
    //       firstName: student.firstName,
    //       lastName: student.lastName,
    //       notes: student.notes
    //     });
    //   });
    // }


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
                     onClick={this.updateExistingStudent} className="btn btn-primary">
                     Submit</button>
                </form>
            </React.Fragment>
        )
    }
}