import React, { Component } from 'react'
import BetForm from './BetForm';

export default class DiceGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            betting: true
        }
    }
    render() {
        return (
            <div>
                <h1>dice Game</h1>
                {this.state.betting && <BetForm totalCoins = {this.props.totalCoins}/>}
            </div>
        )
    }
}
