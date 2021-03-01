import React from 'react';
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TopManga from './components/topManga';
import TopAnime from './components/topAnime';
import Categories from './components/categories';
import Dashboard from './components/dashboard'
import Index from './components/index.compontent';

function App ()
{
    const [topAnime, setTopAnime] = useState([]);

    const GetTopAnime = async () =>
    {
      const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json());

      setTopAnime(temp.top.slice(0,5));
      console.log(topAnime);
    }

    useEffect(() => {
      GetTopAnime();
    }, [])

    return(
      <React.Fragment>             
            <Router>
              <Switch>
                  <Route path='/top-anime'>
                    <TopAnime topAnime={topAnime}/>
                  </Route>
                  <Route path='/categorias'>
                     <Categories/>
                  </Route>
                  <Route path='/top-manga'>
                    <TopManga/>
                  </Route>
                  <Router path='/buscar'><Index/></Router>
                  <Route path='/' exact component={Dashboard}/>
              </Switch>
            </Router>
      </React.Fragment>
    );   
}

export default App;

