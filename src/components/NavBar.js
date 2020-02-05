import React, { Component} from 'react'

export const NavBar = ({showCharacters, showMovies, showPlanets}) => {

    const handleClick = (event) => {
        if(event.target.className === "character-button"){
            showCharacters()
        } else if(event.target.className === "movie-button"){
            showMovies()
        } else if(event.target.className === "planet-button"){
            showPlanets()
        }
    }


    return (
        <div className="navbar">
            <button onClick={handleClick} className="character-button">Characters</button>
            <button onClick={handleClick} className="movie-button">Movies</button>
            <button onClick={handleClick} className="planet-button">Planets</button>
        </div>
    )
}