import React, { Component } from 'react'


class NewsList extends Component {
    render() {
        return (
            <section className="news">
            {
                this.props.news.map(news =>
                    <div key={news.id}>
                        <h2>{news.newsTitle}</h2>
                        <p>{news.synopsis}</p>
                        <p>{news.url}</p>
                    </div>
                    
                )
            }
            </section>
        )
    }
}

export default NewsList