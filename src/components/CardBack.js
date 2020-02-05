import React, { Component } from 'react'

export const CardBack = (props) => {

    // const handleClick = (crawl) => {
    //     props.toggleCrawl(crawl)
    // }

    const aToZMovie = (a, b) => {
        if (a.episode < b.episode){return -1}
        else if (a.episode > b.episode){return 1}
        else {return 0}
    }

    const showBack = () => {
        if(props.character){
            const charMovies = props.movies.sort(aToZMovie).map(movie=>{
                return <p>{movie.title} (Episode {movie.roman_numeral})</p>
                })


            return <div className="card-back">
                        <div className="char-info">
                            <br></br>
                            <p>Home Planet: {props.planet}</p>
                            <p>Species: {props.species}</p>
                            <p>Gender: {props.gender}</p>
                            <br></br>
                            {props.side !== "none" ? <p>Who I side with: {props.side}</p> : null}
                            <p>My role: {props.role}</p>
                            <br></br>
                            <h2 className="movies">Movies:</h2>
                            {charMovies}
                            <br></br>
                            {props.quote !== null ? <h2 className="quote">"{props.quote}"</h2> : null}
                        </div>
                    </div>
        } else if(props.movie){
            return <div className="card-back">
                        <div className="crawl-div">
                            <br></br>
                            <p>{props.title.toUpperCase()}</p>
                            <br></br>
                            <p>EPISODE {props.roman_numeral}</p>
                            <br></br>
                            {/* <button className="crawl-button">Opening Crawl:</button> */}
                            <p className="openingcrawl-p" dangerouslySetInnerHTML={{__html: props.opening_crawl}}></p>          
                        </div>
                    </div>
        } else if(props.planet){
            return <div className="card-back">
                    <div className="planet-info">
                        <br></br>
                        <p>Terrain: {props.terrain}</p>
                        <p>Climate: {props.climate}</p>
                    </div>
                    </div>
        }
    }

    return (
        <>
        {showBack()}
        </>
    )
}