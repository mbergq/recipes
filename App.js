import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native";
import { StyledView } from "./styled-components/StyledView";
import FetchData from "./components/FetchData";
import Recipe from "./components/Recipe";
import Carousel from "./components/Carousel";

function HomeScreen({ navigation }) {
  return (
    <StyledView>
      <StatusBar></StatusBar>
      <Text>Home Screen</Text>
      <Button
        title="Go to Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
      <Button
        title="Carousel"
        onPress={() => navigation.navigate("Carousel")}
      />
    </StyledView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Recipes App",
            headerStyle: {
              backgroundColor: "papayawhip",
            },
          }}
        />
        <Stack.Screen
          name="Recipes"
          component={FetchData}
          options={{
            headerStyle: {
              backgroundColor: "papayawhip",
            },
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{
            headerStyle: {
              backgroundColor: "papayawhip",
            },
          }}
        />
        <Stack.Screen
          name="Carousel"
          component={Carousel}
          options={{
            headerStyle: {
              backgroundColor: "papayawhip",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
