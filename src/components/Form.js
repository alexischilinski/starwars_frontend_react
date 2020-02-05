import React, { Component } from 'react'

class Form extends Component{

    state = {
        characters: false,
        planets: false,
        character: {
            name: "",
            gender: "",
            species: "",
            planet: "",
            side: "",
            lightsaber_color: "",
            role: ""
        },
        planet: {
            name: "",
            climate: "",
            terrain: "",
            image: ""
        }
    }

    handleClick = (event) =>{
        if(event.target.className === "add-character"){
            this.setState({
                characters: true,
                planets: false
            })
        }if(event.target.className === "add-planet"){
            this.setState({
                characters: false,
                planets: true
            })
        }
    }

    render(){
        return(
            <div className="add-form">
                <button onClick={this.handleClick} className="add-character">Add Character</button>
                <button onClick={this.handleClick} className="add-planet">Add Planet</button>
                {this.state.characters === true ? [
                                    <form className="form">
                                    <input className="input" type="text" name="name" placeholder="name"></input>
                                    <input className="input" type="text" name="gender" placeholder="gender"></input>
                                    <input className="input" type="text" name="species" placeholder="species"></input>
                                    <input className="input" type="text" name="planet" placeholder="homeplanet"></input>
                                    <input className="input" type="text" name="side" placeholder="alliance (e.g. empire, rebellion, etc...)"></input>
                                    <input className="input" type="text" name="lightsaber" placeholder="lightsaber color (if applicable)"></input>
                                    <input className="input" type="text" name="role" placeholder="role (e.g. jedi, sith, pilot, etc...)"></input>
                                    <input className="submit" type="submit" value="Add Character"></input>
                                    </form>
                                    ] : null }
                {this.state.planets === true ? [
                                    <form className="form">
                                        <input className="input" type="text" name="name" placeholder="name"></input>
                                        <input className="input" type="text" name="climate" placeholder="climate"></input>
                                        <input className="input" type="text" name="terrain" placeholder="terrain"></input>
                                        <input className="submit" type="submit" value="Add Planet"></input>
                                    </form>
                ] : null}
            </div>
        )
    }
}

export default Form;