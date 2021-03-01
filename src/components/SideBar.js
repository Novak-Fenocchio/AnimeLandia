import React from 'react'
import { useState, useEffect } from "react";

function SideBar() {

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
  

    return (
        <aside>
            <nav>
                <h1>Top Anime</h1>
                {topAnime.map(anime =>(
                    <div key={anime.mal_id}>
                        <a
                        href={anime.url}
                        target='_BLANK' 
                        rel='noreferrer'>
                        {anime.title}
                        </a> 
                        <br></br>
                    </div>
                ))}

            </nav>
        </aside>
    )
}

export default SideBar
