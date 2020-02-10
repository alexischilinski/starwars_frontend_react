import React, { Component } from 'react'
import Container from './Container.js'

class Form extends Component{

    state = {
        signup: false,
        login: false,
        loggedin: false,
        characters: false,
        planets: false,
        animals: false,
        pending: false,
        showPending: false,
        pendingItems: [],
        character: {
            user: localStorage.getItem('user'),
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
            user: localStorage.getItem('user'),
            category: "",
            name: "",
            climate: "",
            terrain: "",
            image: ""
        },
        animal: {
            user: localStorage.getItem('user'),
            category: "",
            name: "",
            classification: "",
            habitat: "",
            diet: "",
            image: ""
        },
        signingup: {
            username: "",
            email: "",
            password: ""
        },
        loggingin: {
            username: "",
            password: ""
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
                animals: false,
                character: {
                    category: "character"
                }
            })
        }else if(event.target.className === "add-planet"){
            this.setState({
                characters: false,
                planets: true,
                animals: false,
                planet: {
                    category: "planet"
                }

            })
        }else if(event.target.className === "pending-button"){
            this.setState({
                showPending: !this.state.showPending
            })
        }else if(event.target.className === "add-animal"){
            this.setState({
                characters: false,
                planets: false,
                animals: true,
                animal: {
                    category: "animal"
                }
            })
        }else if(event.target.className === "signup"){
            this.setState({
                signup: true,
                login: false,
            })
        }else if(event.target.className === "login"){
            this.setState({
                signup: false,
                login: true
            })
        }else if(event.target.className === "logout"){
            this.props.logOut()
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            this.setState({
                loggedin: false,
                signup: false,
                login: false,
                showPending: false
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
        }else if(this.state.animals){
            this.setState({
                animal: {
                    ...this.state.animal,
                    [event.target.name]: event.target.value
                }
            })
        }else if(this.state.signup){
            this.setState({
                signingup: {
                    ...this.state.signingup,
                    [event.target.name]: event.target.value
                }
            })
        }else if(this.state.login){
            this.setState({
                loggingin: {
                    ...this.state.loggingin,
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
        } else if(this.state.planets){
            event.preventDefault()
            this.props.addPlanet(this.state.planet)
            this.setState({
                pending: !this.state.pending
            })
            this.props.addPending(this.state.planet)
            this.setState({
                planet: {
                    category: "",
                    name: "",
                    climate: "",
                    terrain: "",
                    image: ""
                }
            })
        } else if(this.state.animals){
            event.preventDefault()
            this.props.addAnimal(this.state.animal)
            this.setState({
                pending: !this.state.pending
            })
            this.props.addPending(this.state.animal)
            this.setState({
                animal: {
                    category: "",
                    name: "",
                    classification: "",
                    habitat: "",
                    diet: "",
                    image: ""
                }
            })
        }else if(this.state.signup){
            event.preventDefault()
            this.props.signUp(this.state.signingup)
            this.setState({
                signingup: {
                    username: "",
                    email: "",
                    password: ""
                }
            })
        }else if(this.state.login){
            event.preventDefault()
            this.props.logIn(this.state.loggingin)
            this.setState({
                loggingin: {
                    username: "",
                    password: ""
                }
            })
            this.setState({
                loggedin: true
            })
        }
    }

    render(){
        return(
            <div className="add-form">
                <div>
                    {!this.state.loggedin && !localStorage.token ? [<p className="prompt">Sign up/login to contribute:</p>,
                                        <button onClick={this.handleClick} className="signup">Sign Up</button>,
                                        <button onClick={this.handleClick} className="login">Login</button>]
                                        : null}
                    {this.state.loggedin || localStorage.token ? [<button onClick={this.handleClick} className="add-character">Add Character</button>,
                                        <button onClick={this.handleClick} className="add-planet">Add Planet</button>,
                                        <button onClick={this.handleClick} className="add-animal">Add Animal</button>]
                                        : null}
                
                </div>
                {this.state.signup && !this.state.loggedin ? <form onSubmit={this.handleSubmit} className="signup-form">
                                        <input onChange={this.handleChange} className="credentials" type="text" name="username" value={this.state.signingup.username} placeholder="username"></input>
                                        <input onChange={this.handleChange} className="credentials" type="text" name="email" value={this.state.signingup.email} placeholder="email"></input>
                                        <input onChange={this.handleChange} className="credentials" type="password" name="password" value={this.state.signingup.password} placeholder="password"></input>
                                        <input className="signup" type="submit" value="Sign Up"></input>
                                    </form>
                                    : null}
                {this.state.login && !this.state.loggedin ? <form onSubmit={this.handleSubmit} className="login-form">
                                        <input onChange={this.handleChange} className="credentials" type="text" name="username" value={this.state.loggingin.username} placeholder="username"></input>
                                        <input onChange={this.handleChange} className="credentials" type="password" name="password" value={this.state.loggingin.password} placeholder="password"></input>
                                        <input className="login" type="submit" value="Login"></input>
                                    </form>
                                    : null}
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
                                        <input onChange={this.handleChange} className="input" type="text" name="image" placeholder="image url" value={this.state.character.image}></input>
                                        <input className="submit" type="submit" value="Add Character"></input>
                                    </form>
                                ] : null }
                {this.state.planets ? [
                                    <form onSubmit={this.handleSubmit} className="form char-form">
                                        <input onChange={this.handleChange} className="input category" type="text" name="category" value="planet"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="name" placeholder="name of planet" value={this.state.planet.name}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="climate" placeholder="climate" value={this.state.planet.climate}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="terrain" placeholder="terrain" value={this.state.planet.terrain}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="image" placeholder="image url" value={this.state.planet.image}></input>
                                        <input className="submit" type="submit" value="Add Planet"></input>
                                    </form>
                                ] : null}
                {this.state.animals ? [
                                        <form onSubmit={this.handleSubmit} className="form char-form">
                                        <input onChange={this.handleChange} className="input category" type="text" name="category" value="animal"></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="name" placeholder="name of animal" value={this.state.animal.name}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="classification" placeholder="classification (e.g. mammal, reptile, etc" value={this.state.animal.classification}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="habitat" placeholder="habitat" value={this.state.animal.habitat}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="diet" placeholder="diet" value={this.state.animal.diet}></input>
                                        <input onChange={this.handleChange} className="input" type="text" name="image" placeholder="image url" value={this.state.animal.image}></input>
                                        <input className="submit" type="submit" value="Add Animal"></input>
                                    </form>
                ] : null}
                {this.state.pending ?
                <p className="order">Pending approval to be added to database</p> : null}
                <br></br>
                {this.state.loggedin || localStorage.token ? <button onClick={this.handleClick} className="pending-button">Show all pending requests</button> : null }
                {this.state.showPending && this.props.pendingItems.length > 0 ? <Container pendingItems={this.props.pendingItems}/> : null}
                {this.props.pendingItems.length === 0 && this.state.showPending ? <p className="order">There are no pending requests</p> : null}
                <section>
                {this.state.loggedin || localStorage.token ? <button onClick={this.handleClick} className="logout">Logout</button> : null}
                </section>
            </div>
        )
    }
}

export default Form;