import React, { Component } from 'react'


class NewsList extends Component {
    render() {
        console.log(this.props.news)
        return (
            <React.Fragment>
                {/* <div className="articleButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/new")}
                            }>
                        Add Article
                    </button>
                </div> */}
            <section className="news">
            {
                this.props.news.map(news =>
                    <div key={news.id}>
                        <h2>{news.newsTitle}</h2>
                        <p>{news.synopsis}</p>
                        <p>{news.url}</p>
                        <p>{news.date}</p>
                        <a href="#"
                         onClick={() => this.props.deleteArticle(news.id)}
                         className="card-link">Delete Article</a>
                    </div>
                    
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

export default NewsList