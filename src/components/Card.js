import React, { Component } from 'react'
import {CardFront} from './CardFront.js'
import {CardBack} from './CardBack.js'
import {FlipCard} from './FlipCard.js'

export const Card = (props) => {

    const showCard = () => {
        if(props.character){
            return <FlipCard character={props.character}/>
        } else if(props.movie){
            return <FlipCard movie={props.movie} toggleCrawl={props.toggleCrawl}/>
        } else if(props.planet){
            return <FlipCard planet={props.planet} />
        }
    }

    return(
        <div className="character-card">
            {showCard()}
        </div>
    )
}