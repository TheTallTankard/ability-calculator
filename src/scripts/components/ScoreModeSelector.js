import React from 'react';
import '../../styles/ScoreModeSelector.css'
import ScoreModes from '../classes/ScoreModes.js'
import Button from 'react-bootstrap/Button';

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
                    &nbsp;
                    <Button className="roll-4d6-drop-low-conditional">Roll</Button>
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
            case ScoreModes.PointBuy: this.showPointBuyDesc(); break;
            case ScoreModes.StandardArray: this.showStandardArrayDesc(); break;
            case ScoreModes.Roll4D6DropLowest: this.showRoll4D6DropLowestDesc(); break;
        }
    }

    showPointBuyDesc(){
        document.getElementById("score-mode-desc").innerHTML = ScoreModes.PointBuyDesc;
    }
    
    showStandardArrayDesc(){
        document.getElementById("score-mode-desc").innerHTML = ScoreModes.StandardArrayDesc;
    }
    
    showRoll4D6DropLowestDesc(){
        document.getElementById("score-mode-desc").innerHTML = ScoreModes.Roll4D6DropLowestDesc;
    }
}

export default ScoreModeSelector;
