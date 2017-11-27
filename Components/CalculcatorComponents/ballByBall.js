import React, { Component } from 'react';
import { 
    View, 
    Button, 
    Text,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';
import CalculationInput from './../CalculationInput';
import AddOvers from './../../Functions/OverOperators/addition';
import SubtractOvers from './../../Functions/OverOperators/subtraction';
import OversPlusBalls from './../../Functions/OverOperators/oversPlusBalls';
import HorinzontalScoreScrollView from './../HorizontalScrollScore';
import CalculateScore from './ballByBallScoreCalculator';
import ResourceLost from './../../Functions/ResourceCalculations/resourceLost';
import RemainingGameLength from './../../Functions/remaingGameLength';
import InterruptionComponent from './../InterruptionComponent';
import styles from './../StyleSheet';

export default class BallByBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthOfGame: 50,
            firstTeamTotal: undefined,      
            secondTeamOversGone: undefined,
            secondTeamCurrentWicketsLost: undefined,
            firstTeamInterruptions: [],
            secondTeamInterruptions: []
        }
    }

    gameLength = (text) => {
        const gameLength = parseInt(text);
        if ( 20 <= gameLength && gameLength < 50 ) {
            const pushedArray = this.state.firstTeamInterruptions;
            pushedArray.push({
                wickets: 0,
                overs: 0,
                lengthAfter: gameLength
            });
            this.setState(() => {
                return {
                    firstTeamInterruptions: this.state.firstTeamInterruptions
                }
            });
        } 
    }
    
    firstTeamTotal = (text) => {             
        this.setState(() => {
            return { firstTeamTotal: parseInt(text) }                
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

            const remainingGameLength = RemainingGameLength(
                this.state.firstTeamInterruptions, 
                this.state.secondTeamInterruptions
            ); 

            const firstTeamInterruptionsResourceLost = ResourceLost(50, this.state.firstTeamInterruptions);  

            const secondTeamInterruptionResourceLost = ResourceLost(
                remainingGameLength[1], 
                this.state.secondTeamInterruptions);
            
            const parScoreAtStage = CalculateScore(
                remainingGameLength[0],   
                firstTeamInterruptionsResourceLost,
                this.state.firstTeamTotal,
                secondTeamInterruptionResourceLost,
                remainingGameLength[1],
                this.state.secondTeamCurrentWicketsLost,
                oversGoneAtStage);

            return ( 
                <View style={styles.ballByBall.scoreArrayParent} key={ballsGone}>
                    <Text style={styles.ballByBall.scoreArrayChildHeader} key={ballsGone}> {oversGoneAtStage}</Text>
                    <Text style={styles.ballByBall.scoreArrayChildScore} key={ballsGone + ".0"}> {parScoreAtStage}</Text>
                </View> );
        })
    }

    remainingArrayScore = () => { 
        const remainingGameLength = RemainingGameLength(
            this.state.firstTeamInterruptions, 
            this.state.secondTeamInterruptions);
        let elementArray = [];      
        const totalElements = SubtractOvers(remainingGameLength[1], this.state.secondTeamOversGone).totalBalls;

        for (let a = 0; a < totalElements; a++) {
            elementArray.push(a);
        }
        
        this.setState(() => {
            return { scoreArray : this.mapOversToElements(elementArray) }
        })
    }

    fTToggleInterruption = () => {
        const allValuesNotInput = this.state.fTWicketsAtInt == undefined && 
            this.state.fTOversAtInt == undefined &&
            this.state.fTLengthAfterInt == undefined;
        if (this.state.fTInterruptionActive && !allValuesNotInput) { 
            if ((this.state.fTWicketsAtInt || this.state.fTWicketsAtInt == 0) && 
                (this.state.fTOversAtInt || this.state.fTOversAtInt == 0) && 
                (this.state.fTLengthAfterInt || this.state.fTLengthAfterInt == 0)) {
                    const pushedArray = this.state.firstTeamInterruptions;
                    pushedArray.push({
                        wickets: this.state.fTWicketsAtInt,
                        overs: this.state.fTOversAtInt,
                        lengthAfter: this.state.fTLengthAfterInt
                    })
                    this.setState(() => {
                        return {
                            firstTeamInterruptions: this.state.firstTeamInterruptions
                        }
                    }
                );            
            }
        }
        this.setState(() => {
            return { 
                fTInterruptionActive: !this.state.fTInterruptionActive,
                fTWicketsAtInt: undefined,
                fTOversAtInt: undefined,
                fTLengthAfterInt: undefined 
            }
        })
    }
    
    sTToggleInterruption = () => {
        const allValuesNotInput = this.state.sTLengthAfterInt == undefined;
        const interruptionAcitve = this.state.sTInterruptionActive;
        console.log(this.state.secondTeamInterruptions);
        if (interruptionAcitve && !allValuesNotInput) {
            if ((this.state.sTWicketsAtInt || this.state.sTWicketsAtInt == undefined) && 
                (this.state.sTOversAtInt || this.state.sTOversAtInt == undefined) && 
                (this.state.sTLengthAfterInt || this.state.sTLengthAfterInt == undefined)) {
                    const pushedArray = this.state.secondTeamInterruptions;
                    pushedArray.push({
                        wickets: this.state.sTWicketsAtInt ? this.state.sTWicketsAtInt : 0,
                        overs: this.state.sTOversAtInt ? this.state.sTOversAtInt : 0,
                        lengthAfter: this.state.sTLengthAfterInt
                    })
                    this.setState(() => {
                        return {
                            secondTeamInterruptions: this.state.secondTeamInterruptions
                        }
                    }
                );            
            }
        }
        this.setState(() => {
            return { 
                sTInterruptionActive: !this.state.sTInterruptionActive,
                sTWicketsAtInt: undefined,
                sTOversAtInt: undefined,
                sTLengthAfterInt: undefined
            }
        })
    }

    fTWicketsAtInt = (text) => {
        this.setState(() => {
            return { fTWicketsAtInt: parseInt(text) }
        })
    }
    
    fTOversAtInt = (text) => {
        this.setState(() => {
            return { fTOversAtInt: parseInt(text) }
        })
    }
    
    fTLengthAfterInt = (text) => {
        this.setState(() => {
            return { fTLengthAfterInt: parseInt(text) }
        })
    }
    
    sTWicketsAtInt = (text) => {
        this.setState(() => {
            return { sTWicketsAtInt: parseInt(text) }
        })
    }
    
    sTOversAtInt = (text) => {
        this.setState(() => {
            return { sTOversAtInt: parseInt(text) }
        })
    }
    
    sTLengthAfterInt = (text) => {
        this.setState(() => {
            return { sTLengthAfterInt: parseInt(text) }
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
                <ScrollView>
                    <View style={styles.ballByBall.page}>
                        <View style={styles.ballByBall.flexColumn1}>
                            <Text style={styles.ballByBall.flexColumnHeader}>1st Team</Text>                        
                            <CalculationInput title={'Game Length'} textChange={this.gameLength}/>
                            <CalculationInput title={'Total'} textChange={this.firstTeamTotal}/>
                            { this.state.firstTeamInterruptions.length > 0 ? 
                                <Text style={styles.common.textInputHeading}>Interruptions Added: {this.state.firstTeamInterruptions.length}</Text> : null }
                            { !this.state.fTInterruptionActive ? 
                                <Button 
                                    title='Add Interruption' 
                                    onPress={this.fTToggleInterruption}/> 
                                    : null }
                            { this.state.fTInterruptionActive ? 
                                <InterruptionComponent 
                                    wicketsAtInt={this.fTWicketsAtInt}
                                    oversAtInt={this.fTOversAtInt}
                                    lengthAfterInt={this.fTLengthAfterInt}
                                    toggleInterruption={this.fTToggleInterruption}/>
                                    : null }
                        </View>
                        <View style={styles.ballByBall.flexColumn2}>
                            <Text style={styles.ballByBall.flexColumnHeader}>2nd Team</Text>
                            <CalculationInput title={'Overs Gone'} textChange={this.secondTeamOversGone}/>                        
                            <CalculationInput title={'Wickets Lost'} textChange={this.secondTeamCurrentWicketsLost}/>
                            { this.state.secondTeamInterruptions.length > 0 ? 
                                <Text style={styles.common.textInputHeading}>
                                    Interruptions Added: {this.state.secondTeamInterruptions.length}
                                </Text> : null }
                            { !this.state.sTInterruptionActive ? 
                                <Button 
                                    title='Add Interruption' 
                                    onPress={this.sTToggleInterruption}/> 
                                    : null }
                            { this.state.sTInterruptionActive ? 
                                <InterruptionComponent                                
                                    wicketsAtInt={this.sTWicketsAtInt}
                                    oversAtInt={this.sTOversAtInt}
                                    lengthAfterInt={this.sTLengthAfterInt}
                                    toggleInterruption={this.sTToggleInterruption}/>
                                    : null }
                        </View>
                    </View>                 
                    <Button onPress={this.remainingArrayScore} title="Calculate Score"></Button>
                    { this.state.scoreArray ? <HorinzontalScoreScrollView children={this.state.scoreArray}/> : null }
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}