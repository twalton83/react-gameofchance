import React, { Component } from 'react'

export default class GameSelector extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.props.gamePicker(e.target.id)
    }
    render() {
        return (
                <div>
                   {this.props.firstGame ?<h2>Select a Game</h2> : <h2>Try Again?</h2> } 
                    <button className="gameChoiceButton" id="coin" onClick={this.handleClick}>
                        Coin
                    </button>
                    <button className="gameChoiceButton" id="dice" onClick = {this.handleClick}>
                        Dice
                    </button>
                </div>
        )
    }
}
