import React from 'react'
import {useState} from "react";

import MainContain from './mainContain';
import NavSearch from './nav';
import SearchEmpty from './searchEmpty';
import Sidebar from './SideBar'
import Header from './header'

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
      <React.Fragment>
      <Sidebar/>
      <div className='container-main'>
        <div className='container-no-aside'> 
        <Header/>

        <div>
             <NavSearch
                handleSearch={handleSearch}
                setSearch={setSearch}
                search={search}
                form={true} actualPage='Buscar'
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
        </div>
        </div>
        </React.Fragment>
    )
}

export default Index;
