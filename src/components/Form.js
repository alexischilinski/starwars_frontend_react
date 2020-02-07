import React, { Component } from 'react'
import Container from './Container.js'

class Form extends Component{

    state = {
        characters: false,
        planets: false,
        pending: false,
        showPending: false,
        pendingItems: [],
        character: {
            category: "",
            name: "",
            gender: "",
            species: "",
            planet: "",
            side: "",
            image: "",
            best_quote: "",
            lightsaber_color: "",
            role: "",
            sith_name: ""
        },
        planet: {
            category: "",
            name: "",
            climate: "",
            terrain: "",
            image: ""
        }
    }

    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.character !== prevState.character) {
    //         console.log(this.state.character)
    //     this.setState({character: {...this.state.character}})
    //     }
    //   }

    // componentWillMount(){
    //     this.setState({
    //         pendingItems: this.props.pendingItems
    //     })
    // }

    handleClick = (event) =>{
        if(event.target.className === "add-character"){
            this.setState({
                characters: true,
                planets: false,
                character: {
                    category: "character"
                }
            })
        }if(event.target.className === "add-planet"){
            this.setState({
                characters: false,
                planets: true,
                planet: {
                    category: "planet"
                }

            })
        }if(event.target.className === "pending-button"){
            this.setState({
                showPending: !this.state.showPending
            })
        }
    }

    handleChange = (event) => {
        if(this.state.characters){ 
            this.setState({
                character: {
                    ...this.state.character,
                    [event.target.name]: event.target.value
                }
            })
        }else if(this.state.planets){
            this.setState({
                planet: {
                    ...this.state.planet,
                    [event.target.name]: event.target.value
                }
            })
        }
    }

    handleSubmit = (event) => {
        if(this.state.characters){
            event.preventDefault()
            this.props.addCharacter(this.state.character)
            this.setState({
                pending: !this.state.pending
            })
            this.props.addPending(this.state.character)
        } else if(this.state.planets){
            event.preventDefault()
            this.props.addPlanet(this.state.planet)
            this.setState({
                pending: !this.state.pending
            })
            this.props.addPending(this.state.planet)
        }
        this.setState({
            character: {
                name: "",
                gender: "",
                species: "",
                planet: "",
                side: "",
                image: "",
                best_quote: "",
                lightsaber_color: "",
                role: ""
            }
        })
    }

    render(){
        return(
            <div className="add-form">
                <div>
                <button onClick={this.handleClick} className="add-character">Add Character</button>
                <button onClick={this.handleClick} className="add-planet">Add Planet</button>
                </div>
                {this.state.characters ? [
                                    <form onSubmit={this.handleSubmit} className="form char-form">
                                        <input onChange={this.handleChange} className="input category" type="text" name="category" value="character"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="name" placeholder="name" value={this.state.character.name}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="gender" placeholder="gender" value={this.state.character.gender}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="species" placeholder="species" value={this.state.character.species}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="planet" placeholder="homeplanet" value={this.state.character.homeplanet}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="role" placeholder="role (e.g. jedi, sith, pilot, etc...)" value={this.state.character.role}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="side" placeholder="alliance (e.g. empire, rebellion, etc...)" value={this.state.character.side}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="lightsaber" placeholder="lightsaber color (if applicable)" value={this.state.character.lightsaber}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="sith_name" placeholder="sith name (if applicable)" value={this.state.character.sith_name}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="best_quote" placeholder="this character's best quote" value={this.state.character.best_quote}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="image" placeholder="image url (no more than 200 characters)" value={this.state.character.image}></input>
                                        <input className="submit" type="submit" value="Add Character"></input>
                                    </form>
                                    ] : null }
                {this.state.planets ? [
                                    <form onSubmit={this.handleSubmit} className="form char-form">
                                        <input onChange={this.handleChange} className="input category" type="text" name="category" value="planet"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="name" placeholder="name"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="climate" placeholder="climate"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="terrain" placeholder="terrain"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="image" placeholder="image url"></input>
                                        <input className="submit" type="submit" value="Add Planet"></input>
                                    </form>
                ] : null}
                {this.state.pending ?
                <p className="order">Pending approval to be added to database</p> : null}
                <br></br>
                <button onClick={this.handleClick} className="pending-button">Show all pending requests</button>
                {this.state.showPending && this.props.pendingItems.length > 0 ? <Container pendingItems={this.props.pendingItems}/> : null}
                {this.props.pendingItems.length === 0 && this.state.showPending ? <p className="order">There are no pending requests</p> : null}
            </div>
        )
    }
}

export default Form;