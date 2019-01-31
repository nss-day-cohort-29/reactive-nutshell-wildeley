import React, { Component } from 'react'


class NewsList extends Component {
    render() {
        console.log(this.props.news)

        //  let dateDecendingOrder =this.props.new.date.sort(function(a,b){
        //     return new Date(b.date) - new Date(a.date)
     
        //      })
        return (
            <React.Fragment>
                <div className="list">
                <div className="articleButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/new")}
                            }>
                        Add Article
                    </button>
                </div>
            <section className="news">
            {
                this.props.news.map(news =>
                    <div className = "eachListDiv"key={news.id}>
                        <h3><i>{news.newsTitle}</i></h3>
                        <p><b>{news.synopsis}</b></p>
                        <a href="#">{news.url}</a>
                        <h5><i>{news.date}</i></h5>
                        <a href="#"
                         onClick={() => this.props.deleteArticle(news.id)}
                         className="card-link">Delete Article</a>
                    </div>
                    
                )
            }
            </section>
            </div>
            </React.Fragment>
        )
    }
}

export default NewsList