import React from 'react';
import ScoreModes from '../classes/ScoreModes.js'

class ScoreModeSelector extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="ScoreModeSelector">
                <select onChange={this.props.onScoreModeChanged}>
                    <option value={ScoreModes.PointBuy}>{ScoreModes.PointBuy}</option>
                    <option value={ScoreModes.StandardArray}>{ScoreModes.StandardArray}</option>
                    <option value={ScoreModes.Roll4D6DropLowest}>{ScoreModes.Roll4D6DropLowest}</option>
                </select>
            </div>
        )
    }
}

export default ScoreModeSelector;
