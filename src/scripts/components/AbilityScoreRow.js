import React from 'react';
import AbilityScoreRowState from '../classes/AbilityScoreRowState'
import '../../styles/AbilityScoreRow.css';

class AbilityScoreRow extends React.Component {
    constructor(props){
        super(props);
        this.state = new AbilityScoreRowState();
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleBonusChange = this.handleBonusChange.bind(this);
    }

    handleScoreChange(e){
        this.setState((prevState) => ({score: parseInt(e.target.value)}));
        this.recalculate();
    }

    handleBonusChange(e){
        this.setState((prevState) => ({bonus: parseInt(e.target.value)}));
        this.recalculate();
    }

    render(){
        return (
            <tr id={this.props.ability}>
                <td>{this.props.ability}</td>
                <td><input id="score" type="number" min="8" max="15" value={this.state.score} onChange={this.handleScoreChange}></input></td>
                <td>+</td>
                <td><input id="bonus" type="number" min="0" max="2" value={this.state.bonus} onChange={this.handleBonusChange}></input></td>
                <td>=</td>
                <td><span id="total"></span>{this.state.total}</td>
                <td><span id="modifier"></span>{this.state.modifier}</td>
                <td><span id="cost"></span>{this.state.cost}</td>
            </tr>
        )
    }

    recalculate(){
        this.setState((prevState) => ({total: prevState.score + prevState.bonus}));
        this.setState((prevState) => ({modifier: parseInt(prevState.total / 2) - 5}));
        this.setState((prevState) => ({cost: this.scoreToCost(prevState.score)}));
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