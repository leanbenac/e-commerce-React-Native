import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../../Screens/CartScreen';
import { colors } from '../../../styles/colors';
import LocationsScreen from '../../../Screens/LocationsScreen';
import SaveLocationScreen from '../../../Screens/SaveLocationScreen';
import GetLocationScreen from '../../../Screens/GetLocationScreen';
import SetLocationScreen from '../../../Screens/SetLocationScreen';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

const LocationStack = () => {
  return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.darkBlue
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "Koulen",
            fontSize: 28,
          },
          headerTitleAlign: "center",

        }}
      >
        <Stack.Screen
          name= "Locations"
          component={LocationsScreen}
          options={({navigation}) => ({
            title: "Direcciones",
            headerRight: () => {
                return(
                    <TouchableOpacity onPress={()=> navigation.navigate("Save-location")}>
                        <Ionicons name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                )
            }
          })}
        >
        </Stack.Screen> 

        <Stack.Screen
        name="Get-location"
        component={GetLocationScreen}
        options={
          {
            title: "Obtener ubicación"
          }
        }
      />
        <Stack.Screen
            name="Save-location"
            component={SaveLocationScreen}
            options={
                {
                    title: "Guardar dirección"
                }
            }
        />
    <Stack.Screen
        name="Set-location"
        component={SetLocationScreen}
        options={
          {
            title: "Definir una ubicación"
          }
        }
      />
    </Stack.Navigator>
  )
}

export default LocationStack

const styles = StyleSheet.create({})