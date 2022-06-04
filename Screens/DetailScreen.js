import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import Header from '../Components/Header'
// import { PRODUCTS } from '../Data/products'
import { addItem } from '../features/cart'
import products from '../features/products'
import { colors } from '../styles/colors'

const DetailScreen = ({ 
    route,
     navigation
}) => {

    const dispatch = useDispatch();
    // const[product, setProduct] = useState(null)
    // const {productID} = route.params
    const {productSelected} = useSelector(state => state.products.value)
    // console.log(productID);

    const handleBack = () =>{
        navigation.goBack();
    } 

        // useEffect(()=> {
        //     const productSelected = PRODUCTS.find (product => product.id === productID);
        //     setProduct(productSelected)
        // },[productID])

        const handleAdd = (id) =>{
            dispatch(addItem({id: id}))
        }


    return (

        productSelected && (
            
        <View style={styles.container}>
            <Image
            source={{uri: productSelected.image}}
            style ={styles.image}
            resizeMode="cover"
            
            />

            <Text>{productSelected.description}</Text>
            <Text>$ {productSelected.price}</Text>
            <TouchableOpacity style={styles.buttonBack} onPress={handleBack} >
                <Text>
                       Go back
                 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBack} onPress={() =>handleAdd(productSelected.id)} >
                <Text>
                       add to cart
                 </Text>
            </TouchableOpacity>
        </View>
        )

        
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

