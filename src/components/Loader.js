import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const Loader = () => (
  <View style={styles.loader_wrapper}>
    <ActivityIndicator size= {"small"} color={'green'} />
  </View>
);

const styles = StyleSheet.create({
  loader_wrapper: {
    flex: 1, 
    justifyContent: "center",
     alignItems: "center"
  }
})