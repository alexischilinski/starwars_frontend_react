import React, { Component } from 'react'
import Card from './Card.js'
import {Search} from './Search.js'
import Quiz from './Quiz.js'

class Container extends Component{

    state = {
        characters: [],
        searchTerm: "",
        movies: [],
        planets: [],
        animals: [],
        pendingItems: [],
        quizItems: []
        // correct_answer: []
    }

    componentDidMount = () => {
        if(this.props.characters){
            this.setState({
                characters: this.props.characters,
                movies: [],
                planets: [],
                animals: [],
                pendingItems: []
            })
        } else if(this.props.movies){
            this.setState({
                movies: this.props.movies,
                characters: [],
                planets: [],
                animals: [],
                pendingItems: []
            })
        } else if(this.props.planets){
            this.setState({
                planets: this.props.planets,
                movies: [],
                characters: [],
                animals: [],
                pendingItems: []
            })
        }else if(this.props.pendingItems){
            this.setState({
                pendingItems: this.props.pendingItems,
                movies: [],
                planets: [],
                animals: [],
                characters: []
            })
        }else if(this.props.animals){
            this.setState({
                animals: this.props.animals,
                movies: [],
                planets: [],
                characters: [],
                pendingItems: []
            })
        }else if(this.props.quizcharacters){
            this.setState({
                characters: [],
                movies: [],
                planets: [],
                animals: [],
                pendingItems: [],
                quizItems: this.props.quizcharacters,
                correct_answer: this.props.quizcharacters[0]
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
        } else if(this.props.animals){
            return this.state.animals.filter(animal=>{
                return animal.name.toLowerCase().includes(this.state.searchTerm)
            })
        }
    }

    aToZName = (a, b) => {
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
            return this.filterCards().sort(this.aToZName).map(character=>{
                return (<Card character={character}/>)
            })
        } else if(this.props.movies){
            return this.filterCards().sort(this.aToZMovie).map(movie=>{
                return <Card movie={movie} toggleCrawl={this.props.toggleCrawl}/>
            })
        } else if(this.props.planets){
            return this.filterCards().sort(this.aToZName).map(planet=>{
                if(planet.image !== null){
                    return <Card planet={planet}/>
                }
            })
        } else if(this.props.pendingItems){
            return this.props.pendingItems.map(item=>{
                return <Card pendingItem={item} />
            })
        }else if(this.props.animals){
            return this.filterCards().sort(this.aToZName).map(animal=>{
                return <Card animal={animal}/>
            })
        }else if(this.props.quizcharacters){
            return <Quiz quizItems={this.props.quizcharacters} showPrompt={this.props.showPrompt}/>
        }
    }

    handleClick = () => {
        return this.props.showPrompt()
    }

    shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex
        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
    
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }

    render() {
        return (
            <div>
                {this.props.characters ? [<Search characters={this.props.characters} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Click a card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                {this.props.movies ? [<Search movies={this.props.movies} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Click a card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                {this.props.planets ? [<Search planets={this.props.planets} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Click a card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                {this.props.animals ? [<Search animals={this.props.animals} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>,
                                            <br></br>,
                                            <p className="instructions">(Click a card to view more information)</p>,
                                            <button onClick={this.handleClick} className="back">Go Back</button>] : null}
                <div className="character-container">
                    {this.showContainer()}
                </div>
                {this.props.movies ? [
                                <p className="order">Haven't watched a single Star Wars movie? Here's the best order to watch the episodes: </p>,
                                <p className="order">IV, V, VI, I, II, III, VII, VIII, IX</p>
                                ] : null}
            </div>
        )
    }
}

export default Container;