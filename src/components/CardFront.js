import React, { Component } from 'react'

export const CardFront = (props) => {

    const handleClick = (event) => {
        if(event.target.className === "delete-button"){
            props.buttonAction(event, "delete-button")
        } else if(event.target.className === "update-button"){
            props.buttonAction(event, "update-button")
        }
    }

    const showFront = () => {
        if(props.character){
            if(props.pendingItem){
                return [<h2 className="card-header">{props.name}</h2>,
                <img className="character-image" src={props.image}/>,
                <div>
                <button onClick={handleClick} className="delete-button">Delete</button>
                {/* <button onClick={handleClick} className="update-button">Update</button> */}
                </div>]
            }else{
            return [<h2 className="card-header">{props.name}</h2>,
                <img className="character-image" src={props.image}/>]
            }
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
        } else if(props.pendingChar){
            return [<h2 className="card-header">{props.name}</h2>,
            <img className="character-image" src={props.image}/>]
        } else if(props.animal){
            return [<h2 className="card-header">{props.name}</h2>,
            <img className="animal-image" src={props.image}/>]
        }
    }

    return (
        <div className="card-front">
            {showFront()}
        </div>
    )
}