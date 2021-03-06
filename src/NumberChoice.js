import React, { Component } from 'react'
import './App.css'

export default class NumberChoice extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(e){
        const playerChoice = e.target.value;
        this.props.gamePlay(playerChoice)
    }
    render() {
        const coinChoices = (
            <div>
                <button className="gameChoiceButton" onClick={this.handleClick} value="heads">
                    Heads
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "tails">
                    Tails
                </button>
            </div>
        )
        const diceChoices = (
            <div className="">
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "1">
                    1
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "2">
                    2
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "3">
                    3
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "4">
                    4
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "5">
                    5
                </button>
                <button className="gameChoiceButton"
                onClick={this.handleClick} value = "6">
                    6
                </button>
            </div>
        )
        return (
            <div>
                {this.props.game === 'coin' && coinChoices}
                {this.props.game === 'dice' && diceChoices}
            </div>
        )
    }
}
