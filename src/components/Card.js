import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from '../themes/colors';
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    shadowColor: Colors.gray50,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: scale(8),
  },
});

const Card = ({ children, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>{children}</View>
);


export default Card;
