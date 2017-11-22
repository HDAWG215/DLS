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
import CalculateScore from './ballByBallScoreCalculator';
import styles from './../StyleSheet';

export default class BallByBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: 50,
            firstTeamOversLost: 3,
            secondTeamGameLength: 47,
            firstTeamTotal: 240,     
            firstTeamWickets: 0,     
            secondTeamOversGone: 22.2,
            secondTeamCurrentWicketsLost: 7 
        }
    }

    gameLength = (text) => {
        this.setState(() => {
            return { lengthOfGame: parseInt(text) }
        })
    }
    
    firstTeamTotal = (text) => {
        const scoreArray = text.split("/")
        console.log([scoreArray[0], scoreArray[1]]);
        this.setState(() => {
            return { firstTeamTotal: parseInt(scoreArray[0]),
                firstTeamWickets: scoreArray[1] ? parseFloat(scoreArray[1]) : 10 }
        })
    }
    
    firstTeamOversLost = (text) => { 
        const overs = parseFloat(text); 
        this.setState(() => {
            return { firstTeamOversLost: SubtractOvers(this.state.lengthOfGame, overs).overs }
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

    mapOversToElements = (array) => {
        return array.map((ballsGone) => {
            const oversGoneAtStage = OversPlusBalls(this.state.secondTeamOversGone, ballsGone);             
            const parScoreAtStage = CalculateScore(
                this.state.lengthOfGame,
                this.state.firstTeamOversLost,
                this.state.firstTeamTotal,
                this.state.firstTeamWickets,
                this.state.secondTeamGameLength,
                this.state.secondTeamCurrentWicketsLost,
                oversGoneAtStage)           
            return ( 
                <View style={styles.ballByBall.scoreArrayParent} key={ballsGone}>
                    <Text style={styles.ballByBall.scoreArrayChildHeader} key={ballsGone}> {oversGoneAtStage}</Text>
                    <Text style={styles.ballByBall.scoreArrayChildScore} key={ballsGone + ".0"}> {parScoreAtStage}</Text>
                </View> );
        })
    }

    remainingArrayScore = () => {
        let elementArray = [];
        this.setState(() => {
            return { secondTeamGameLength: Math.floor(SubtractOvers(this.state.lengthOfGame, this.state.firstTeamOversLost).overs) }
        });
        const totalElements = SubtractOvers(this.state.secondTeamGameLength, this.state.secondTeamOversGone).totalBalls;

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
                <View style={styles.ballByBall.page}>
                    <View style={styles.ballByBall.flexColumn1}>
                        <Text style={styles.ballByBall.flexColumnHeader}>1st Team</Text>
                        <Text style={styles.common.textInputHeading}>Overs Done</Text>
                        <CalculationInput textChange={this.firstTeamOversLost}/>
                        <Text style={styles.common.textInputHeading}>Total</Text>
                        <CalculationInput textChange={this.firstTeamTotal}/>
                    </View>
                    <View style={styles.ballByBall.flexColumn2}>
                        <Text style={styles.ballByBall.flexColumnHeader}>2nd Team</Text>
                        <Text style={styles.common.textInputHeading}>Overs Gone</Text>
                        <CalculationInput textChange={this.secondTeamOversGone}/>                
                        <Text style={styles.common.textInputHeading}>Wickets Lost</Text>
                        <CalculationInput textChange={this.secondTeamCurrentWicketsLost}/>    
                    </View>
                </View>                 
                <Button onPress={this.remainingArrayScore} title="Calculate Score"></Button>
                { this.state.scoreArray ? <HorinzontalScoreScrollView children={this.state.scoreArray}/> : null }
            </ScrollView>                 
        )
    }
}