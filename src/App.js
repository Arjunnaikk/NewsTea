import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 6
  apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "69e58ca2fb8349528f087079c7145bff"
  state ={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/Business' element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country={'us'} apiKey={this.apiKey} category={"Business"}/>}></Route>
        <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country={'us'} category={"Entertainment"}/>}></Route>
        <Route exact path='/General' element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country={'us'} category={"General"}/>}></Route>
        <Route exact path='/Health' element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country={'us'} category={"Health"}/>}></Route>
        <Route exact path='/Science' element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country={'us'} category={"Science"}/>}></Route>
        <Route exact path='/Sports' element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country={'us'} category={"Sports"}/>}></Route>
        <Route exact path='/Technology' element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country={'us'} category={"Technology"}/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}



