import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher';
import { colors } from '../styles/colors'
import { Feather } from '@expo/vector-icons';   
import List from '../Components/List';
import {PRODUCTS} from '../Data/products';

const ProductsScreen = ({ category = {id:1, category: "Electronic"}, navigation, route}) => {

    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    const{categoryID} = route.params
    route.params

    const handleErase = () => {
        setInput("")
    }

    //Buscar productos según el input.(2)
    useEffect(()=> {
        if(initialProducts.length !== 0){
            if (input === "") setProductsFiltered(initialProducts)
            else {
                const productosFiltrados = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, initialProducts])

    //Realiza el filtro inicial de productos por categoría(1)
    useEffect(()=>{
        const productosIniciales = PRODUCTS.filter(product => product.category === categoryID)
        setInitialProducts(productosIniciales);
    }, [categoryID])

    // console.log(initialProducts);
    // console.log(productsFiltered);

    const handleDetailProduct = (product) => {
        console.log("se navega hacia detail");
        navigation.navigate("Detail",{
            productID: product.id,
            productTitle: product.description
        });
    }
    const handleBack = () =>{
        navigation.goBack();
    } 
    
    return (

         <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoid}
        >
        
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {styles.container}>
                    <Searcher additionalStyles={{
                        backgroundColor: colors.lightGreen,
                    }}>
                        <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder ="ingrese producto a buscar "
                        />
                    <TouchableOpacity  onPress={handleErase} style={styles.button}>
                        <Feather style={styles.textButton} name="delete" size={25} color="black" />
                    </TouchableOpacity>
                    </Searcher>
                        <>
                            <List data={productsFiltered} itemType ={"Producto"} onPress={handleDetailProduct}/>
                            <TouchableOpacity style={styles.buttonBack} onPress={ handleBack } >
                                <Text>
                                    Go back
                                </Text>
                            </TouchableOpacity>
                        </>
                </View>
            </TouchableWithoutFeedback>
        
        </KeyboardAvoidingView>
        
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    keyboardAvoid: {
    flex: 1,
    },
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width:'77%',
        padding: 10,
        margin: 10,
        backgroundColor: colors.lightWhite,
        borderRadius: 5,
        height: 50,
    },
    button:{
        marginTop:10,
        width:50,
        height: 50,
        backgroundColor: colors.lightOrange,
        borderRadius:5,
    },
    textButton:{
        textAlign:'center',
        alignItems:'center',
        padding:12,
    },
    buttonBack: {
        marginTop:10,
        width:100,
        height: 50,
        backgroundColor: colors.lightOrange,
        borderRadius:5,
    },
    // listContainer: {
    // //     flex:1,
    // // }
})
