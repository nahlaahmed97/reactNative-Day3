import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const Home = ({navigation , route}) => {
    const [post, setPost] = useState({});
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`).then((res) => {
        setPost(res.data);
        })
    },[]);

   return ( 
    <View style={styles.container}>
        <Image style={styles.img}
            
            source={{uri: 'https://source.unsplash.com/random'}}
        />
        <View >
        <Text style={styles.txt}>Title:</Text>
        <Text style={styles.txt}>{post.title}</Text>
        <Text style={styles.txt} >Body:</Text>
        <Text style={styles.txt} >{post.body}</Text>
        </View>
    </View> )
}

   export default Home  

   const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: 200,
        height: 150,



    },
    container: {
       backgroundColor:"white",
        textAlign: "center",
        flex: 1,
        alignItems: "center",
        marginBottom: 5,
        borderColor: 'grey',
    
        borderWidth: 1,
        borderRadius: 5,
        justifyContent:"center"

       

    },
    txt:{
       fontSize:20,
       textAlign:"center",
       color:'rosybrown'
      
    
    }
})