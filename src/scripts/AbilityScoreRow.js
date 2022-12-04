import React from 'react';
import '../styles/AbilityScoreRow.css';

class AbilityScoreRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 8,
            bonus: 0,
            total: 8,
            modifier: -1,
            cost: 0
        }
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBonusChange = this.handleBonusChange.bind(this);
    }

    handleScoreChange(e){
        this.setState((state) => ({score: parseInt(e.target.value)}));
        this.setState((state) => ({total: parseInt(e.target.value) + state.bonus}));
        this.setState((state) => ({modifier: parseInt(state.total / 2) - 5}));
        console.log(this.state);
    }

    handleBonusChange(e){
        this.setState((state) => ({bonus: parseInt(e.target.value)}));
        this.setState((state) => ({total: state.score + parseInt(e.target.value)}));
        this.setState((state) => ({modifier: parseInt(state.total / 2) - 5}));
        console.log(this.state);
    }

    render(){
        return (
            <tr id={this.props.ability}>
                <td>{this.props.ability}</td>
                <td><input id="score" type="number" min="8" max="15" value={this.state.score} onChange={this.handleScoreChange}></input></td>
                <td>+</td>
                <td><input id="bonus" type="number" min="0" value={this.state.bonus} onChange={this.handleBonusChange}></input></td>
                <td>=</td>
                <td><span id="total"></span>{this.state.total}</td>
                <td><span id="modifier"></span>{this.state.modifier}</td>
                <td><span id="cost"></span>{this.state.cost}</td>
            </tr>
        )
    }
}

export default AbilityScoreRow;