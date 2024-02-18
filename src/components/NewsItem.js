import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imgUrl, newsUrl, author, publishedAt, source} = this.props;
      return (
    <>
    <div className="card" style={{width: "22em",height:"28rem"}}> 
    <div style={{display:"flex",justifyContent:"flex-end",position:'absolute',right:'0'}}><span class="badge rounded-pill bg-danger" style={{left:'90%',zIndex:"1"}}>
    {source}<span class="visually-hidden">unread messages</span></span></div>
        <img src={imgUrl} className="card-img-top" style={{maxHeight:"195px"}} alt="..."/>
        <div className="card-body" style={{position:"relative"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text" style={{position:"absolute",bottom:"40px"}}><small class="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString().split('GMT')}</small></p>
            <a href={newsUrl} style={{padding:"5px 125px",position:"absolute",bottom:"20px"}} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
    </div>
    </>
    )
  }
}

export default NewsItem