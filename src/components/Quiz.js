import React, { Component } from 'react'

class Quiz extends Component {

    state = {
        start: true,
        game: false,
        correct_answer: "",
        items: [],
        optionsArray: [],
        // option1: "",
        // option2: "",
        // option3: "",
        // option4: "",
        correct: false,
        incorrect: false,
        score: 0,
        won: false,
        lost: false
    }

    componentWillMount(){
        this.setState({
            items: this.shuffleArray(this.props.quizItems)
        })
    }

    componentDidMount(){
        this.setState({
            correct_answer: this.state.items[0],
            optionsArray: this.shuffleArray([
                this.state.items[0].name,
                this.state.items[1].name,
                this.state.items[2].name,
                this.state.items[3].name
            ])
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.items.length !== prevState.items.length){
            if(this.state.items.length > 70 && this.state.score < 10){
                this.setState({
                    correct_answer: this.state.items[0],
                    optionsArray: this.shuffleArray([
                        this.state.items[0].name,
                        this.state.items[1].name,
                        this.state.items[2].name,
                        this.state.items[3].name,
                    ])
                })
            }else if (this.state.items.length <= 70 && this.state.score < 10){
                this.setState({
                    game: false,
                    correct: false,
                    incorrect: false,
                    lost: true,
                    won: false
                })
            }else if(this.state.items.length > 70 && this.state.score === 10){
                this.setState({
                    game: false,
                    correct: false,
                    incorrect: false,
                    lost: false,
                    won: true
                })
            }
        } else{return this.state}
    }

    handleClick = (event) => {
        if(event.target.className === "quiz-back"){
            this.props.showPrompt()
        } else if(event.target.className === "start-quiz"){
            this.setState({
                start: false,
                game: true,
            })
        } else if(event.target.className === "quiz-option"){
            if(event.target.innerText === this.state.correct_answer.name){
                this.setState({
                    game: false,
                    correct: true,
                    incorrect: false,
                    score: this.state.score += 1
                })
            }if(event.target.innerText !== this.state.correct_answer.name){
                this.setState({
                    game: false,
                    correct: false,
                    incorrect: true
                })
            }
        } else if(event.target.className === "next-question"){
            const newArray = this.state.items.filter(item=>{
                return item !== this.state.correct_answer
            })
            this.setState({
                items: this.shuffleArray(newArray),
                game: true,
                correct: false,
                incorrect: false
            })
        }else if(event.target.className === "play-again"){
            this.setState({
                items: this.shuffleArray(this.props.quizItems),
                game: true,
                correct: false,
                incorrect: false,
                won: false,
                lost: false,
                score: 0
            })
        }
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

    render(){
        console.log(this.state.items)
        // console.log(this.state.items.length)
        // console.log(this.props.quizItems)
        // console.log(this.state.correct_answer)
        // console.log(this.state.optionsArray)
        return(
            <div>
                <button onClick={this.handleClick} className="quiz-back">Go Back</button>
                {!this.state.start ? <p className="score">Score: {this.state.score}</p> : null }
                {this.state.start ? <button onClick={this.handleClick} className="start-quiz">Start</button> : null}
                {this.state.game ? [
                    <img src={this.state.correct_answer.image} className="quiz-photo" alt="quiz-photo"></img>,
                    <div className="quiz-options">
                        <button onClick={this.handleClick} className="quiz-option">{this.state.optionsArray[0]}</button>
                        <button onClick={this.handleClick} className="quiz-option">{this.state.optionsArray[1]}</button>
                        <button onClick={this.handleClick} className="quiz-option">{this.state.optionsArray[2]}</button>
                        <button onClick={this.handleClick} className="quiz-option">{this.state.optionsArray[3]}</button>
                    </div>
                ] : null} 
                {this.state.correct && !this.state.game ? 
                        [<p className="prompt">Correct!</p>,
                        <button onClick={this.handleClick} className="next-question">Next Question</button>
                ] : null}
                {this.state.incorrect && !this.state.game ?
                        [<p className="prompt">Incorrect. The answer is {this.state.correct_answer.name}</p>,
                        <button onClick={this.handleClick} className="next-question">Next Question</button>
                ] : null}
                {this.state.won ? 
                        [<p className="prompt">You won!</p>,
                        <button onClick={this.handleClick} className="play-again">Play again?</button>] 
                : null}
                {this.state.lost ? 
                        [<p className="prompt">You lost!</p>,
                        <button onClick={this.handleClick} className="play-again">Play again?</button>] 
                : null}
            </div>
        )
    }
}

export default Quiz;