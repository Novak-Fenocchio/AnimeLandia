import React, { Component } from 'react'

export class Categories extends Component {

    constructor()
    {
      super();
      this.state = {
        AnimeCategory : []
      }
    }
    getCategories = async () =>
    {
            const temp = await fetch('https://api.jikan.moe/v3/genre/anime/1/1')
            .then(res => res.json())
            this.setState({AnimeCategory : temp.anime.slice(0,10)});
            console.log(this.state.AnimeCategory[1]);
    }

    componentDidMount()
    {
        this.getCategories();
    }

    render() {

        return (
            <div className='.container-episodies-horizontal'>
                <ul className='slider'>
                {this.state.AnimeCategory.map(anime =>(
                    <article className='episodie episodie-horizontal'>
                    <img src={anime.image_url}/>
                  </article>
                ))}
                </ul>

            </div>
        )
    }
}

export default Categories
