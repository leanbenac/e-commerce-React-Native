import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

const Searcher = ({ children, additionalStyles }) => {
  return ( 
    <View style={{...styles.searcherContainer, ...additionalStyles}}>
      {children}
    </View>
)};

export default Searcher;

const styles = StyleSheet.create({
  searcherContainer: {
      flexDirection: 'row',
    backgroundColor: colors.lightGreen,
    width: "90%",
    marginVertical: 20,
    shadowColor: "#000",
    color: colors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    borderRadius: 10,
    elevation: 16,
  },
});
