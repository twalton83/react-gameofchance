import React, { Component } from 'react'
import BetForm from './BetForm';
import NumberChoice from './NumberChoice.js'

export default class CoinGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            betting: true
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Coin Game</h1>
                {this.state.betting && <BetForm setBet={this.props.setBet} totalCoins = {this.props.totalCoins}/>}
                {!this.state.betting && <NumberChoice game="Coin"/>}
            </div>
        )
    }
}
