// import { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
// import CategoriesScreen from './Screens/CategoriesScreen';
// import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
// import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';


export default function App() {

    // const [categorySelected, setCategorySelected]  = useState(null);
    // const [productSelected, setProductSelected] = useState(null);

    // const handleCategory = (category) =>{
    //   setCategorySelected(category)
    // }

    // const handleProduct = (product) =>{
    //   setProductSelected(product)
    // }
    // console.log(categorySelected);
    // console.log(productSelected);

    const [loaded] = useFonts({
      LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
      Koulen: require('./assets/fonts/Koulen-Regular.ttf'),
    });
    
    if (!loaded) {
      return <ActivityIndicator/>;
    }
    
    
  return (

    <SafeAreaView style={ {flex: 1}}>
      <MainNavigator/>
    </SafeAreaView>


  );
}

