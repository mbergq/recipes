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
    }
  ];
}

function Test() {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mbergq.github.io/json-recipes/recipes.json"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <StyledView>
      <Text style={{ color: "red" }}>Recipes</Text>
      {<Text>{data.recipes[0].language[0].swedish.name}</Text>}
      <Button
        title="Data"
        onPress={() => console.log(data.recipes[0].language[0].swedish)}
      ></Button>
    </StyledView>
  );
}
export default Test;
