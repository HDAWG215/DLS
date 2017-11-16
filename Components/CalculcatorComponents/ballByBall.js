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
import OversPlusBalls from './../../OverOperators/oversPlusBalls';
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

    mapOversToElements = (array) => {
        return array.map((ballsGone) => {
            const oversGoneAtStage = OversPlusBalls(this.state.secondTeamOversGone, ballsGone);            
            return ( 
                <View key={ballsGone}>
                    <Text key={ballsGone}> {oversGoneAtStage}: {this.calculateScore(oversGoneAtStage)}||</Text>
                </View> );
        })
    }

    remainingArrayScore = () => {
        let elementArray = [];
        const totalElements = SubtractOvers(this.state.lengthOfGame, this.state.secondTeamOversGone).totalBalls;

        for (let a = 0; a < totalElements; a++) {
            elementArray.push(a);
        }
        
        this.setState(() => {
            return { scoreArray : this.mapOversToElements(elementArray) }
        })
    }

    calculateScore = (ballsAfterPoint) => {        
        let revisedTotal;
        const G50 = 245;
        const firstTeamResources = ResourceTable[this.state.lengthOfGame][0];        
        const firstTeamTotal = this.state.firstTeamTotal;        
        const secondTeamOversLost = SubtractOvers(this.state.lengthOfGame, ballsAfterPoint).overs;
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
                <Button onPress={this.remainingArrayScore} title="Calculate Score"></Button>
                { this.state.scoreArray ? <TouchableWithoutFeedback>
                    <HorinzontalScoreScrollView children={this.state.scoreArray}/>
                </TouchableWithoutFeedback> : null }
                {/* { this.state.calculatedScore ? <Text>At This Stage The Second Team Requires: {this.state.calculatedScore}</Text> : null } */}
            </ScrollView>                 
        )
    }
}