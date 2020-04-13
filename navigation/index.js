
 
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import Home from '../containers/Home'
import posts from '../containers/posts'
import Profile from '../containers/Profile'
import postsDetails from '../containers/postsDetails'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const {Navigator: StackNavigator , Screen: StackScreen} = createStackNavigator(); //navigator and screen
const {Navigator: TabNavigator , Screen: TabScreen} = createBottomTabNavigator(); //navigator and screen
 

const stackNav = () => (
    
    <StackNavigator  screenOptions={{
        headerStyle:{backgroundColor:"rosybrown"}
    }}> 
    
        <StackScreen name="home" component={Home} options={{
            title:"Home",
            headerTitleAlign:"center" ,
            headerTintColor:'white',
            headerTitleStyle:{fontSize:20,fontWeight:"bold"}
            }}/>
        <StackScreen name="posts" component={posts} options={{
            title:"Posts List",
            headerTitleAlign:"center" ,
            headerTintColor:'white',
            headerTitleStyle:{fontSize:20,fontWeight:"bold"}
            }}/>
        <StackScreen name="postsDetails" component={postsDetails} options={{
            title:"Post Details",
            headerTitleAlign:"center" ,
            headerTintColor:'white',
            headerTitleStyle:{fontSize:20,fontWeight:"bold"}
        }}/>
         
    </StackNavigator>

)

export default function() {
    return (
        <NavigationContainer >
           <TabNavigator  tabBarOptions={{
               style:{
                backgroundColor:"rosybrown",
                height:80,
            },
            labelStyle:{
              fontSize:16 
            },
            activeTintColor:"white",
            
           }}>
               <TabScreen name="Posts" component={stackNav} options={{ tabBarIcon:({color,size})=><FontAwesome name="home" color={color} size={size} />}}/>
               <TabScreen name="profile" component={Profile} options={{ tabBarIcon:({color,size})=><FontAwesome name="user-circle-o" color={color} size={size} />}}/>
           </TabNavigator>
  
        </NavigationContainer>
    )
}


 