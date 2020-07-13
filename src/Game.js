import React, { Component } from 'react'
import DiceGame from './DiceGame'
import CoinGame from './CoinGame'
import GameSelector from './GameSelector'
import './App.css'

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            gametype: null,
            bet : 0,
            totalCoins : 100,
            winnerMessage: null,
            firstGame : true,
            correctChoice: null
        }
        this.gamePicker = this.gamePicker.bind(this)
        this.setBet = this.setBet.bind(this)
        this.finishGame = this.finishGame.bind(this)
    }
    gamePicker(game){
        this.setState({
            gametype : game,
            winnerMessage : null
        })
    }
    finishGame(winner, correctChoice){
        if(winner){
            let newTotal;
            if(this.state.gametype === "dice"){
                newTotal = this.state.totalCoins + (this.state.bet * 6)
            } else if (this.state.gametype === "coin"){
                newTotal = this.state.totalCoins + (this.state.bet * 2)
            }
            this.setState({
                bet: "",
                totalCoins : newTotal,
                winnerMessage : "You won!",
                firstGame : false,
                gametype: null,
                correctChoice : correctChoice
            })

        } else if (!winner) {
            this.setState({
                bet: "",
                gametype: null,
                winnerMessage : `You lose. The correct choice was ${correctChoice}.`,
                firstGame : false,
                correctChoice : correctChoice
            })
        }
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
            game = <DiceGame className= "Dice"
            finishGame = {this.finishGame}
            setBet={this.setBet} 
            totalCoins= {this.state.totalCoins}
            />
        } else if (this.state.gametype === 'coin'){
            game = <CoinGame className="Coin"
            finishGame = {this.finishGame}
            setBet={this.setBet}  
            totalCoins= {this.state.totalCoins}
            />
        } else {
            
            game = <GameSelector   
            firstGame = {this.state.firstGame} gamePicker = {this.gamePicker}/>
        }
        return (
            <div className="Game">
                <h1>Game of Chance</h1>
                <div className="coins">
                    <img className="coinGif" src={require("./pixel-coin-png-4.gif")} alt="gif of coin"></img>
                    <p>{this.state.totalCoins}g</p>
                </div>
                <p>{this.state.winnerMessage}</p>
                {this.state.bet > 0 && <p>Bet: {this.state.bet}</p>}
                {game}
            </div>
        )
    }
}
