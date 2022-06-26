import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors'
import { useWindowDimensions } from 'react-native';

//responsividdad 
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

    // console.log(windowWidth, windowHeight);
    
    //hook dimensiones
    const { width, height } = useWindowDimensions();
    // console.log (width,height);

    return (
        <View style ={{...style.container,
        maxWidth: 0.43 * width,
        maxHeight: 0.25 * height,
        margin: width < 330 ? 10: 12,
        }}>
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
         alignItems: 'center',
         padding: 15,
         borderRadius: 10,

     },
     text: {

        fontSize: 18,
     }
})
