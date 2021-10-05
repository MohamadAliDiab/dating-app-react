import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
//import BottomNavigation from '../components/BottomNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TouchableOpacity, Settings } from 'react-native'
//import HighligtedUser from '../components/UsersList'

export default function main ({ navigation }){
    const [user, setuser]=useState("");
    const [userList, setUserList]=useState([]);
  
  
    const getAuthState = async () => {
      try {
        const authDataString = await AsyncStorage.getItem("auth");
        const authData = JSON.parse(authDataString || {});
        console.log("this is from main")
        console.log(authData);
        console.log(authData.token)
        axios.defaults.headers["Authorization"] = "bearer"+authData.token;
        //highlightedUsers()
        // Configure axios headers
        //configureAxiosHeaders(authData.token);
      } catch (err) {
        console.log(err)
      }
    };
  
    /*function highlightedUsers() {
      axios.get(`http://127.0.0.1:8000/api/highlighted`)
            .then((response)=>{         
            response.data[0].forEach((user) => {
            userList.push({
            id:user.id,
            firstname:user.firstname,
            lastname:user.lastname
          })
        })
          console.log(userList)
            })
    }*/
  
    useEffect(() => {
      getAuthState();
    }, []);
  
    return (
      <View>
      
  
        </View>
    
    );
  }
