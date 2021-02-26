import React from 'react'

function NavSearch(props) {
    console.log('aaa' + props.form);
    return (
        <main>
            <div className='container-nav'>
                <nav className='nav-items'>

                 <a href='/'><span>Inicio</span></a>
                 <a href='top'><span> Top anime </span></a>
                    <span> Contacto </span>
                    <span> Buscar </span>
                </nav>

                {props.form == true &&
                <form onSubmit={props.handleSearch}>
                    <input type='search' placeholder='Buscar un anime...' required
                        value={props.search} 
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
                }
                </div>
        </main>
    )
}


export default NavSearch
