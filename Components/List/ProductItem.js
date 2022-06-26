import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductItem = ({product}) => {

    return (
        <View>
            <Text style={styles.text} >{product.description}</Text>
            <Image source={{uri: product.image}} style={styles.image}/>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 180,
        borderRadius: 20,
        margin: 15,
    },
    text: {
        textAlign:'center',
    }
    
})