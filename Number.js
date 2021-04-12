import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class Number extends Component{

    constructor(props){
        super(props);
        this.state = {
            from: 'BIN',
            to: 'BIN',
            val: ''
        }
    }

    convert=()=> {
    
       /* if (this.state.val.match(/^[0-1]+$/g) === null) {
            Alert.alert('Enter either 0 or 1')
            return*/
          }

    

    render(){
        return(
        <View style={styles.container} >
            <Text style={styles.head}>Number Conversion</Text>
            <TextInput
                placeholder="Enter a value"
                style={styles.input}
                value= {this.state.val}
                onChangeText={val=>this.setState({val})}
                
                />
            <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginRight:1}}>
            <Picker   
                style={styles.pickerstyle}
                selectedValue={this.state.from}
                onValueChange={(itemValue) =>  
                    this.setState({from: itemValue})}>
                <Picker.Item label="Binary" value="BIN" />
                <Picker.Item label="Quinary" value="QUI" />
                <Picker.Item label="Octal" value="OCT" />
                <Picker.Item label="Decimal" value="DEC" />
                <Picker.Item label="Hexadecimal" value="HEX" />
            </Picker>
</View>
<View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginBottom:100}}>

            <Picker   
                style={styles.pickerstyle}
                selectedValue={this.state.to}
                onValueChange={(itemValue) =>  
                    this.setState({to: itemValue})}>
                <Picker.Item label="Binary" value="BIN" />
                <Picker.Item label="Quinary" value="QUI" />
                <Picker.Item label="Octal" value="OCT" />
                <Picker.Item label="Decimal" value="DEC" />
                <Picker.Item label="Hexadecimal" value="HEX" />
            </Picker>

            </View>
            <Button style={styles.button} title="Convert" color="#1B2631" borderColor="#7B241C"  onPress={this.convert}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       //paddingTop: 10,
      alignItems:'center',
      backgroundColor:'#AED6F1'
    },
    head: {
        color: '#BA4A00',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily:'sans-serif',
        padding: 60,
      // marginBottom: 1
        //position: 'absolute',
        //top: 50
      },
      pickerstyle: {
        justifyContent:'center',
        width:200,
        
      },
      input: {
        margin: 15,
        height: 35,
        width: 150,
        borderColor: '#D35400',
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 20,
      },
      button: {
        backgroundColor: '#1B2631',
        padding: 10,
        margin: 15,
        height: 50,
        width:150,
        elevation: 8,
        alignItems: 'center',
        borderColor:"#7B241C",
        //marginBottom:200
     },
      
})