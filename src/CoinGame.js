import React, { Component } from 'react'
import BetForm from './BetForm';
import NumberChoice from './NumberChoice.js'
import {coinFlip} from './helpers.js';

export default class CoinGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            betting: true,
        }
        this.toggleBet = this.toggleBet.bind(this)
        this.gamePlay = this.gamePlay.bind(this)
    }
    toggleBet(){
       this.setState({
           betting : false
       })
    }
    gamePlay(playerChoice){
        const computerPlay = coinFlip()
        console.log(computerPlay, "computer")
        console.log(playerChoice, "player")
        if(playerChoice === computerPlay){
            this.props.finishGame(true, computerPlay)
        } else {
            this.props.finishGame(false, computerPlay)     
        }

    }
    render() {
        return (
            <div>
                <h1>Coin Game</h1>
                {this.state.betting && 
                <BetForm toggleBet = {this.toggleBet} 
                setBet={this.props.setBet} 
                totalCoins = {this.props.totalCoins}/>}

                {!this.state.betting &&
                 <NumberChoice gamePlay = {this.gamePlay}  game="coin"/>}
            </div>
        )
    }
}
