import { StyleSheet, Dimensions, Button } from 'react-native';

const styles = {
    common: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            paddingTop: 20,
            paddingBottom: 50
        },
        welcome: {
            fontSize: 40,
            fontWeight: "600",
            textAlign: 'center',
            margin: 10
        },
        instructions: {
            textAlign: 'center',
            fontWeight: "600",
            color: '#333333',
            marginBottom: 5
        },
        textBox: {
            height: 40, 
            width: 70, 
            borderColor: 'grey', 
            borderWidth: 1,
            alignSelf: 'center',
            margin: 25,
            padding: 10
        },
        picker: {
            width: Dimensions.get('window').width
        },
        textThing: {
            fontSize: 24,      
            textAlign: 'center' 
        },
        textInputHeading: {
            fontWeight: "500",
            fontSize: 15,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 15,
            alignSelf: 'center',
            textAlign: 'center'
        },
        errorText: {
            fontWeight: "600",
            fontSize: 15,
            alignSelf: 'center',
            color: 'red'
        }     
    }),
    buttons: StyleSheet.create({
        generalButton: {
            padding: 15,
            alignSelf: 'center'
        },
        generalButtonText: {
            fontWeight: "500",
            fontSize: 15,
            alignSelf: 'center',
            color: '#007aff'
        }
    }),
    ballByBall: StyleSheet.create({
        page: {
            flex: -1,
            alignSelf: 'center',
            marginLeft: 30,
            marginRight: 30
        },
        flexColumnHeader: {            
            fontWeight: "600",
            fontSize: 17,            
            paddingTop: 15,
            paddingBottom: 15,
            alignSelf: 'center'      
        },
        team1View: {
            borderColor: '#000000',
            borderWidth: 3,
            borderRadius: 20,
            width: Dimensions.get('window').width - 60
        },
        team2View: {
            borderColor: '#000000',
            borderWidth: 3,
            borderRadius: 20,
            width: Dimensions.get('window').width - 60
        },
        horizontalScrollView: {
            alignSelf: 'center',
            height: 70,            
            marginLeft: 25,
            paddingTop: 40
        },
        scoreArrayParent: {
            flex: 1, 
            flexDirection: 'column',
            borderColor: '#000000',            
            borderWidth: 1,
            width: 70,
            height: 70,
            alignItems: 'center'
        },    
        scoreArrayChildHeader:{
            fontSize: 17,
            fontWeight: "600",            
            paddingTop: 8,
            paddingRight: 4           
        },
        scoreArrayChildScore: {
            fontSize: 17,
            fontWeight: "normal",
            paddingTop: 8,
            paddingRight: 4
        }
    })
}; 

export default styles;