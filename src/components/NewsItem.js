import React from 'react'

const NewsItem =(props)=> {
      let {title, description, imgUrl, newsUrl, author, publishedAt, source} = props;
      return (
    <>
    <div className="card" style={{width: "22em",height:"28rem"}}> 
    <div style={{display:"flex",justifyContent:"flex-end",position:'absolute',right:'0'}}><span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:"1"}}>
    {source}<span className="visually-hidden">unread messages</span></span></div>
        <img src={imgUrl} className="card-img-top" style={{maxHeight:"195px"}} alt="..."/>
        <div className="card-body" style={{position:"relative"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{position:"absolute",bottom:"40px"}}><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString().split('GMT')}</small></p>
            <a href={newsUrl} style={{padding:"5px 125px",position:"absolute",bottom:"20px"}} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
    </div>
    </>
    )
}

export default NewsItem