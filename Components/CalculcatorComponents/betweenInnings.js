import React, { Component } from 'react';
import { 
    View, 
    Button, 
    Text    
} from 'react-native';
import CalculationInput from './../CalculationInput';
import ResourceTable from './../../ResourceTables/ResourceTable.js';

export default class FirstInnings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: null,
            firstTeamTotal: null,
            secondTeamOvers: null,
            calculatedScore: null
        }
    }

    gameLength = (text) => {
        this.setState(() => {
            return { lengthOfGame: text }
        })
    }
    
    firstTeamTotal = (text) => {        
        this.setState(() => {
            return { firstTeamTotal: text }
        })
    }
    
    
    secondTeamOvers = (text) => {
        this.setState(() => {
            return { secondTeamOvers: text }
        })
    }

    setStateCalculateScore = (value) => {
        this.setState(() => {
            return { calculatedScore: this.calculateScore() }
        })
    }

    calculateScore = () => {
        const lengthOfGame = this.state.lengthOfGame;
        const firstTeamResources = ResourceTable[lengthOfGame][0];        
        const firstTeamTotal = this.state.firstTeamTotal;
        const secondTeamOvers = this.state.secondTeamOvers;
        const secondTeamResources = ResourceTable[secondTeamOvers][0];
        const revisedTotal = lengthOfGame == secondTeamOvers ? 
            parseInt(firstTeamTotal) + 1 :
            parseInt((firstTeamTotal * (secondTeamResources/firstTeamResources))) + 1; 
        return Math.floor(revisedTotal);
    }

    render() {
        return (         
            <View>
                <Text>Length of Game (Overs)</Text>        
                <CalculationInput textChange={this.gameLength}/>
                <Text>1st Team Total</Text>
                <CalculationInput textChange={this.firstTeamTotal}/>
                <Text>2nd Team Overs Remaining</Text>
                <CalculationInput textChange={this.secondTeamOvers}/>   
                <Button onPress={this.setStateCalculateScore} title="Calculate Score"></Button>
                { this.state.calculatedScore ? <Text>Second Teams Target: {this.state.calculatedScore}</Text> : null }
            </View>            
        )
    }
}