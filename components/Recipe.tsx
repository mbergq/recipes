import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import {
  StyledTitle,
  StyledDescription,
  StyledIngView,
  StyledInsView,
  StyledText,
  StyledScrollView,
  RecipeLayout,
} from "../styled-components/S.Recipe";

const styles = StyleSheet.create({
  headerImg: {
    height: 220,
    width: 220,
  },
});

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: [{ name: string; amount: string }];
  instructions: [string];
}

function Recipe({ route }) {
  const { recipeTitle } = route.params;
  const [data, setData] = useState(null);
  const [recipe, setRecipe] = useState<Recipe>(Object);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    if (data === null) {
      setRefreshing(true);
      console.log("Refreshing..");
    }
    setTimeout(() => {
      setRefreshing(false);
      // alert("Refresh");
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mbergq.github.io/json-recipes/recipes.json"
      );
      const data = await response.json();
      setData(data);
      console.log("Data is fetched");
      // data.recipes[0].language[0].swedish.name === recipeTitle
      let matchingIndex;
      for (let i = 0; i < data.recipes.length; i++) {
        if (data.recipes[i].language[0].swedish.name === recipeTitle) {
          matchingIndex = i;
          console.log("Index is: " + matchingIndex);
        }
      }
      console.log(data.recipes[matchingIndex].language[0].swedish);
      setRecipe(data.recipes[matchingIndex].language[0].swedish);
    };
    fetchData();
  }, []);

  let instrNumber = 1;

  return (
    <StyledScrollView>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      {data !== null ? (
        <RecipeLayout>
          {/* <Button title="Test" onPress={() => console.log(recipe.name)}></Button> */}
          <StyledTitle>{recipeTitle}</StyledTitle>
          <Image
            style={styles.headerImg}
            source={require("../assets/testimg.jpg")}
          ></Image>
          {recipe.description && (
            <StyledDescription>{recipe.description}</StyledDescription>
          )}
          <StyledIngView>
            <StyledDescription>Ingredienser</StyledDescription>
            {recipe.ingredients &&
              recipe.ingredients.map((i) => (
                <Text>{i.name + "- " + i.amount}</Text>
              ))}
          </StyledIngView>
          <StyledInsView>
            <StyledDescription>Instruktioner</StyledDescription>
            {recipe.instructions &&
              recipe.instructions.map((instruction) => (
                <StyledText>{instrNumber++ + ". " + instruction}</StyledText>
              ))}
          </StyledInsView>
        </RecipeLayout>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </StyledScrollView>
  );
}

export default Recipe;
