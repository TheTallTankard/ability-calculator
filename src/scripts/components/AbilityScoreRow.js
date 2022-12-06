import React from 'react';
import AbilityScoreRowState from '../classes/AbilityScoreRowState'
import '../../styles/AbilityScoreRow.css';

class AbilityScoreRow extends React.Component {
    constructor(props){
        super(props);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBonusChange = this.handleBonusChange.bind(this);
        this.state = new AbilityScoreRowState();
    }

    render(){
        const { ability } = this.props;
        return (
            <tr id={ability}>
                <td>{ability.toUpperCase()}</td>
                <td><input id={ability + "-score"} type="number" min="8" max="15" value={this.state.score} onChange={this.handleScoreChange}></input></td>
                <td>+</td>
                <td><input id={ability + "-bonus"} type="number" min="0" max="2" value={this.state.bonus} onChange={this.handleBonusChange}></input></td>
                <td>=</td>
                <td><span id={ability + "-total"}></span>{this.state.total}</td>
                <td><span id={ability + "-modifier"}></span>{this.state.modifier}</td>
                <td><span id={ability + "-cost"}></span>{this.state.cost}</td>
            </tr>
        )
    }

    handleScoreChange(e){
        let newAbilityScoreRowState = this.recalculate(parseInt(e.target.value), this.state.bonus);
        this.setState(newAbilityScoreRowState);
        this.props.onCostChange(this.props.ability, newAbilityScoreRowState.cost);
    }

    handleBonusChange(e){
        let newAbilityScoreRowState = this.recalculate(this.state.score, parseInt(e.target.value));
        this.setState(newAbilityScoreRowState);
    }

    recalculate(score, bonus){
        let newAbilityScoreRowState = new AbilityScoreRowState();
        newAbilityScoreRowState.score = score;
        newAbilityScoreRowState.bonus = bonus;
        newAbilityScoreRowState.total = score + bonus;
        newAbilityScoreRowState.modifier = parseInt(newAbilityScoreRowState.total / 2) - 5;
        newAbilityScoreRowState.cost = this.scoreToCost(score);
        return newAbilityScoreRowState;
    }

    scoreToCost(score){
        switch(score){
            case 15: return 9;
            case 14: return 7;
            default: return (score - 8);
        }
    }

}

export default AbilityScoreRow;