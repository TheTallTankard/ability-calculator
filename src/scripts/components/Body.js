import React from 'react';
import '../../styles/Body.css';
import ScoreModes from '../classes/ScoreModes';
import ScoreModeSelector from './ScoreModeSelector';
import Table from './Table';


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
                <Table scoreMode={this.state.scoreMode}></Table>
            </div>
        )
    }

    updateScoreMode(e){
        this.setState((prevState) => ({scoreMode: e.target.value}))

        switch(e.target.value){
            case ScoreModes.PointBuy: this.showPointBuyElements(); break;
            case ScoreModes.StandardArray: this.hidePointBuyElements(); break;
            case ScoreModes.Roll4D6DropLowest: this.hidePointBuyElements(); break;
        }
    }

    showPointBuyElements(){
        console.log("showing...");
        var elements = document.getElementsByClassName("point-buy-visible");
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "visible";
        }
    }

    hidePointBuyElements(){
        console.log("hiding...");
        var elements = document.getElementsByClassName("point-buy-visible");
        for (let i = 0; i < elements.length; i++){
            elements[i].style.visibility = "hidden";
        }
    }
}

export default Body;