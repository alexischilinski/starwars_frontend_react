import React, { Component } from 'react'
import {CardFront} from './CardFront.js'
import {CardBack} from './CardBack.js'

export const FlipCard = (props) => {

    const showFlipCard = () => {
        if(props.character){
            return [<CardBack 
                    character={props.character}
                    species={props.character.species}
                    gender={props.character.gender}
                    planet={props.character.planet}
                    force_sensitive={props.character.force_sensitive}
                    side={props.character.side}
                    role={props.character.role}
                    quote={props.character.quote}
                    movies={props.character.movies}/>,
                    <CardFront character={props.character} name={props.character.name} image={props.character.image}/>
            ]
        } else if(props.movie){
            return [<CardBack
                    movie={props.movie}
                    opening_crawl={props.movie.opening_crawl}
                    episode={props.movie.episode}
                    roman_numeral={props.movie.roman_numeral}
                    // toggleCrawl={props.toggleCrawl}
                    title={props.movie.title}/>,
                    <CardFront
                    movie={props.movie}
                    title={props.movie.title}
                    poster={props.movie.poster}/>
            ]
        } else if(props.planet){
            return [<CardBack
                    planet={props.planet}
                    terrain={props.planet.terrain}
                    climate={props.planet.climate}/>,
                    <CardFront
                    planet={props.planet}
                    name={props.planet.name}
                    image={props.planet.image}/>
            ]
        }
    }

    return (
        <div className="flip-card">
            {showFlipCard()}
        </div>
    )
}