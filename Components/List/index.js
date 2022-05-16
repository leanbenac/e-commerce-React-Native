import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import CategoryItem from './CategoryItem'
import ProductItem from './ProductItem'

const List = ({ itemType = "category", data, onPress}) => {

    //tipo de item a renderizar 
    const fnRender = ({item}) =>{

        return (

            <TouchableOpacity onPress={() => onPress(item)}>
                {itemType === "category" ?
                    <CategoryItem category={item}/>
                    :
                    <ProductItem product={item}/>}
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
        numColumns={itemType === "category" ? 2: 1}
        data={data}
        renderItem={fnRender}
        keyExtractor={item => item.id}
        />
    )
}

export default List

const style = StyleSheet.create({
 
})
