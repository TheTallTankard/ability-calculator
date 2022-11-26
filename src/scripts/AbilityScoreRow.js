import React from 'react';
import '../styles/AbilityScoreRow.css';

class AbilityScoreRow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr id={this.props.ability}>
                <td>{this.props.ability}</td>
                <td id="score"><input type="number"></input></td>
                <td>+</td>
                <td><input type="number"></input></td>
                <td>=</td>
                <td><span className="total-score"></span>8</td>
                <td><span className="ability-modifier"></span>-1</td>
                <td><span className="point-cost"></span>0</td>
            </tr>
        )
    }

}

export default AbilityScoreRow;