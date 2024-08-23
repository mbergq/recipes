import { FlatList, View, Pressable, Button } from "react-native";
import {
  StyledWrapper,
  StyledListItem,
} from "../styled-components/S.RecipeList";
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
    <StyledWrapper>
      <Pressable
        onPress={() => {
          navigation.navigate("Recipe", { recipeTitle: title });
        }}
        android_disableSound={true}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightgrey" : "papayawhip" },
        ]}
      >
        <StyledListItem>{title}</StyledListItem>
      </Pressable>
    </StyledWrapper>
  );
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} key={item.id} />}
      />
    </>
  );
}

export default RecipeList;
