import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class Distance extends Component{

    constructor(props){
        super(props);
        this.state = {
            from: '',
            to: '',
            val: ''
        }
    }

    convert=()=> {
        var fromunit = this.state.from;
        var tounit = this.state.to;
        var dist = this.state.val;
        let res;
         
        if(fromunit == "in" && tounit == "ft")
                {
                    res = (dist / 12);
                    
                }
                else if(fromunit == "ft" && tounit == "in")
                {
                    res = (dist * 12);
                    
                }
                else if(fromunit == "in" && tounit == "yd")
                {
                    res = (dist / 36);
                    
                }
                else if(fromunit == "yd" && tounit == "in")
                {
                    res = (dist * 36);
                    
                }
                else if(fromunit == "in" && tounit == "mi")
                {
                    res = (dist / 63360);
                    
                }
                else if(fromunit == "mi" && tounit == "in")
                {
                    res = (dist * 63360);
                    
                }
                else if(fromunit == "in" && tounit == "mm")
                {
                    res = (dist * 25.4);
                    
                }
                else if(fromunit == "mm" && tounit == "in")
                {
                    res = (dist / 25.4);
                    
                }
                else if(fromunit == "in" && tounit == "cm")
                {
                    res = (dist * 2.54);
                    
                }
                else if(fromunit == "cm" && tounit == "in")
                {
                    res = (dist / 2.54);
                    
                }
                else if(fromunit == "in" && tounit == "m")
                {
                    res = (dist / 39.37);
                    
                }
                else if(fromunit == "m" && tounit == "in")
                {
                    res = (dist * 39.37);
                    
                }
                else if(fromunit == "in" && tounit == "km")
                {
                    res = (dist / 39370);
                    
                }
                else if(fromunit == "km" && tounit == "in")
                {
                    res = (dist * 39370);
                    
                }
                //ft
                else if(fromunit == "ft" && tounit == "yd")
                {
                    res = (dist / 3);
                    
                }
                else if(fromunit == "yd" && tounit == "ft")
                {
                    res = (dist * 3);
                    
                }
                else if(fromunit == "ft" && tounit == "mi")
                {
                    res = (dist / 5280);
                    
                }
                else if(fromunit == "mi" && tounit == "ft")
                {
                    res = (dist * 5280);
                    
                }
                else if(fromunit == "ft" && tounit == "mm")
                {
                    res = (dist * 305);
                    
                }
                else if(fromunit == "mm" && tounit == "ft")
                {
                    res = (dist / 305);
                    
                }
                else if(fromunit == "ft" && tounit == "cm")
                {
                    res = (dist * 30.48);
                    
                }
                else if(fromunit == "cm" && tounit == "ft")
                {
                    res = (dist / 30.48);
                    
                }
                else if(fromunit == "ft" && tounit == "m")
                {
                    res = (dist / 3.281);
                    
                }
                else if(fromunit == "m" && tounit == "ft")
                {
                    res = (dist * 3.281);
                    
                }
                else if(fromunit == "ft" && tounit == "km")
                {
                    res = (dist / 3281);
                    
                }
                else if(fromunit == "km" && tounit == "ft")
                {
                    res = (dist * 3281);
                    
                }
                //yd
                else if(fromunit == "yd" && tounit == "mi")
                {
                    res = (dist / 1760);
                    
                }
                else if(fromunit == "mi" && tounit == "yd")
                {
                    res = (dist * 1760);
                    
                }
                else if(fromunit == "yd" && tounit == "mm")
                {
                    res = (dist * 914);
                    
                }
                else if(fromunit == "mm" && tounit == "yd")
                {
                    res = (dist / 914);
                    
                }
                else if(fromunit == "yd" && tounit == "cm")
                {
                    res = (dist * 91.44);
                    
                }
                else if(fromunit == "cm" && tounit == "yd")
                {
                    res = (dist / 91.44);
                    
                }
                else if(fromunit == "yd" && tounit == "m")
                {
                    res = (dist / 1.094);
                    
                }
                else if(fromunit == "m" && tounit == "yd")
                {
                    res = (dist * 1.094);
                    
                }
                else if(fromunit == "yd" && tounit == "km")
                {
                    res = (dist / 1094);
                    
                }
                else if(fromunit == "km" && tounit == "yd")
                {
                    res = (dist * 1094);
                    
                }
//mi
                else if(fromunit == "mi" && tounit == "mm")
                {
                    res = (dist * 1609344);
                    
                }
                else if(fromunit == "mm" && tounit == "mi")
                {
                    res = (dist / 1609344);
                    
                }
                else if(fromunit == "mi" && tounit == "cm")
                {
                    res = (dist * 160934);
                    
                }
                else if(fromunit == "cm" && tounit == "mi")
                {
                    res = (dist / 160934);
                    
                }
                else if(fromunit == "mi" && tounit == "m")
                {
                    res = (dist * 1609);
                    
                }
                else if(fromunit == "m" && tounit == "mi")
                {
                    res = (dist / 1609);
                    
                }
                else if(fromunit == "mi" && tounit == "km")
                {
                    res = (dist * 1.609);
                    
                }
                else if(fromunit == "km" && tounit == "mi")
                {
                    res = (dist / 1.609);
                    
                }
                //mm
                else if(fromunit == "mm" && tounit == "cm")
                {
                    res = (dist / 10);
                    
                }
                else if(fromunit == "cm" && tounit == "mm")
                {
                    res = (dist * 10);
                    
                }
                else if(fromunit == "mm" && tounit == "m")
                {
                    res = (dist / 1000);
                    
                }
                else if(fromunit == "m" && tounit == "mm")
                {
                    res = (dist * 1000);
                    
                }
                else if(fromunit == "mm" && tounit == "km")
                {
                    res = (dist / 1000000);
                    
                }
                else if(fromunit == "km" && tounit == "mm")
                {
                    res = (dist * 1000000);
                    
                }
                //cm
                else if(fromunit == "cm" && tounit == "m")
                {
                    res = (dist / 100);
                    
                }
                else if(fromunit == "m" && tounit == "cm")
                {
                    res = (dist * 100);
                    
                }
                else if(fromunit == "cm" && tounit == "km")
                {
                    res = (dist / 100000);
                    
                }
                else if(fromunit == "km" && tounit == "cm")
                {
                    res = (dist * 100000);
                    
                }
                //m
                else if(fromunit == "m" && tounit == "km")
                {
                    res = (dist / 1000);
                    
                }
                else if(fromunit == "km" && tounit == "m")
                {
                    res = (dist * 1000);
                    
                }
                else{
                    res = dist * 1;
                    

                }
                Alert.alert("Converted value",""+res+ " "+tounit)

    }

    render(){
        return(
        <View style={styles.container} >
            <Text style={styles.head}>Length Conversion</Text>
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
                <Picker.Item label="Miles" value="mi"/>
                <Picker.Item label="Meters" value="m" />
                <Picker.Item label="Centimeters" value="cm" />
                <Picker.Item label="Millimeters" value="mm" />
                <Picker.Item label="Kilometers" value="km" />
                <Picker.Item label="Yards" value="yd" />
                <Picker.Item label="Feets" value="ft" />
                <Picker.Item label="Inches" value="in" />
            </Picker>
</View>
<View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 4 , marginBottom:100}}>

            <Picker   
                style={styles.pickerstyle}
                selectedValue={this.state.to}
                onValueChange={(itemValue) =>  
                    this.setState({to: itemValue})}>
                <Picker.Item label="Miles" value="mi"/>
                <Picker.Item label="Meters" value="m" />
                <Picker.Item label="Centimeters" value="cm" />
                <Picker.Item label="Millimeters" value="mm" />
                <Picker.Item label="Kilometers" value="km" />
                <Picker.Item label="Yards" value="yd" />
                <Picker.Item label="Feets" value="ft" />
                <Picker.Item label="Inches" value="in" />
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