import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps ={
        country:"in",
        pageSize:5,
        category:'general',
        apiKey:"49d2f77b5c724715b793438ec6a6edad"
    }

    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    constructor(props){
        super(props);
        
        this.state = {
            articles: [],
            loading: true,
            page:1,
        }
        document.title = `NewsTea - ${this.props.category}`
    }

    async updatePage(){
        this.props.setProgress(10)
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30)
        let data = await fetch(url)
        let parsedData =await data.json()
        this.props.setProgress(50)
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
        this.props.setProgress(100)
    }

    async componentDidMount(){

        this.updatePage();
        
    }

    fetchMoreData = async ()=>{

        this.setState({page:this.state.page + 1})
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData =await data.json()
        this.setState({articles: this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults
        })
    }

    render() {
        return (
            <>
        
            <h2 className='text-center' style={{fontWeight:"700",fontSize:"40px"}}>NewsTea Top News on {this.props.category}</h2>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}

            loader={<Spinner/>}
        >
            <div className='container'>
            <div className="row">
                {this.state.articles.map((element)=>{
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
}

export default News