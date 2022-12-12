import React from 'react';
import '../../styles/Body.css';
import ScoreModes from '../classes/ScoreModes';
import ScoreModeSelector from './ScoreModeSelector';
import AbilityTable from './AbilityTable';


class Body extends React.Component {
    constructor(){
        super();
        this.updateScoreMode = this.updateScoreMode.bind(this);
        this.onRollClicked = this.onRollClicked.bind(this);
        this.state = {
            scoreMode: ScoreModes.PointBuy,
            rollResults: ["?", "?", "?", "?", "?", "?"]
        }
    }

    render(){
        return (
            <div className="Body">
                <ScoreModeSelector onScoreModeChanged={this.updateScoreMode} onRollClicked={this.onRollClicked}></ScoreModeSelector>
                <AbilityTable scoreMode={this.state.scoreMode} rollResults={this.state.rollResults}></AbilityTable>
            </div>
        )
    }

    onRollClicked(e){
        let results = [];
        for (let i = 0; i < 6; i++){
            results.push(this.rollAbilityScore());
        }

        this.setState((prevState) => ({ rollResults: results}));
    }

    updateScoreMode(e){
        this.setState((prevState) => ({scoreMode: e.target.value}))

        switch(e.target.value){
            case ScoreModes.PointBuy:
                this.hideElementsByClass("roll-4d6-drop-low-conditional");
                this.showElementsByClass("point-buy-conditional");
                break;
            case ScoreModes.StandardArray:
                this.hideElementsByClass("roll-4d6-drop-low-conditional");
                this.hideElementsByClass("point-buy-conditional");
                 break;
            case ScoreModes.Roll4D6DropLowest:
                this.showElementsByClass("roll-4d6-drop-low-conditional");
                this.hideElementsByClass("point-buy-conditional");
                break;
        }
    }

    rollAbilityScore(){
        let rolls = [];
        for (let i = 0; i < 4; i++){
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls = rolls.sort((a, b) => a - b);
        rolls.shift();

        return rolls.reduce((a, b) => a + b, 0);
    }

    showElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "visible";
        }
    }

    hideElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "hidden";
        }
    }
}

export default Body;