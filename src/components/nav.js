import React from 'react'
import { useState, useEffect } from "react";

function NavSearch(props) {

    let [Inicio,SetInicio] = useState(false);
    let [TopManga,SetTopManga] = useState(false);
    let [TopAnime,SetTopAnime] = useState(false);
    let [Buscar,SetBuscar] = useState(false);
    let [Categorias,SetCategorias] = useState(false);

    const getActualPage = () =>
    {
        switch (props.actualPage) {
            case 'TopManga':
                SetTopManga(true);
                break;
            case 'TopAnime':
                    SetTopAnime(true);
                    break;
            case 'Buscar':
                SetBuscar(true);
                break;
            case 'Categorias':
                SetCategorias(true);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        getActualPage();
      }, [])

    return (
        <main>
            <div className='container-nav'>
                <nav className='nav-items'>

                {Inicio &&
                 <a href='/' ><span className='nav-item actualPage' id='1'>Inicio</span></a>
                }
                {Inicio == false &&
                 <a href='/' ><span className='nav-item' id='1'>Inicio</span></a>
                }
                {TopAnime &&
                 <a href='top-anime' ><span className='nav-item actualPage' id='2'> Top anime </span></a>
                }
                {TopAnime == false &&
                 <a href='top-anime' ><span className='nav-item' id='2'> Top anime </span></a>
                }

                {TopManga &&
                 <a href='top-manga' ><span className='nav-item actualPage' id='3'> Top manga </span></a>
                }
                {TopManga == false &&
                 <a href='top-manga' ><span className='nav-item' id='3'> Top manga </span></a>
                }
                {Categorias &&
                 <a href='categorias' ><span className='nav-item actualPage' id='4'> Categorías </span></a>
                }
                {Categorias == false &&
                 <a href='categorias' ><span className='nav-item' id='4'> Categorías </span></a>
                }
                {Buscar &&
                 <a href='buscar' ><span className='nav-item actualPage' id='5'> Buscar </span></a>
                }
                {Buscar == false &&
                 <a href='buscar' ><span className='nav-item' id='5'> Buscar </span></a>
                }
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
