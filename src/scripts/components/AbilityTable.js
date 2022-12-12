import React from 'react';
import '../../styles/AbilityTable.css';
import Table from 'react-bootstrap/Table';
import AbilityRow from './AbilityRow';


class AbilityTable extends React.Component {
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
            <div>
                <Table>
                    <tbody>
                        <tr><td colSpan="8"></td></tr>
                        <tr className="header-row">
                            <td>ABILITY</td>
                            <td>SCORE</td>
                            <td></td>
                            <td>BONUS</td>
                            <td></td>
                            <td>TOTAL</td>
                            <td>MODIFIER</td>
                            <td className='point-buy-conditional'>COST</td>
                        </tr>
                        <AbilityRow ability="str" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <AbilityRow ability="dex" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <AbilityRow ability="con" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <AbilityRow ability="int" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <AbilityRow ability="wis" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <AbilityRow ability="cha" scoreMode={this.props.scoreMode} onCostChange={this.updatePointsUsed} ></AbilityRow>
                        <tr className="point-buy-conditional">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan="2">TOTAL COST:</td>
                            <td><span id="points-used">{this.state.pointsUsed}</span> / 27</td>
                        </tr>
                    </tbody>
                </Table>
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

export default AbilityTable;