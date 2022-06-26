import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../../Screens/CategoriesScreen';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreen from '../../../Screens/DetailScreen';
import { colors } from '../../../styles/colors';


const Stack = createNativeStackNavigator ();

function ShopNavigator () {
    return (

        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
              headerStyle:{
                backgroundColor: colors.darkBlue
              },
              headerTintColor: "white",
              headerTitleStyle:{
                fontFamily: "Koulen",
                fontSize: 26,
              },
              headerTitleAlign: "center",

            }}
        >
          <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options ={{
            title: "Categorias"
          }} 
          />
          <Stack.Screen 
          name="Products" 
          component={ProductsScreen}
          options={({route}) => ({
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor: route.params.categoryTitle === "Cool" ? colors.lightBlue :
              route.params.categoryTitle === "Animals" ? "black" : colors.darkBlue,
            }
          })
          } 
          />
          <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={ ({route}) => ({
            title: route.params.productTitle,
            // headerTintColor: 'red',

          })
          } 
          />
        </Stack.Navigator>

    );
  }

export default ShopNavigator;

const styles = StyleSheet.create({})
