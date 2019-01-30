import React, { Component } from 'react'


class NewsList extends Component {
    render() {
        console.log(this.props.news)
        return (
            <section className="news">
            {
                this.props.news.map(news =>
                    <div key={news.id}>
                        <h2>{news.newsTitle}</h2>
                        <p>{news.synopsis}</p>
                        <p>{news.url}</p>
                        <a href="#"
                         onClick={() => this.props.deleteArticle(news.id)}
                         className="card-link">Delete Article</a>
                    </div>
                    
                )
            }
            </section>
        )
    }
}

export default NewsList