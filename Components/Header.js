import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles/colors'

const Header = ({title = "E-commerce"}) => {
    return (
        <View style ={style.container}>
            <Text style= {style.text}>{title}</Text>
        </View>
    )
}

export default Header

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        height: 80,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        fontSize: 18,
        color: colors.lightGreen,
        fontFamily: 'LatoRegular',
    }
})
