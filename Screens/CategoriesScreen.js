import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../styles/colors'
import { Feather } from '@expo/vector-icons'; 
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../features/categories'
import { setProductsByCategory } from '../features/products'


const CategoriesScreen = ({navigation}) => {
    
    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState()
    
    //hook de redux + consumiendo un estado
    const {categories} = useSelector(state => state.categories.value)
    const dispatch = useDispatch();

    console.log(categories);
    useEffect(()=> {
        if (input === "") setCategoriesFilter(categories)
        else {
            console.log("Se ejecuta el efecto");
            const categoriasFiltradas = categories.filter(category => 
            category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }
    }, [input])


    const handleErase = () =>{
        setInput("");
    }

    
    const handleSelectedCategory = (category) =>{
        // console.log(category);
        // handleCategory(category);
        // console.log(category);

        dispatch(setProductsByCategory(category.id))
        dispatch(selectCategory(category.id));

        navigation.push("Products",{
            categoryID: category.id,
            categoryTitle: category.category,
        })
    }

    return (

        <>
        <View style = {styles.container}>
            <Searcher additionalStyles={{
                backgroundColor: colors.lightGreen,
            }}>
                <TextInput
                value={input}
                onChangeText={setInput}
                keyboardType="default"
                style={styles.input}
                />
            <TouchableOpacity  onPress={handleErase} style={styles.button}>
                <Text style={styles.textButton}>
                <Feather name="delete" size={25} color="black" />
                </Text>
            </TouchableOpacity>
            </Searcher>

                <View>
                    <List data= { categoriesFilter } onPress={handleSelectedCategory} />
                </View>
        </View>
        </>
    )
}
export default CategoriesScreen

const styles = StyleSheet.create({
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
    }
})
