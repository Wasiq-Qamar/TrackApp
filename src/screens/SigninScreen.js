import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  console.log(state);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In On Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Signin"
        onSubmit={({ email, password }) =>
          signin({ email, password }, () => navigation.navigate("Home"))
        }
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
