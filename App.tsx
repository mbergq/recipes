import * as React from "react";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, Button, Linking } from "react-native";
import { StyledView } from "./styled-components/StyledView";
import FetchData from "./components/FetchData";
import Recipe from "./components/Recipe";
import MyCarousel from "./components/MyCarousel";

type LinkProps = {
  url: string;
  children: string;
};

const FPURL = "https://www.freepik.com/icons/recipe";

const Link = ({ url, children }: LinkProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      //add better error handling here
      alert(`Cannot open URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

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
        onPress={() => navigation.navigate("My Carousel")}
      />
      <Link url={FPURL}>Icon by Iconic Panda</Link>
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
          name="My Carousel"
          component={MyCarousel}
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
