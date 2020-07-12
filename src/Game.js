import React, { Component } from 'react'
import DiceGame from './DiceGame'
import CoinGame from './CoinGame'
import GameSelector from './GameSelector'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            gametype: null,
            bet : 0,
            totalCoins : 100
        }
        this.gamePicker = this.gamePicker.bind(this)
        this.setBet = this.setBet.bind(this)
    }
    gamePicker(game){
        this.setState({
            gametype : game
        })
    }
    setBet(bet){
        const newTotal = this.state.totalCoins - bet
        this.setState({
            bet : bet,
            totalCoins : newTotal
        })
    }
    render() {
        let game;
        if(this.state.gametype === 'dice'){
            game = <DiceGame 
            setBet={this.setBet} 
            totalCoins= {this.state.totalCoins}
            />
        } else if (this.state.gametype === 'coin'){
            game = <CoinGame
            setBet={this.setBet}  
            totalCoins= {this.state.totalCoins}
            />
        } else {
            game = <GameSelector   
            gamePicker = {this.gamePicker}/>
        }
        return (
            <div>
                <h1>Game of Chance</h1>
                <p>Total Coins: {this.state.totalCoins}</p>
                {this.state.bet > 0 && <p>Bet: {this.state.bet}</p>}
                {game}
            </div>
        )
    }
}
