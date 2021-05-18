import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const clearErrors = navigation.addListener("blur", () => {
      clearErrorMessage();
    });

    return clearErrors;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Signup"
        onSubmit={({ email, password }) =>
          signup({ email, password }, () => navigation.navigate("Home"))
        }
      />
      <NavLink
        text="Already have an account? Signin instead"
        routeName="Signin"
      />
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

export default SignupScreen;
