import { Button, Text } from "react-native";
import { useEffect, useState } from "react";

interface RecipeObject {
  id: number;
  name: string;
  description: string;
  ingredients: [{ name: string; amount: string }];
  instructions: [string];
}

function Recipe({ route }) {
  const { recipeTitle } = route.params;
  const [data, setData] = useState(null);
  const [recipe, setRecipe] = useState<RecipeObject>([]);

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
      <Text>{recipeTitle}</Text>
      {recipe.description !== null && <Text>{recipe.description}</Text>}
      <Button title="Test" onPress={() => console.log(recipe)}></Button>
    </>
  );
}

export default Recipe;
