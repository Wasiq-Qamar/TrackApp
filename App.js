import React from "react";
import { StyleSheet, Text, View } from "react-native";

//  NAVIGATION
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//  SCREENS
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

//  CONTEXT
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const Track = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <BottomTab.Navigator headerMode="none">
      <BottomTab.Screen name="Track" component={Track} />
      <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
};

function App() {
  // const isLoggedIn = false;
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
