import React, { Component } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import styles from './StyleSheet';

export default class HorinzontalScoreScrollView extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <ScrollView style={styles.ballByBall.horizontalScrollView} horizontal={true}>
                {this.props.children}
            </ScrollView>
        )
    }
}