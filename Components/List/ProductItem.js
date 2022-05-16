import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductItem = ({product}) => {

    return (
        <View>
            <Text>{product.description}</Text>
            <Image source={{uri: product.image}} style={styles.image}/>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 110,

    }
})