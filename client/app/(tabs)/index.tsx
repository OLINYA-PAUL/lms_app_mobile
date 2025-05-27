import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class index extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#000" }]}>
        <View style={styles.container}>
          <Text style={{ color: "#ffffff" }}> textInComponent </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    width: "100%",
    height: "100%",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
