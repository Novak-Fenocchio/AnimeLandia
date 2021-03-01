import React from 'react'

function NavSearch(props) {
    return (
        <main>
            <div className='container-nav'>
                <nav className='nav-items'>

                 <a href='/'><span>Inicio</span></a>
                 <a href='top-anime'><span> Top anime </span></a>
                 <a href='top-manga'><span> Top manga </span></a>
                 <a href='categorias'><span> Categorías </span></a>
                 <a href='buscar'><span> Buscar </span></a>
                </nav>

                {props.form == true &&
                <form onSubmit={props.handleSearch}>
                    <input type='search' placeholder='Buscar un anime...' required
                        value={props.search} 
                        onChange={e => {
                            props.setSearch(e.target.value);
                        }}
                    />
                </form>
                }
                </div>
        </main>
    )
}


export default NavSearch
