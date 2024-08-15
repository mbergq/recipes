import { Button, Text } from "react-native";
import { StyledView } from "./styled-components/StyledView";
import { useEffect, useState } from "react";

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
// use .length to count length of available objects and loop trough each name of recipes
const n = 0;
function Test() {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mbergq.github.io/json-recipes/recipes.json"
      );
      const data = await response.json();
      setData(data);
      console.log("Data is fetched");
    };
    fetchData();
  }, []);
  return (
    <StyledView>
      <Text style={{ color: "red" }}>Recipes</Text>
      {data !== null && <Text>{data.recipes[1].language[0].swedish.name}</Text>}
      <Button
        title="Data"
        onPress={() => {
          console.log(data.recipes);
        }}
      ></Button>
    </StyledView>
  );
}
export default Test;
