import React from 'react';
import '../styles/Table.css';
import AbilityScoreRow from './AbilityScoreRow';


class Table extends React.Component {
    constructor(props){
        super(props);
        this.onScoreChange = this.onScoreChange.bind(this);
        this.state  = {
            pointsUsed: 0
        }
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
                            <td colSpan="2"><span id="points-used">{this.state.pointsUsed}</span> / 27</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Ability</td>
                            <td>Score</td>
                            <td></td>
                            <td>Bonus</td>
                            <td></td>
                            <td>Total</td>
                            <td>Modifier</td>
                            <td>Cost</td>
                        </tr>
                        <AbilityScoreRow ability="STR"></AbilityScoreRow>
                        <AbilityScoreRow ability="DEX"></AbilityScoreRow>
                        <AbilityScoreRow ability="CON"></AbilityScoreRow>
                        <AbilityScoreRow ability="INT"></AbilityScoreRow>
                        <AbilityScoreRow ability="WIS"></AbilityScoreRow>
                        <AbilityScoreRow ability="CHA"></AbilityScoreRow>
                    </tbody>
                </table>
            </div>
        )
    }

    onScoreChange(e) {
        this.setState((state) => ({score: parseInt(e.target.value)}));
        this.setState((state) => ({total: parseInt(e.target.value) + state.bonus}));
        this.setState((state) => ({modifier: parseInt(state.total / 2) - 5}));
        this.setState((state) => ({cost: this.scoreToCost(e.target.value)}));
    }
    
}

export default Table;