import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../styles/colors'
import { Feather } from '@expo/vector-icons'; 
import List from '../Components/List'
import { CATEGORIES } from '../Data/categories'


const CategoriesScreen = ({navigation}) => {
    
    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)
    
    useEffect(()=> {
        if (input === "") setCategoriesFilter(CATEGORIES)
        else {
            console.log("Se ejecuta el efecto");
            const categoriasFiltradas = CATEGORIES.filter(category => 
            category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }
    }, [input])

    
    const handleSelectedCategory = (category) =>{
        // console.log(category);
        // handleCategory(category);
        // console.log(category);
        navigation.push("Products",{
            categoryID: category.id,
            categoryTitle: category.category,
        })
    }

    const handleErase = () =>{
        setInput("");
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
