import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'
import { colors } from '../styles/colors'

const DetailScreen = ({product, handleProduct}) => {
    return (

        <> 
        <Header title={product.description}/>

        <View style={styles.container}>
            <Image
            source={{uri: product.image}}
            style ={styles.image}
            resizeMode="cover"
            
            />

            <Text>{product.description}</Text>
            <Text>$ {product.price}</Text>
            <TouchableOpacity style={styles.buttonBack} onPress={() => handleProduct(null)} >
                <Text>
                       Go back
                 </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        marginTop:30,
        alignItems: 'center',
        flexDirection: 'column',
    },
    image:{
        width: 0.8 * Dimensions.get('window').width,
        height: 250,
    },
    buttonBack: {
        marginTop:10,
        width:100,
        height: 50,
        backgroundColor: colors.lightOrange,
        borderRadius:5,
    },
})
