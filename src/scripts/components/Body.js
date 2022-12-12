import React from 'react';
import '../../styles/Body.css';
import ScoreModes from '../classes/ScoreModes';
import ScoreModeSelector from './ScoreModeSelector';
import AbilityTable from './AbilityTable';


class Body extends React.Component {
    constructor(){
        super();
        this.updateScoreMode = this.updateScoreMode.bind(this);
        this.state = {
            scoreMode: ScoreModes.PointBuy
        }
    }

    render(){
        return (
            <div className="Body">
                <ScoreModeSelector onScoreModeChanged={this.updateScoreMode}></ScoreModeSelector>
                <AbilityTable scoreMode={this.state.scoreMode}></AbilityTable>
            </div>
        )
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