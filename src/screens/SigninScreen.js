import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const clearErrors = navigation.addListener("blur", () => {
      clearErrorMessage();
    });

    return clearErrors;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In On Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Signin"
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink text="Don't have an account? Signup here" routeName="Signup" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
    padding: 10,
  },
});

export default SigninScreen;
