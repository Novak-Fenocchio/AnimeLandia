import React from 'react'

import topAnime from './topAnime';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function NavSearch(props) {
    return (
            <Router>
        <main>
            <div className='container-nav'>
                <nav className='nav-items'>

                        <Switch>
                           <Route path='/top' component={topAnime}/>
                        </Switch>

                    <span> Inicio </span>
                    <span> Top anime </span>
                    <span> Contacto </span>
                    <span> Buscar </span>
                </nav>
                <form onSubmit={props.handleSearch}>
                    <input type='search' placeholder='Buscar un anime...' required
                        value={props.search} 
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>
        </main>
            </Router>
    )
}


export default NavSearch
