import { StyleSheet } from 'react-native';

export default styles = {
    common: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            paddingTop: 50,
            height: 500
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
             width: 1000
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
            alignSelf: 'center' 
        }
    }),
    ballByBall: StyleSheet.create({
        page: {
            flex: 1,
            flexGrow: 0,
            flexDirection: 'row',
            alignSelf: 'center',
            paddingRight: 30,
            paddingLeft: 30        
        },
        flexColumnHeader: {            
            fontWeight: "600",
            fontSize: 17,            
            paddingTop: 15,
            paddingBottom: 15,
            alignSelf: 'center'      
        },
        flexColumn: {            
            borderColor: "#000000",
            borderWidth: 1,
            width: '50%'
        },
        horizontalScrollView: {
            flex: 1,
            flexDirection: 'row',
            flexGrow: 0,
            alignSelf: 'center',
            height: 70,
            borderColor: '#000000',
            borderWidth: 1,
        },
        scoreArrayParent: {
            flex: 1, 
            flexDirection: 'column',
            borderRightColor: '#000000',            
            borderRightWidth: 1,
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