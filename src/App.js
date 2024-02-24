import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App =() => {
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  //const apiKey = "69e58ca2fb8349528f087079c7145bff"
  const [progress, setProgress] = useState(0)

    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/Business' element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country={'us'} apiKey={apiKey} category={"Business"}/>}></Route>
        <Route exact path='/Entertainment' element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country={'us'} category={"Entertainment"}/>}></Route>
        <Route exact path='/General' element={<News setProgress={setProgress} key="General" pageSize={pageSize} country={'us'} category={"General"}/>}></Route>
        <Route exact path='/Health' element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country={'us'} category={"Health"}/>}></Route>
        <Route exact path='/Science' element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country={'us'} category={"Science"}/>}></Route>
        <Route exact path='/Sports' element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country={'us'} category={"Sports"}/>}></Route>
        <Route exact path='/Technology' element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country={'us'} category={"Technology"}/>}></Route>
      </Routes>
      </Router>
      </>
    )
}

export default App;


