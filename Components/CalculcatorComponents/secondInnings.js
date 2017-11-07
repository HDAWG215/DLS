import React, { Component } from 'react';
import { 
    ScrollView, 
    Button, 
    Text 
} from 'react-native';
import CalculationInput from './../CalculationInput';
import ResourceTable from './../../ResourceTables/ResourceTable.js';

export default class SecondInnings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: null,            
            firstTeamTotal: null,   
            oversPlayedAtInterruption: null,
            totalAtInterruption: null,
            wicketsAtInterruption: null,     
            secondTeamReducedOvers: null, 
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
    
    oversPlayedAtInterruption = (text) => {               
        this.setState(() => {
            return { oversPlayedAtInterruption: text }
        })
    }
   
   
    secondTeamReducedOvers = (text) => {              
        this.setState(() => {
            return { secondTeamReducedOvers: text }
        })
    }
    
    
    totalAtInterruption = (text) => {        
        this.setState(() => {
            return { totalAtInterruption: text }
        })
    }
    
    
    wicketsAtInterruption = (text) => {    
        this.setState(() => {
            return { wicketsAtInterruption: text }
        })
    }

    setStateCalculateScore = () => {
        this.setState(() => {
            return { calculatedScore: this.calculateScore() }
        })
    }

    calculateScore = () => {    
        const lengthOfGame = parseInt(this.state.lengthOfGame);
        const firstTeamTotal = parseInt(this.state.firstTeamTotal);
        const oversPlayedAtInterruption = parseFloat(this.state.oversPlayedAtInterruption);
        const secondTeamReducedOvers = parseFloat(this.state.secondTeamReducedOvers);
        const totalAtInterruption = parseInt(this.state.totalAtInterruption);
        const wicketsAtInterruption = parseInt(this.state.wicketsAtInterruption);

        const resourceAtInterruption = ResourceTable[(50 - oversPlayedAtInterruption)][parseInt(this.state.wicketsAtInterruption)];
        const resourceAfterInterruption = ResourceTable[secondTeamReducedOvers - oversPlayedAtInterruption][parseInt(this.state.wicketsAtInterruption)];

        const resourceAvailable = 100 - (resourceAtInterruption - resourceAfterInterruption);

        const g50 = 245;

        const revisedTotal = (firstTeamTotal * (resourceAvailable / 100)) + 1;

        return Math.floor(revisedTotal);
    }

    render() {
        return (
            <ScrollView>
                <Text>Length of Game (Overs)</Text>        
                <CalculationInput textChange={this.gameLength}/>
                <Text>First Team Total</Text>
                <CalculationInput textChange={this.firstTeamTotal}/>
                <Text>Overs Played At Interruption</Text>
                <CalculationInput textChange={this.oversPlayedAtInterruption}/>
                <Text>Score at Interruption (XXX - W)</Text>
                <CalculationInput textChange={this.totalAtInterruption}/>
                <CalculationInput textChange={this.wicketsAtInterruption}/>                
                <Text>Second Team Reduced Overs</Text>
                <CalculationInput textChange={this.secondTeamReducedOvers}/>   
                { this.state.lengthOfGame &&
                    this.state.firstTeamTotal &&
                    this.state.secondTeamReducedOvers &&
                    this.state.oversPlayedAtInterruption &&
                    this.state.totalAtInterruption &&
                    this.state.wicketsAtInterruption
                    ? <Button onPress={this.setStateCalculateScore} title="Calculate Score"></Button> : null }
                { this.state.calculatedScore ? <Text>Second Teams Target: {this.state.calculatedScore}</Text> : null }
            </ScrollView>
        )
    }
}