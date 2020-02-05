import React, { Component } from 'react'

export const CardFront = (props) => {

    const showFront = () => {
        if(props.character){
            return [<h2 className="card-header">{props.name}</h2>,
                <img className="character-image" src={props.image}/>]
        } else if (props.movie){
            return [
                <h2 className="card-header">{props.title}</h2>,
                <img className="movie-image" src={props.poster}/>
            ]
        } else if (props.planet){
            return [
                <h2 className="card-header">{props.name}</h2>,
                <img className="planet-image" src={props.image}></img>
            ]
        }
    }

    return (
        <div className="card-front">
            {showFront()}
        </div>
    )
}