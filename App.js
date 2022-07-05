// import { useState } from 'react';
import { ActivityIndicator, StyleSheet } from "react-native";
// import CategoriesScreen from './Screens/CategoriesScreen';
// import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from "expo-font";
// import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./Navigation";
import { Provider } from "react-redux";
import store from "./Store";
import { init } from "./db";

// inicializo con una promesa
init()
  .then(() => {
    console.log("Db initialized");
  })
  .catch((err) => {
    console.log("Error loading db");
    console.log(err.message);
  });

export default function App() {
  const [loaded] = useFonts({
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    Koulen: require("./assets/fonts/Koulen-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    // <SafeAreaView style={ {flex: 1}}>
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    // </SafeAreaView>
  );
}
