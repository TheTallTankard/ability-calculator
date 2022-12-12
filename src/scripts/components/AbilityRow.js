import React from 'react';
import AbilityRowState from '../classes/AbilityRowState'
import '../../styles/AbilityRow.css';

class AbilityRow extends React.Component {
    constructor(props){
        super(props);
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBonusChange = this.handleBonusChange.bind(this);
        this.state = new AbilityRowState();
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
        let newAbilityRowState = this.recalculate(parseInt(e.target.value), this.state.bonus);
        this.setState(newAbilityRowState);
        this.props.onCostChange(this.props.ability, newAbilityRowState.cost);
    }

    handleBonusChange(e){
        let newAbilityRowState = this.recalculate(this.state.score, parseInt(e.target.value));
        this.setState(newAbilityRowState);
    }

    recalculate(score, bonus){
        let newAbilityRowState = new AbilityRowState();
        newAbilityRowState.score = score;
        newAbilityRowState.bonus = bonus;
        newAbilityRowState.total = score + bonus;
        newAbilityRowState.modifier = parseInt(newAbilityRowState.total / 2) - 5;
        newAbilityRowState.cost = this.scoreToCost(score);
        return newAbilityRowState;
    }

    scoreToCost(score){
        switch(score){
            case 15: return 9;
            case 14: return 7;
            default: return (score - 8);
        }
    }

}

export default AbilityRow;