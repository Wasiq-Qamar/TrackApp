import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={{ alignSelf: "center" }}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Spacer>
          <Text style={styles.error}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default AuthForm;
