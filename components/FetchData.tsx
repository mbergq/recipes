import { ActivityIndicator, ImageBackground } from "react-native";
import {
  ImageBG,
  RecipeWrapper,
} from "../styled-components/S.FetchData.Components";
import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";

interface Data {
  recipes: [
    {
      language: [
        {
          english: {
            id: number;
            name: string;
            description: string;
            ingredients: [{ name: string; amount: string }];
            instructions: [string];
          };
          swedish: {
            id: number;
            name: string;
            description: string;
            ingredients: [{ name: string; amount: string }];
            instructions: [string];
          };
        }
      ];
    },
    {
      language: [
        {
          english: {
            id: number;
            name: string;
            description: string;
            ingredients: [{ name: string; amount: string }];
            instructions: [string];
          };
          swedish: {
            id: number;
            name: string;
            description: string;
            ingredients: [{ name: string; amount: string }];
            instructions: [string];
          };
        }
      ];
    }
  ];
}

function FetchData() {
  const [data, setData] = useState<Data>(null);
  const [recipeNames, setRecipeNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mbergq.github.io/json-recipes/recipes.json"
      );
      const data = await response.json();
      setData(data);
      console.log("Data is fetched");

      let names = [];
      for (let i = 0; i < data.recipes.length; i++) {
        let myObject = {
          id: i,
          title: data.recipes[i].language[0].swedish.name,
        };
        names.push(myObject);
      }
      setRecipeNames(names);
    };
    fetchData();
  }, []);
  return (
    <ImageBG source={require("../assets/granola-cover.jpg")} resizeMode="cover">
      {data !== null ? (
        <RecipeWrapper>
          <RecipeList props={recipeNames} />
        </RecipeWrapper>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </ImageBG>
  );
}
export default FetchData;
