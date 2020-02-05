import React, { Component }from 'react';
import './App.css';
import Container from './components/Container.js'
import {Header} from './components/Header.js'
import {NavBar} from './components/NavBar.js'
import {Modal} from './components/Modal.js'
import Form from './components/Form.js'

class App extends Component {

  state = {
    characters: [],
    movies: [],
    planets: [],
    showChar: false,
    showMov: false,
    showPlan: false,
    prompt: true,
    // crawlShow: false,
    // crawlText: ""
  }


  componentDidMount(){
    fetch('http://localhost:8000/api/characters/?format=json')
      .then(response=>response.json())
      .then(characters=>this.setState({characters}))

    fetch('http://localhost:8000/api/movies/?format=json')
      .then(response=>response.json())
      .then(movies=>this.setState({movies}))

    fetch('http://localhost:8000/api/planets/?format=json')
      .then(response=>response.json())
      .then(planets=>this.setState({planets}))
  }

  showCharacters = () => {
    this.setState({
      showMov: false,
      showChar: true,
      showPlan: false,
      prompt: false
    })
  }

  showMovies = () => {
    this.setState({
      showMov: true,
      showChar: false,
      showPlan: false,
      prompt: false
    })
  }

  showPlanets = () => {
    this.setState({
      showMov: false,
      showChar: false,
      showPlan: true,
      prompt: false
    })
  }

  showPrompt = () => {
    this.setState({
      showMov: false,
      showChar: false,
      showPlan: false,
      prompt: true
    })
  }

  // toggleCrawl = (text) => {
    // console.log(text)
    // if(this.state.crawl === false){
    //   this.setState({
    //     crawlShow: true
    //   })
    // }
    // else {
    //   this.setState({
    //   crawlShow: false
    // })}
  // }

  render(){
    return (
      <div className="App">
        <Header/>
        <NavBar
          showCharacters={this.showCharacters}
          showMovies={this.showMovies}
          showPlanets={this.showPlanets}/>
        {this.state.prompt ? [<p className="prompt">Welcome</p> ,
                              <p className="prompt">Please choose a button above to begin your Star Wars education</p>,
                              <br></br>,
                              <br></br>,
                              <p className="order">Haven't watched a single Star Wars movie? Here's the best order to watch the episodes:</p>,
                              <p className="order">IV, V, VI, I, II, III, VII, VIII, IX</p>,
                              <br></br>,
                              <br></br>,
                              <div className="add-div"><p className="prompt">Don't see something you want to learn about? Add it below:</p>
                              <br></br>
                              <Form/>
                              </div>,
                              ] : null}
        {/* {this.state.crawl === true ? <Modal handleClose={this.toggleCrawl} crawl={this.state.crawlShow}/> : null} */}
        {this.state.showMov === true ? <Container movies={this.state.movies} showPrompt={this.showPrompt}/> : null}
        {this.state.showChar === true ? <Container characters={this.state.characters} showPrompt={this.showPrompt}/> : null}
        {this.state.showPlan === true ? <Container planets={this.state.planets} showPrompt={this.showPrompt}/> : null}
      </div>
    );
  }
}

export default App;
