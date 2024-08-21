import {
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Switch,
} from "react-native";
import {
  StyledTitle,
  StyledDescription,
  StyledIngView,
  StyledInsView,
  StyledText,
  StyledScrollView,
  RecipeLayout,
} from "../styled-components/S.Recipe";
import { useCallback, useEffect, useState } from "react";

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
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onRefresh = useCallback(() => {
    if (data === null) {
      setRefreshing(true);
      console.log("Refreshing..");
    }
    setTimeout(() => {
      setRefreshing(false);
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
      // console.log(data.recipes[matchingIndex].language[0].swedish);
      setRecipe(data.recipes[matchingIndex].language[0].swedish);
    };
    fetchData();
  }, []);

  let instrNumber = 1;

  return (
    <>
      {isEnabled === false ? (
        <StyledScrollView>
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          {data !== null ? (
            <RecipeLayout>
              <StyledTitle>{recipeTitle}</StyledTitle>
              <Image
                style={styles.headerImg}
                source={require("../assets/testimg.jpg")}
              ></Image>
              {recipe.description && (
                <StyledDescription>{recipe.description}</StyledDescription>
              )}
              <StyledIngView>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <StyledDescription>Ingredienser</StyledDescription>
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <Text key={index}>
                      {ingredient.name + "- " + ingredient.amount}
                    </Text>
                  ))}
              </StyledIngView>
              <StyledInsView>
                <StyledDescription>Instruktioner</StyledDescription>
                {recipe.instructions &&
                  recipe.instructions.map((instruction, index) => (
                    <StyledText key={index}>
                      {instrNumber++ + ". " + instruction}
                    </StyledText>
                  ))}
              </StyledInsView>
            </RecipeLayout>
          ) : (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
        </StyledScrollView>
      ) : (
        //focus mode view
        <StyledScrollView>
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          <RecipeLayout>
            <StyledIngView>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text>Focus mode</Text>
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
        </StyledScrollView>
      )}
    </>
  );
}

export default Recipe;
