import React from 'react'
import {useState} from "react";

import MainContain from './mainContain';
import NavSearch from './nav';
import SearchEmpty from './searchEmpty';

function Index() {

  const [animeList, SetAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  let [searchAnimeTitle, SetSearchAnimeTitle] = useState('');
  let [searchEmpty, SetSearchEmpty] = useState(true);

  const handleSearch = e =>
  {
    e.preventDefault();
    
    const changeAnime = () => SetSearchAnimeTitle(search);
    changeAnime();
    FetchAnime(search); 
  }

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


    return (
        <div>
             <NavSearch
                handleSearch={handleSearch}
                setSearch={setSearch}
                search={search}
                form={true}
              />
            {searchEmpty &&
             <SearchEmpty/>
            }
            {searchEmpty == false &&
            <MainContain 
                search={search}
                setSearch={setSearch}
                animeList={animeList}
                searchAnimeTitle={searchAnimeTitle}
              />
            }   
        </div>
    )
}

export default Index;
