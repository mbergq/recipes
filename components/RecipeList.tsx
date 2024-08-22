import { FlatList, View, Pressable } from "react-native";
import { StyledListItem } from "../styled-components/S.ListItem";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

type Props = { props: { id: number; title: string }[] };

function RecipeList(props: Props) {
  const DATA = props.props;
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  type IdProps = { id: number };
  type TitleProps = { title: string };

  const Item = ({ title }: TitleProps, { id }: IdProps) => (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Recipe", { recipeTitle: title })}
      >
        {/* <Button title="Test" onPress={() => console.log(title)}></Button> */}
        <StyledListItem>{title}</StyledListItem>
      </Pressable>
    </View>
  );
  return (
    <>
      {/* <Button title="Press me" onPress={() => console.log(props)}></Button> */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} key={item.id} />}
      />
    </>
  );
}

export default RecipeList;
