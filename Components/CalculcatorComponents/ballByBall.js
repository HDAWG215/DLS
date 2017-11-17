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
import AddOvers from './../../OverOperators/addition';
import SubtractOvers from './../../OverOperators/subtraction';
import OversPlusBalls from './../../OverOperators/oversPlusBalls';
import HorinzontalScoreScrollView from './../HorizontalScrollScore';
import calculateScore from './ballByBallScoreCalculator';

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

    mapOversToElements = (array) => {
        return array.map((ballsGone) => {
            const oversGoneAtStage = OversPlusBalls(this.state.secondTeamOversGone, ballsGone);            
            return ( 
                <View key={ballsGone}>
                    <Text key={ballsGone}> {oversGoneAtStage}: {calculateScore(
                        this.state.lengthOfGame,
                        this.state.firstTeamTotal, 
                        this.state.secondTeamCurrentWicketsLost,
                        oversGoneAtStage)}||</Text>
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