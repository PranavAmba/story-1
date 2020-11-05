import React from 'react';
import { StyleSheet, TextInput,Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStory extends React.Component{
   
    render(){
        return(
         <View>
       <Header centerComponent={{ text: 'Story Hub', style: { color: '#fff' } }} />
       <TextInput placeholder='Title of The Story' style={styles.input}></TextInput>
       <TextInput placeholder='Author of The Story' style={styles.input}></TextInput>
       <TextInput placeholder='Write Story' multiline={true} numberOfLines={10} style={styles.writeInput}></TextInput>
       <TouchableOpacity style={styles.button}>
           <Text style={styles.text}>Submit</Text>
       </TouchableOpacity>
            </View>
        );
    }
        
    

}

const styles=StyleSheet.create({
    button:{
        backgroundColor:'green',
        width:200,
        height:50,
        borderWidth:5,
        marginTop:100,
        marginLeft:100,
        borderColor:'black'
    },
    text:{
        fontSize:30,
        color:'black',
        textAlign:'center'
    },
    input:{
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    },
    writeInput:{
        width:"75%", 
        height:250, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }

}) 