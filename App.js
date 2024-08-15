import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { StyledView } from "./styled-components/StyledView";
import FetchData from "./components/FetchData";

function HomeScreen({ navigation }) {
  return (
    <StyledView>
      <StatusBar></StatusBar>
      <Text>Home Screen</Text>
      <Button
        title="Go to Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
    </StyledView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={FetchData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
