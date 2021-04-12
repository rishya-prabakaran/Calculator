import React, { Component } from 'react';
import { Text, View, TextInput ,StyleSheet, Button,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';


class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            from: 'sec', 
            to: 'sec',
            val: '', 
            timevalues:{'sec': 1,'min': 60,'hr':3600,'day':86400,'wk':604800,
                                    'm':2628000,'y':31536000
                    }
        }
    }
   
    convert = () => {
   
            let mid, res;
            mid=this.state.val*this.state.timevalues[this.state.from]
            res = mid/this.state.timevalues[this.state.to]
            Alert.alert("Converted value",""+res+ " "+this.state.to)
    }

    render(){
        return (
            <View style={styles.container} >
            <Text style={styles.head}>Time Conversion</Text>
           
                <TextInput
                placeholder="Enter a value"
                style={styles.input}
                value= {this.state.val}
                onChangeText={val=>this.setState({val})}
                keyboardType='numeric'
                />
                <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginRight:1}}>
            <Picker   
                style={styles.pickerstyle}
                
                selectedValue={this.state.from}
                onValueChange={(itemValue) =>  
                    this.setState({from: itemValue})}>
                <Picker.Item label="Seconds" value="sec" />
                <Picker.Item label="Minutes" value="min" />
                <Picker.Item label="Hour" value="hr" />
                <Picker.Item label="Day" value="day" />
                <Picker.Item label="Week" value="wk" />
                <Picker.Item label="Month" value="m" />
                <Picker.Item label="Year" value="y" />
            </Picker>
            </View>

            
            <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginBottom:100}}>
                
                <Picker   
                style={styles.pickerstyle}
                selectedValue={this.state.to}
                onValueChange={(itemValue) =>  
                    this.setState({to: itemValue})}>
                <Picker.Item label="Seconds" value="sec" />
                <Picker.Item label="Minutes" value="min" />
                <Picker.Item label="Hour" value="hr" />
                <Picker.Item label="Day" value="day" />
                <Picker.Item label="Week" value="wk" />
                <Picker.Item label="Month" value="m" />
                <Picker.Item label="Year" value="y" />
            </Picker>                   
            </View>
            <Button style={styles.button} title="Convert" color="#1B2631" borderColor="#7B241C"  onPress={this.convert}/>
            </View>
        );
    }
}
export default Time;

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