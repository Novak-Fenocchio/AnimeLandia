import React from 'react';
import { useState, useEffect } from "react";

import Header from './components/header';
import SideBar from './components/SideBar';
import MainContain from './components/mainContain';
import NavSearch from './components/nav';

function App ()
{
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults(false);


  const GetTopAnime = async () =>
  {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json());

    setTopAnime(temp.top.slice(0,5));
  }

  useEffect(() => {
    GetTopAnime();
  }, [])

  const handleSearch = e =>
  {
    e.preventDefault();

    FetchAnime(search); 
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
    console.log(temp.results);
    onClick();
  }

    return(
      <React.Fragment>
        <div className='container-main'>
          <SideBar topAnime={topAnime}/>
          <div className='container-no-aside'>
          
              <Header/>
              <NavSearch 
                handleSearch={handleSearch}
                setSearch={setSearch}
                search={search}
              />          

              {showResults ?  
                <div className='searchEmptyContainer'>
                  <div>
                    <span className='searchEmpty searchEmptyLogo'>&lt;/&gt;</span> 
                    <br></br>
                    <span className='searchEmpty searchEmptyText'>Buscá algo! Naruto esta esperándote.</span>
                  </div>
                </div>
              :null}
          
              <MainContain 
                search={search}
                setSearch={setSearch}
                animeList={animeList}
                animeList={animeList}
              />
          </div>
        </div>
      </React.Fragment>
    );   
}

export default App;

