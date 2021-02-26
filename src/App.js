import React from 'react';
import { useState, useEffect } from "react";

import Header from './components/header';
import SideBar from './components/SideBar';
import TopAnime from './components/topAnime';

import Index from './components/index.compontent';

function App ()
{
  const [topAnime, setTopAnime] = useState([]);


  const GetTopAnime = async () =>
  {
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(res => res.json());

    setTopAnime(temp.top.slice(0,5));
  }

  useEffect(() => {
    GetTopAnime();
  }, [])

    return(
      <React.Fragment>
        <div className='container-main'>
          <SideBar topAnime={topAnime}/>
          <div className='container-no-aside'>    
              <Header/>
              <Index/>
          </div>
        </div>
      </React.Fragment>
    );   
}

export default App;

