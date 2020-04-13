import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const Home = (props) => {
    const { navigation } = props;
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            setPosts(res.data);
        })
    }, []);
    return (
        <View style={{ flex: 3 , backgroundColor:'rosybrown' ,alignItems:"center"}} >
           
            <FlatList
                data={posts}
                renderItem={post => {
                    return (
                        <View  style={styles.container} >
                             
                            <Image style={styles.img}
                                source={{ uri: 'https://source.unsplash.com/random' }}
                            />
                            <Text onPress={() => navigation.navigate('postsDetails', { postId: post.item.id })} >{post.item.title}</Text>
                        </View>)
                }
                }
            /> 
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: 200,
        height: 200,



    },
    container: {
       backgroundColor:"white",
        textAlign: "center",
        flex: 1,
        alignItems: "center",
        padding: 5,
        marginBottom: 5,
        borderColor: 'grey',
        width: 400,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent:"center"
       

    }
})