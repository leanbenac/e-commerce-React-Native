import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';


export default function App() {

    const [categorySelected, setCategorySelected]  = useState(null)

    const handleCategory = (category) =>{
      setCategorySelected(category)
    }

    console.log(categorySelected);

    const [loaded] = useFonts({
      LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    });
    
    if (!loaded) {
      return <ActivityIndicator/>;
    }

  return (

    <View style={style.container}>
      { categorySelected ?
        <ProductsScreen category={categorySelected} handleCategory={handleCategory}/>
        :
        <CategoriesScreen handleCategory = {handleCategory}/>
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center', 
  }
})