import React from 'react'

function mainContain(props) {
    return (
        <main>
           <section>
                <div className='container-episodies'>
                {props.animeList.map(anime =>(
                    <a key={anime.mal_id} href={anime.url} target='blank'>
                        <article className='episodie'>
                            <img src={anime.image_url}/>
                            <h2 className='anime_title'>{anime.title.slice(0,18)}</h2>
                            <h4 className='anime_info anime_episodes'>Episodios: <span> {anime.episodes}</span></h4>
                            <h5 className='anime_info anime_year'>Año: <span> {anime.start_date.slice(0,4)}</span></h5>
                       </article>
                    </a>
                ))}
                    
                </div>
            </section>
        </main>
    )
}

export default mainContain
