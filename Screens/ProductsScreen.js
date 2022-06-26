import React, { useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher';
import { colors } from '../styles/colors'
import { Feather } from '@expo/vector-icons';   
import List from '../Components/List';
import { PRODUCTS } from '../Data/products';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSelected } from '../features/products';

const ProductsScreen = ({ category = {id:1, category: "Electronic"}, navigation, route}) => {

    const [input, setInput] = useState("");
    // const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const {products} = useSelector(state => state.products.value)
    const {productsByCategory} = useSelector(state => state.products.value)
    const dispatch = useDispatch();

    console.log(products);

    const{categoryID} = route.params


    const handleErase = () => {
        setInput("")
    }

    //Buscar productos según el input.
    useEffect(() => {
        if (productsByCategory.length !== 0) {
            if (input === "") setProductsFiltered(productsByCategory)
            else {
                const productosFiltrados = productsByCategory.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        }
    }, [input, productsByCategory])

    //Realiza el filtro inicial de productos por categoría(1)
    // useEffect(()=> {
    //     const productosIniciales = products.filter(product => product.category === categoryID)
    //     setInitialProducts(productosIniciales);
    // }, [categoryID])

    // console.log(initialProducts);
    // console.log(productsFiltered);

    const handleDetailProduct = (product) => {
        console.log(product);
        dispatch(setProductSelected(product.id))

        navigation.navigate("Detail",{
            categoryTitle: category.category
        })
    }
    const handleBack = () => {
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
                        placeholder ="Search your NFT"
                        />
                    <TouchableOpacity  onPress={handleErase} style={styles.button}>
                        <Feather style={styles.textButton} name="delete" size={25} color="black" />
                    </TouchableOpacity>
                    </Searcher>
                        <>
                            <List data={productsFiltered} itemType ={"Producto"} onPress={handleDetailProduct}/>
                            {/* <TouchableOpacity style={styles.buttonBack} onPress={ handleBack } >
                                <Text>
                                    Go back
                                </Text>
                            </TouchableOpacity> */}
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
