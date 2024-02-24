import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResult] = useState(0)

    const updatePage =async ()=>{
        props.setProgress(10)
        let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
        props.setProgress(30)
        let data = await fetch(url)
        let parsedData =await data.json()
        props.setProgress(50)
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResult(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

        useEffect(() => {
            document.title = `${props.category} - TeaNews`
            updatePage();
        // rslint-disable-next-line
        }, [])

    const fetchMoreData = async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url)
        let parsedData =await data.json()
        
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults)
    }


        return (
            <>
        
            <h2 className='text-center' style={{marginTop:"70px",fontWeight:"700",fontSize:"40px"}}>NewsTea Top News on {props.category}</h2>
            {loading && <Spinner/>}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}

            loader={<Spinner/>}
        >
            <div className='container'>
            <div className="row">
                {articles.map((element)=>{
                    return <div className="col md-3 my-3" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imgUrl={element.urlToImage?element.urlToImage:"https://sportshub.cbsistatic.com/i/r/2024/02/05/f9cac787-04df-4520-b32b-822e8342f993/thumbnail/1200x675/cf353fa0f098b03f8bfc75f0adedf8d6/getty-patrick-mahomes-chiefs-week-19.jpg"} 
                        newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            </div>
            </InfiniteScroll>
        
        </>
        )
}

News.defaultProps ={
    country:"in",
    pageSize:5,
    category:'general',
    apiKey:"49d2f77b5c724715b793438ec6a6edad"
}

News.propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News