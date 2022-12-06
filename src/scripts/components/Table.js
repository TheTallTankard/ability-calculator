import React from 'react';
import '../../styles/Table.css';
import AbilityScoreRow from './AbilityScoreRow';


class Table extends React.Component {
    constructor(props){
        super(props);
        this.updatePointsUsed = this.updatePointsUsed.bind(this);
        this.state  = {
            pointsUsed: 0,
            strCost: 0,
            dexCost: 0, 
            conCost: 0, 
            intCost: 0, 
            wisCost: 0, 
            chaCost: 0
        };
    }

    render(){
        return (
            <div className="Table">
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan="2">Points Used:</td>
                            <td><span id="points-used">{this.state.pointsUsed}</span> / 27</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr><td colSpan="8"></td></tr>
                        <tr className="header-row">
                            <td>ABILITY</td>
                            <td>SCORE</td>
                            <td></td>
                            <td>BONUS</td>
                            <td></td>
                            <td>TOTAL</td>
                            <td>MODIFIER</td>
                            <td>COST</td>
                        </tr>
                        <AbilityScoreRow ability="str" onCostChange={this.updatePointsUsed}></AbilityScoreRow>
                        <AbilityScoreRow ability="dex" onCostChange={this.updatePointsUsed} ></AbilityScoreRow>
                        <AbilityScoreRow ability="con" onCostChange={this.updatePointsUsed} ></AbilityScoreRow>
                        <AbilityScoreRow ability="int" onCostChange={this.updatePointsUsed} ></AbilityScoreRow>
                        <AbilityScoreRow ability="wis" onCostChange={this.updatePointsUsed} ></AbilityScoreRow>
                        <AbilityScoreRow ability="cha" onCostChange={this.updatePointsUsed} ></AbilityScoreRow>
                    </tbody>
                </table>
            </div>
        )
    }

    updatePointsUsed(ability, newCost) {
        switch(ability)
        {
            case "str": this.setState({strCost: newCost}); break;
            case "dex": this.setState({dexCost: newCost}); break;
            case "con": this.setState({conCost: newCost}); break;
            case "int": this.setState({intCost: newCost}); break;
            case "wis": this.setState({wisCost: newCost}); break;
            case "cha": this.setState({chaCost: newCost}); break;
        }

        this.setState((state) => ({
            pointsUsed: state.strCost + state.dexCost + state.conCost + state.intCost + state.wisCost + state.chaCost
        }));
    }    
}

export default Table;