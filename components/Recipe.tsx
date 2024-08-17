import { Button, Text } from "react-native";
import { useEffect, useState } from "react";
import { RecipeLayout } from "../styled-components/S.RecipeLayout";

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
    <>
      <RecipeLayout>
        {/* <Button title="Test" onPress={() => console.log(recipe.name)}></Button> */}
        <Text>{recipeTitle}</Text>
        {recipe.description && <Text>{recipe.description}</Text>}
        {/* image here */}
        {/* wrap ingredients here */}
        {recipe.ingredients &&
          recipe.ingredients.map((i) => <Text>{i.name + " " + i.amount}</Text>)}
        {/* wrap ingredients here */}
        {/* wrap instructions here */}
        {recipe.instructions &&
          recipe.instructions.map((instruction) => <Text>{instruction}</Text>)}
        {/* wrap instructions here */}
      </RecipeLayout>
    </>
  );
}

export default Recipe;
