import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from "react";
import Nav from './nav';

class TopManga extends React.Component() {

    constructor()
    {
      super();
      this.state = {
        TopManga : [],
        AnimeCategory : []
      }
    }

    render(){    
    /*   
    
      const GetTopManga = async () =>
      {
        const temp = await fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity')
        .then(res => res.json())
        this.setState.TopManga(temp.top.slice(0,15));
      }
  
      const GetCategories = async () =>
      {
        const temp = await fetch('https://api.jikan.moe/v3/genre/anime/1/1')
        .then(res => res.json())
    
        this.setState.AnimeCategory(temp.anime.slice(0,10));
      }
     
        GetTopManga();
        GetCategories();
     */
/*       console.log(this.AnimeCategory); */

    return (
      <React.Fragment >
        <Nav
          form={false}
        />
      <div className='container-top-animes'>
      <h1 className='title-component'>Tops manga:</h1>
      <div className='container-episodies-horizontal'>
        <ul className='slider'>
        <h1 className='white'>EEEa</h1>
        </ul>
        
        <ul className="menu">
        <li>
          <a href="#slide1">1</a>
        </li>
        <li>
          <a href="#slide2">2</a>
        </li>
        <li>
          <a href="#slide3">3</a>
        </li>
      </ul>
      </div>
      </div>
      </React.Fragment>
    );
    }

}

export default TopManga
