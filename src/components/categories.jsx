import React, { Component } from 'react'
import Nav from './nav'; 
import Sidebar from './SideBar'
import Header from './header'

export class Categories extends Component {

    constructor()
    {
      super();
      this.state = {
        AnimeCategory : [],
        AnimeCategory2 : [],
        AnimeCategory3 : []
      }
    }
    getCategories = async () =>
    {
            const temp = await fetch('https://api.jikan.moe/v3/genre/anime/1/1')
            .then(res => res.json())
            this.setState({AnimeCategory : temp.anime.slice(0,10)});
            console.log(this.state.AnimeCategory[1]);

            const temp2 = await fetch('https://api.jikan.moe/v3/genre/anime/7/1')
            .then(res => res.json())
            this.setState({AnimeCategory2 : temp2.anime.slice(0,10)});
            console.log(this.state.AnimeCategory2[1]);

            const temp3 = await fetch('https://api.jikan.moe/v3/genre/anime/26/1')
            .then(res => res.json())
            this.setState({AnimeCategory3 : temp3.anime.slice(0,10)});
            console.log(this.state.AnimeCategory3[1]);
    }

    componentDidMount()
    {
        this.getCategories();
    }

    render() {

        return (
            <React.Fragment>
              <Sidebar/>
            <div className='container-main'>
                <div className='container-no-aside'> 
                <Header/>
   
                <Nav form={false}/>
                <section className='section-episodies-horizontal'>            
                
                    <div className='container-episodies-horizontal'>
                        <h1>Animes de acción</h1>
                        <div className="grid-episodies-horizontal">
                        {this.state.AnimeCategory.map(anime =>(
                            <a href={anime.url} target='blank'>
                            <article className='episodie-horizontal'>
                                <img src={anime.image_url}/>
                            </article>
                            </a>
                        ))}
                        </div>
                </div>

                <div className='container-episodies-horizontal categoryRomance'>
                    <h1>Animes de romance</h1>
                        <div className="grid-episodies-horizontal">
                        {this.state.AnimeCategory3.map(anime =>(
                        <a href={anime.url} target='blank'>
                            <article className='episodie-horizontal'>
                            <img src={anime.image_url}/>
                            </article>
                        </a>
                        ))}
                        </div>
                </div>

                <div className='container-episodies-horizontal'>
                        <h1>Animes de drama</h1>
                        <div className="grid-episodies-horizontal">
                        {this.state.AnimeCategory2.map(anime =>(
                        <a href={anime.url} target='blank'>
                            <article className='episodie-horizontal'>
                            <img src={anime.image_url}/>
                            </article>
                        </a>
                        ))}
                        </div>
                </div>


                </section>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Categories
