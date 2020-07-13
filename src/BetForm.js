import React, { Component } from 'react'

export default class BetForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            bet: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault()

        if(e.target.value  > this.props.totalCoins || e.target.value <= 0){
            console.log('invalid bet')
        } else {
            this.setState({
                [e.target.name] : e.target.value
            })
        }
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.setBet(Number(this.state.bet))
        this.props.toggleBet()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   
                    <label htmlFor="bet">What is your bet? </label>
                    <input type="number" name="bet" id="bet" onChange={ this.handleChange}/>
                    <button>Submit Bet</button>
                </form>
            </div>
        )
    }
}
