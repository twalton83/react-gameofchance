import React, { Component } from 'react'

export default class NumberChoice extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const coinChoices = (
            <div>
                <button value="Heads">
                    Heads
                </button>
                <button value = "Tails">
                    Tails
                </button>
            </div>
        )
        const diceChoices = (
            <div className="">
                <input type="number" name="diceChoice" min="1" max="6" id="diceChoice"/>
                <button>Select</button>
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
