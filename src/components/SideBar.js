import React from 'react'

function SideBar({topAnime}) {
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
