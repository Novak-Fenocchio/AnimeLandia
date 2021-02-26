import React from 'react';
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header';
import SideBar from './components/SideBar';
import TopAnime from './components/topAnime';
import Nav from './components/nav';

import Index from './components/index.compontent';

function App ()
{
  const [animeList, SetAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  let [searchAnimeTitle, SetSearchAnimeTitle] = useState('');
  let [searchEmpty, SetSearchEmpty] = useState(true);
  let [pageActual,SetPageActual] = useState('/');


  const [topAnime, setTopAnime] = useState([]);

  const handleSearch = e =>
  {
    e.preventDefault();
    console.log('aa');
    const changeAnime = () => SetSearchAnimeTitle(search);
    changeAnime();
    FetchAnime(search); 
  }

  const GetTopAnime = async () =>
  {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json());

    setTopAnime(temp.top.slice(0,5));
  }

  useEffect(() => {
    GetTopAnime();
  }, [])

  const fillSearch = () =>
  {
      const searchActivate = () => SetSearchEmpty(false);
      searchActivate();
  }

  const FetchAnime = async (query) => 
  {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20}`)
      .then( temp => temp.json());

      if(temp) {
        console.log('success');
        SetAnimeList(temp.results);
      }
      else
      {
        console.log('error');
      }
      fillSearch();
    console.log(temp.results);
  }

    return(
      <React.Fragment>
        <div className='container-main'>
          <SideBar topAnime={topAnime}/>
          <div className='container-no-aside'>    
              <Header/>
             
            <Router>
              <Switch>
                  <Route path='/top'>
                    <TopAnime 
                      topAnime={topAnime}
                    />
                  </Route>
                  <Route path='/' exact component={Index}/>
              </Switch>
            </Router>

          </div>
        </div>
      </React.Fragment>
    );   
}

export default App;

