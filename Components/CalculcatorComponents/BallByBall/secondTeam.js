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
import styles from './../../StyleSheet';
import CalculationInput from './../../CalculationInput';
import InterruptionComponent from './../../InterruptionComponent';
import HorinzontalScoreScrollView from './../../HorizontalScrollScore';
import ReusableButton from './../../ReusableButton';

export default class SecondTeam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <View style={styles.common.container}>
                 <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Back' 
                    onPress={this.props.flipPages}/>
                <View style={styles.ballByBall.team2View}>                   
                    { this.props.secondTeamInterruptions.length > 0 ? 
                        <Text style={styles.common.textInputHeading}>
                            Interruptions Added: {this.props.secondTeamInterruptions.length}
                        </Text> : null }
                    { !this.props.sTInterruptionActive ? 
                        <View>
                            <Text style={styles.ballByBall.flexColumnHeader}>2nd Team</Text>
                            <CalculationInput title={'Overs Gone'} textChange={this.props.secondTeamOversGone}/>                        
                            <CalculationInput title={'Wickets Lost'} textChange={this.props.secondTeamCurrentWicketsLost}/>
                            <ReusableButton 
                                buttonStyle={styles.buttons.generalButton}
                                textStyle={styles.buttons.generalButtonText} 
                                title='Add Interruption' 
                                onPress={this.props.sTToggleInterruption}/>
                        </View>
                            : null }
                    { this.props.sTInterruptionActive ? 
                        <InterruptionComponent                                
                            wicketsAtInt={this.props.sTWicketsAtInt}
                            oversAtInt={this.props.sTOversAtInt}
                            lengthAfterInt={this.props.sTLengthAfterInt}
                            toggleInterruption={this.props.sTToggleInterruption}/>
                            : null }
                </View>
                <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Calculate Score' 
                    onPress={this.props.remainingArrayScore}/>
                { this.props.scoreArray ? <HorinzontalScoreScrollView children={this.props.scoreArray}/> : null }
            </View>
        )
    }
}