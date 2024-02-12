import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imgUrl, newsUrl} = this.props;
      return (
    <>
    <div className="card" style={{width: "22em",height:"26rem"}}>
        <img src={imgUrl} className="card-img-top" style={{maxHeight:"195px"}} alt="..."/>
        <div className="card-body" style={{position:"relative"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} style={{padding:"5px 125px",position:"absolute",bottom:"20px"}} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
    </div>
    </>
    )
  }
}

export default NewsItem