import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors'

const CategoryItem = ({category}) => {
    return (
        <View style ={style.container}>
            <Text style={style.text}>{category.category} </Text>
        </View>
    )
}

export default CategoryItem

const style = StyleSheet.create({
     container: {
         width: 150,
         height: 150,
         backgroundColor: colors.lightOrange,
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
         padding: 15,
         margin: 15,
         borderRadius: 10,

     },
     text: {
    
        fontSize: 18,
     }
})
