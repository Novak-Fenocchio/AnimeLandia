import React from 'react'

class SearchEmpty extends React.Component {
    render() {
        return (
            <div className='searchEmptyContainer'>
                <div>
                    <span className='searchEmpty searchEmptyLogo'>&lt;/&gt;</span> <br></br>
                    <span className='searchEmpty'>Busca un anime, Naruto esta esperándote.</span>
                </div>
            </div>
        )
    }
}

export default SearchEmpty
