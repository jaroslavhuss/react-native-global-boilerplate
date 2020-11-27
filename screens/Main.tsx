import React from 'react'
import { View, Text } from 'react-native'
import Nav from "../functions/Nav"

const Main = () => {
    return (
        <View>
            <Text>This is the main component</Text>
           <Nav path={"AnotherPage"}>Go to another page</Nav>
        </View>
    )
}

export default Main
