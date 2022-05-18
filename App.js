import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

    const [categorySelected, setCategorySelected]  = useState(null);
    const [productSelected, setProductSelected] = useState(null);

    const handleCategory = (category) =>{
      setCategorySelected(category)
    }

    const handleProduct = (product) =>{
      setProductSelected(product)
    }
    // console.log(categorySelected);
    console.log(productSelected);

    const [loaded] = useFonts({
      LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    });
    
    if (!loaded) {
      return <ActivityIndicator/>;
    }
    
  return (

    <SafeAreaView style={style.container}>
      { !categorySelected ?
        <CategoriesScreen handleCategory = {handleCategory}/>
        :
        !productSelected ?
        <ProductsScreen category={categorySelected} handleProduct={handleProduct} handleCategory={handleCategory}/>
        :
        <DetailScreen product={productSelected} handleProduct={handleProduct}/>
      }
    </SafeAreaView>


  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center', 
  }
})