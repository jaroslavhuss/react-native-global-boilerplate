import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import Nav from "../functions/Nav"
import {GlobalContext} from "../context/GlobalContext"
const AnotherPage = () => {
    const {veticka} = useContext(GlobalContext);
   
    return (
        <View>
            <Text>This is test page</Text>
                <Text>{veticka}</Text>
            <Nav path={"Main"}>Go to the main page</Nav>         
        </View>
    )
}

export default AnotherPage
