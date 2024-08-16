import { Text } from "react-native";

function Recipe({ route }) {
  const { recipeTitle } = route.params;
  return <Text>{JSON.stringify(recipeTitle)}</Text>;
}

export default Recipe;
