import React from 'react';
import {View,Text, StyleSheet} from 'react-native'

const Home = (props) =>{
    const {navigation} = props;
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center' }} >
            <Text style={{backgroundColor:'rosybrown' , width:300,height:70,borderRadius:4 , fontSize:40 ,textAlign:"center",padding:10 , color:"white"}}  > User profile  </Text>
        </View>
    )
}


   export default Home  