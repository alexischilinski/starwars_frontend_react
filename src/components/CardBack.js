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
            return <div className="card-back">
                        <div className="char-info">
                            <br></br>
                            <p>Home Planet: {props.planet}</p>
                            <p>Species: {props.species}</p>
                            <p>Gender: {props.gender}</p>
                            <br></br>
                            {props.side !== "none" ? <p>My alliance(s): {props.side}</p> : null}
                            <p>My role: {props.role}</p>
                            <br></br>
                            {props.movies ? [<h2 className="movies">Movies:</h2>,
                                            props.movies.sort(aToZMovie).map(movie=>{
                                            return <p>{movie.title} (Episode {movie.roman_numeral})</p>
                                            })] : null }
                            <br></br>
                            {props.quote ? <h2 className="quote">"{props.quote}"</h2> : null}
                        </div>
                    </div>
        } else if(props.movie){
            return <div className="card-back">
                    <div className={props.isFlipped ? "fade" : null}></div>
                        <div className={props.isFlipped ? "crawl-effect" : "no-display"}>
                            <br></br>
                            <p>{props.title.toUpperCase()}</p>
                            <br></br>
                            <p>EPISODE {props.roman_numeral}</p>
                            <br></br>
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
        // } else if(props.species){
        //     return <div className="card-back">
        //             <div className="char-info">
        //                 <br></br>
        //                 <p>Home Planet: {props.planet}</p>
        //                 <p>Species: {props.species}</p>
        //                 <p>Gender: {props.gender}</p>
        //                 <br></br>
        //                 {props.side !== "none" ? <p>Who I side with: {props.side}</p> : null}
        //                 <p>My role: {props.role}</p>
        //                 <br></br>
        //                 {props.quote !== null ? <h2 className="quote">"{props.quote}"</h2> : null}
        //             </div>
        //         </div>
        }
        else if(props.animal){
            return <div className="card-back">
            <div className="animal-info">
                <br></br>
                <p>Classification: {props.classification}</p>
                <p>Habitat: {props.habitat}</p>
                <p>Diet: {props.diet}</p>
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