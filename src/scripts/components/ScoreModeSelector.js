import React from 'react';
import '../../styles/ScoreModeSelector.css'
import ScoreModes from '../classes/ScoreModes.js'

class ScoreModeSelector extends React.Component {
    constructor(){
        super();
        this.selectionChanged = this.selectionChanged.bind(this);
    }

    render(){
        return (
            <div className="ScoreModeSelector">
                <div>
                    Calculation Mode:
                    &nbsp;
                    <select onChange={this.selectionChanged}>
                        <option value={ScoreModes.PointBuy}>{ScoreModes.PointBuy}</option>
                        <option value={ScoreModes.StandardArray}>{ScoreModes.StandardArray}</option>
                        <option value={ScoreModes.Roll4D6DropLowest}>{ScoreModes.Roll4D6DropLowest}</option>
                    </select>
                </div>
                <br />
                <div id="score-mode-desc">{ScoreModes.PointBuyDesc}</div>
                <br />
            </div>
        )
    }

    selectionChanged(e){
        this.props.onScoreModeChanged(e);

        switch(e.target.value){
            case ScoreModes.PointBuy: this.setDesc(ScoreModes.PointBuyDesc); break;
            case ScoreModes.StandardArray: this.setDesc(ScoreModes.StandardArrayDesc); break;
            case ScoreModes.Roll4D6DropLowest: this.setDesc(ScoreModes.Roll4D6DropLowestDesc); break;
        }
    }

    setDesc(desc){
        document.getElementById("score-mode-desc").innerHTML = desc;
    }
}

export default ScoreModeSelector;