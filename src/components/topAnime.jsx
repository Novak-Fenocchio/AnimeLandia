import React from 'react';
import { useState, useEffect } from "react";

import Nav from './nav';
import Sidebar from './SideBar'
import Header from './header'

function TopAnime() {

    const [TopAnime, setTopAnime] = useState([]);

    const GetTopAnime = async () =>
    {
      const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json());
  
      setTopAnime(temp.top.slice(0,15));
    }
  
    useEffect(() => {
      GetTopAnime();
    }, [])

    console.log(TopAnime);

    return (
      <React.Fragment>
      <Sidebar/>
      <div className='container-main'>
        <div className='container-no-aside'> 
        <Header/>

        <Nav form={false}/>
      <h1 className='title-component'>Tops anime:</h1>
      <div className='container-episodies'>
              {TopAnime.map(anime =>(
                      <article className='episodie'>
                          <img src={anime.image_url}/>
                          <h2 className='anime_title'>{anime.title.slice(0,18)}</h2>
                          <h4 className='anime_info anime_episodes'>Episodios: <span> {anime.episodes}</span></h4>
                          <h5 className='anime_info anime_year'>Año: <span> {anime.start_date.slice(0,8)}</span></h5>
                          <div className='container-btn'>
                          <a key={anime.mal_id} href={anime.url} target='blank'>
                              <button className='verAnimeBtn'>Ver Anime</button>
                          </a>
                          </div>
                     </article>
              ))}
      </div>
      </div>
      </div>
      </React.Fragment>
    )
}

export default TopAnime
