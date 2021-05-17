import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const SplashScreen = ({ navigation }) => {
  const { clearIsLoading } = useContext(AuthContext);

  useEffect(() => {
    clearIsLoading();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tracker App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E6EB",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SplashScreen;
