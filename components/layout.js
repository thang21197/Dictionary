import React,{ useState }  from 'react';
import { View, Text,StyleSheet,TextInput } from 'react-native';
import * as english_german from '../data/english_german.json';

export default function Layout (props) {
      const [input,setInput]=useState('');
      const [output,setOutput]=useState('');

      function showMeaning() {
        console.log(english_german);
        
        var meaning= input in english_german ? english_german[input]: "Not found";
        setOutput(meaning);
      }

    return (
        <View style={styles.parent}> 
            <Text>Type something in English:</Text>
            <TextInput 
            text={input} 
            onChangeText={(e) =>setInput(e) }
            onSubmitEditing={showMeaning}
            />
            <Text style={styles.germanLabel}>
                Its German equivalent is:
            </Text>
      <Text style={styles.germanWord}>{output}</Text>
        </View>
    );
}
// showMeaning: function(){
//   var meaning=
// }
const styles = StyleSheet.create({
    parent:{
      padding:16
    },
    // For the Text Label
    germanLabel:{
      marginTop:20,
      fontWeight:'bold'
    },
    germanWord:{
      marginTop:15,
      fontSize:30,
      fontStyle:'italic'
    }
  });