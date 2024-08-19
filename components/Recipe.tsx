import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { RecipeLayout } from "../styled-components/S.RecipeLayout";
import {
  StyledTitle,
  StyledDescription,
  StyledIngView,
  StyledInsView,
} from "../styled-components/S.Recipe";

const styles = StyleSheet.create({
  headerImg: {
    width: 100,
    height: 122,
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
  return (
    <ScrollView>
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
                <Text>{instruction}</Text>
              ))}
          </StyledInsView>
        </RecipeLayout>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </ScrollView>
  );
}

export default Recipe;
