import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Settings } from 'react-native'
import User from './UserCard'


function UsersList(props) {
    return (
        <div>
            {props.UsersList.map((user,key)=>{
                console.log(user.id)
                return(
                    <User>
                    <MessageChat id={user.id} f_name={user.firstname} l_name={user.lastname}/>
                    </User>

                )
            })}
            
        </div>
    )
}

export default chatList
