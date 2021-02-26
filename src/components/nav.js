import React from 'react'

function NavSearch(props) {
    return (
        <main>
            <div className='container-nav'>
                <nav className='nav-items'>
                    <span>Inicio</span>
                    <span>Buscar</span>
                    <span>Top Anime</span>
                    <span>Contacto</span>
                </nav>
                <form onSubmit={props.handleSearch}>
                    <input type='search' placeholder='Buscar un anime...' required
                        value={props.search} 
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>
        </main>
    )
}


export default NavSearch
