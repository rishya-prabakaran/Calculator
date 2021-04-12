import React, { Component } from 'react';
import { Text, View, TextInput ,StyleSheet, Button,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';


class Currency extends Component{
    constructor(props){
        super(props);
        this.state = {
            from: 'INR', 
            to: 'INR',
            val: '', 
            output:'',
            currencyvalues:{'INR': 1,'EUR': 88.415,'USD':72.9305,'JPY':0.7027,'GBP':100.148,
                                'AUD':56.313,'MXN':3.6303,'KWD':240.9675,'SGD':54.9825,'MYR':18.0271,'AED':19.8543
                    }
        }
    }
    

    convert = () => {
   
            let mid, res;
            mid=this.state.val*this.state.currencyvalues[this.state.from]
            res = mid/this.state.currencyvalues[this.state.to]
            Alert.alert("Converted value",""+res+ " "+this.state.to)
    }

    render(){
        return (
            <View style={styles.container} >
            <Text style={styles.head}>Currency Conversion</Text>
           
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
                <Picker.Item label="INR" value="INR" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="JPY" value="JPY" />
                <Picker.Item label="GBP" value="GBP" />
                <Picker.Item label="AUD" value="AUD" />
                <Picker.Item label="MXN" value="MXN" />
                <Picker.Item label="KWD" value="KWD" />
                <Picker.Item label="SGD" value="SGD" />
                <Picker.Item label="MYR" value="MYR" />
                <Picker.Item label="AED" value="AED" />
            </Picker>
            </View>

            
            <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginBottom:100}}>
                
                <Picker   
                style={styles.pickerstyle}
                selectedValue={this.state.to}
                onValueChange={(itemValue) =>  
                    this.setState({to: itemValue})}>
                <Picker.Item label="INR" value="INR" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="JPY" value="JPY" />
                <Picker.Item label="GBP" value="GBP" />
                <Picker.Item label="AUD" value="AUD" />
                <Picker.Item label="MXN" value="MXN" />
                <Picker.Item label="KWD" value="KWD" />
                <Picker.Item label="SGD" value="SGD" />
                <Picker.Item label="MYR" value="MYR" />
                <Picker.Item label="AED" value="AED" />
            </Picker>                   
            </View>
            <Button style={styles.button} title="Convert" color="#1B2631" borderColor="#7B241C"  onPress={this.convert}/>
            </View>
        );
    }
}
export default Currency;

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