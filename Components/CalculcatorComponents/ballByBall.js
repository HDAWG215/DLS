import React, { Component } from 'react';
import { 
    View, 
    Button, 
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';
import CalculationInput from './../CalculationInput';
import ResourceTable from './../../ResourceTables/ResourceTable.js';
import AddOvers from './../../OverOperators/addition';
import SubtractOvers from './../../OverOperators/subtraction';
import HorinzontalScoreScrollView from './../HorizontalScrollScore';

export default class BallByBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: 50,
            firstTeamOversLost: 0,
            firstTeamTotal: null,            
            calculatedScore: null,
            horizontal: true
        }
    }

    gameLength = (text) => {
        this.setState(() => {
            return { lengthOfGame: parseInt(text) }
        })
    }
    
    firstTeamTotal = (text) => {        
        this.setState(() => {
            return { firstTeamTotal: parseInt(text) }
        })
    }
    
    
    firstTeamOversLost = (text) => {        
        this.setState(() => {
            return { firstTeamOversLost: parseFloat(text) }
        })
    }
    
    
    secondTeamOversGone = (text) => {
        this.setState(() => {
            return { secondTeamOversGone: parseFloat(text) }
        })
    }
    
    secondTeamCurrentScore = (text) => {
        this.setState(() => {
            return { secondTeamCurrentScore: parseInt(text) }
        })
    }
    
    secondTeamCurrentWicketsLost = (text) => {
        this.setState(() => {
            return { secondTeamCurrentWicketsLost: parseInt(text) }
        })
    }
    
    secondTeamCurrentOversLost = (text) => {
        this.setState(() => {
            return { secondTeamCurrentOversLost: parseFloat(text) }
        })
    }

    setStateCalculateScore = (value) => {
        this.setState(() => {
            return { calculatedScore: this.calculateScore() }
        })
    }

    calculateScore = () => {
        let revisedTotal;
        const G50 = 245;
        const firstTeamResources = ResourceTable[this.state.lengthOfGame][0];        
        const firstTeamTotal = this.state.firstTeamTotal;        
        const secondTeamOversLost = SubtractOvers(this.state.lengthOfGame, this.state.secondTeamOversGone);
        const secondTeamResourceLost = ResourceTable[secondTeamOversLost][this.state.secondTeamCurrentWicketsLost];
        const secondTeamResourcesUsed = firstTeamResources - secondTeamResourceLost;
        if ( firstTeamResources > secondTeamResourcesUsed ) {
            revisedTotal = Math.floor((firstTeamTotal * (secondTeamResourcesUsed/firstTeamResources)) + 1)
        } else if ( secondTeamResourcesUsed < firstTeamResources ) {
            revisedTotal = Math.floor((firstTeamTotal + ((secondTeamResourcesUsed - firstTeamResources) * G50)/100)+ 1)
        } else if ( firstTeamResources == secondTeamResourcesUsed ) {
            revisedTotal = Math.floor(firstTeamTotal + 1)
        } else {
            revisedTotal = 'Error, please try again'
        }
        return revisedTotal;
    }

    render() {
        return (
            <ScrollView>
                <Text>1st Team Overs Completed</Text>        
                <CalculationInput textChange={this.gameLength}/>
                <Text>1st Team Total</Text>
                <CalculationInput textChange={this.firstTeamTotal}/>
                <Text>2nd Team Overs Gone</Text>
                <CalculationInput textChange={this.secondTeamOversGone}/>   
                <Text>2nd Team Current Score</Text>
                <CalculationInput textChange={this.secondTeamCurrentScore}/>   
                <Text>2nd Team Current Wickets Lost</Text>
                <CalculationInput textChange={this.secondTeamCurrentWicketsLost}/>                  
                <Button onPress={this.setStateCalculateScore} title="Calculate Score"></Button>
                <TouchableWithoutFeedback>
                    <ScrollView horizontal={this.state.horizontal}>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                        <Text style={styles.welcome}>Banter</Text>
                    </ScrollView>
                </TouchableWithoutFeedback>
                { this.state.calculatedScore ? <Text>At This Stage The Second Team Requires: {this.state.calculatedScore}</Text> : null }
            </ScrollView>                 
        )
    }
}