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
import ReusableButton from './../../ReusableButton';

export default class FirstTeam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <View style={ styles.common.container }>
                <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Back' 
                    onPress={this.props.resetPickerValue}/>
                <View style={styles.ballByBall.team1View}>
                    { this.props.firstTeamInterruptions.length > 0 ? 
                        <Text style={styles.common.textInputHeading}>Interruptions Added: {this.props.firstTeamInterruptions.length}</Text> : null }
                    { !this.props.fTInterruptionActive ? 
                        <View>
                            <Text style={styles.ballByBall.flexColumnHeader}>1st Team</Text>                        
                            <CalculationInput title={'Game Length Before Play'} textChange={this.props.gameLength}/>
                            <CalculationInput title={'Total'} textChange={this.props.firstTeamTotal}/>
                            <ReusableButton 
                                buttonStyle={styles.buttons.generalButton}
                                textStyle={styles.buttons.generalButtonText} 
                                title='Add Interruption' 
                                onPress={this.props.fTToggleInterruption}/>
                        </View> : null }
                    { this.props.fTInterruptionActive ? 
                        <InterruptionComponent 
                            wicketsAtInt={this.props.fTWicketsAtInt}
                            oversAtInt={this.props.fTOversAtInt}
                            lengthAfterInt={this.props.fTLengthAfterInt}
                            toggleInterruption={this.props.fTToggleInterruption}/>
                            : null }
                </View>
                <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Second Team' 
                    onPress={this.props.flipPages}/>
            </View>
        )
    }
}