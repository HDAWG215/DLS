import React, { Component } from 'react';
import { 
    ScrollView, 
    Button, 
    Text 
} from 'react-native';
import CalculationInput from './../CalculationInput';
import ResourceTable from './../../ResourceTables/ResourceTable.js';

export default class BetweenInnings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: null,
            oversPlayedAtInterruption: null,
            totalAtInterruption: null,
            wicketsAtInterruption: null,
            firstTeamTotal: null,        
            oversPerSideAfterInterruption: null,
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
   
   
    oversPerSideAfterInterruption = (text) => {              
        this.setState(() => {
            return { oversPerSideAfterInterruption: text }
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
        const timeOfInterruption = parseFloat(this.state.oversPlayedAtInterruption);
        const scoreAtInterruption = parseFloat(this.state.totalAtInterruption);
        const oversPerSideAfterInterruption = parseFloat(this.state.oversPerSideAfterInterruption);
        const resourceAtInterruption = ResourceTable[(50 - timeOfInterruption)][parseInt(this.state.wicketsAtInterruption)];        
        const resourceAfterInterruption = ResourceTable[(oversPerSideAfterInterruption - timeOfInterruption)][parseInt(this.state.wicketsAtInterruption)];

        const team1Resource = 100 - (resourceAtInterruption - resourceAfterInterruption);

        const g50 = 245;

        const firstTeamTotal = parseFloat(this.state.firstTeamTotal);
        const secondTeamResources = ResourceTable[oversPerSideAfterInterruption][0];        
        const revisedTotal = firstTeamTotal + (g50 * ((secondTeamResources - team1Resource)/100)) + 1;
        return Math.floor(revisedTotal);
    }

    render() {
        return (
            <ScrollView>
                <Text>Length of Game (Overs)</Text>        
                <CalculationInput textChange={this.gameLength}/>
                <Text>Overs Played At Interruption</Text>
                <CalculationInput textChange={this.oversPlayedAtInterruption}/>
                <Text>Score at Interruption (XXX - W)</Text>
                <CalculationInput textChange={this.totalAtInterruption}/>
                <CalculationInput textChange={this.wicketsAtInterruption}/>
                <Text>First Team Total</Text>
                <CalculationInput textChange={this.firstTeamTotal}/>   
                <Text>Overs Per Side After Interruption</Text>
                <CalculationInput textChange={this.oversPerSideAfterInterruption}/>   
                { this.state.lengthOfGame &&
                    this.state.firstTeamTotal &&
                    this.state.oversPerSideAfterInterruption &&
                    this.state.oversPlayedAtInterruption &&
                    this.state.totalAtInterruption &&
                    this.state.wicketsAtInterruption
                    ? <Button onPress={this.setStateCalculateScore} title="Calculate Score"></Button> : null }
                { this.state.calculatedScore ? <Text>Second Teams Target: {this.state.calculatedScore}</Text> : null }
            </ScrollView>
        )
    }
}