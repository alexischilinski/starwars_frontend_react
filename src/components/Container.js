import React, { Component } from 'react'
import {Card} from './Card.js'
import {Search} from './Search.js'

class Container extends Component{

    state = {
        characters: [],
        searchTerm: "",
        movies: [],
        planets: []
    }

    componentDidMount = () => {
        if(this.props.characters){
            this.setState({
                characters: this.props.characters,
                movies: []
            })
        } else if(this.props.movies){
            this.setState({
                characters: [],
                movies: this.props.movies
            })
        } else if(this.props.planets){
            this.setState({
                characters: [],
                movies: [],
                planets: this.props.planets
            })
        }
    }

    updateSearchTerm = (term) => {
        this.setState({
          searchTerm: term
        })
      }

    filterCards = () => {
        if(this.props.characters){
            return this.state.characters.filter(character=>{
                return (
                    character.name.toLowerCase().includes(this.state.searchTerm) ||
                    character.role.toLowerCase().includes(this.state.searchTerm) ||
                    character.gender.toLowerCase().includes(this.state.searchTerm) ||
                    character.species.toLowerCase().includes(this.state.searchTerm)
                )
            })
        } else if(this.props.movies){
            return this.state.movies.filter(movie=>{
                return (
                    movie.title.toLowerCase().includes(this.state.searchTerm) ||
                    movie.episode == this.state.searchTerm
                )
            })
        } else if(this.props.planets){
            return this.state.planets.filter(planet=>{
                return planet.name.toLowerCase().includes(this.state.searchTerm)
            })
        }
    }

    aToZChar = (a, b) => {
        if (a.name < b.name){return -1}
        else if (a.name > b.name){return 1}
        else {return 0}
    }

    aToZMovie = (a, b) => {
        if (a.episode < b.episode){return -1}
        else if (a.episode > b.episode){return 1}
        else {return 0}
    }

    aToZPlanet = (a, b) => {
        if (a.name < b.name){return -1}
        else if (a.name > b.name){return 1}
        else {return 0}
    }

    showContainer = () => {
        if(this.props.characters){
            return this.filterCards().sort(this.aToZChar).map(character=>{
                return (<Card character={character}/>)
            })
        } else if(this.props.movies){
            return this.filterCards().sort(this.aToZMovie).map(movie=>{
                return <Card movie={movie} toggleCrawl={this.props.toggleCrawl}/>
            })
        } else if(this.props.planets){
            return this.filterCards().sort(this.aToZPlanet).map(planet=>{
                if(planet.image !== null){
                    return <Card planet={planet}/>
                }
            })
        }
    }

    handleClick = () => {
        return this.props.showPrompt()
    }

    render() {
        return (
            <div>
                {this.props.characters ? [<Search characters={this.props.characters} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Hover over each card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                {this.props.movies ? [<Search movies={this.props.movies} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Hover over each card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                {this.props.planets ? [<Search planets={this.props.planets} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Hover over each card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                <div className="character-container">
                    {this.showContainer()}
                </div>
            </div>
        )
    }
}

export default Container;