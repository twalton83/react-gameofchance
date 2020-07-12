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
                    <h1>Select a Game</h1>
                    <button id="coin" onClick={this.handleClick}>
                        Coin
                    </button>
                    <button id="dice" onClick = {this.handleClick}>
                        Dice
                    </button>
                </div>
        )
    }
}
