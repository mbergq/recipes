import { FlatList, StyleSheet } from "react-native";
import {
  StyledWrapper,
  StyledListItem,
  StyledPressable,
} from "../styled-components/S.RecipeList";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";
import {
  useFonts,
  Allan_400Regular,
  Allan_700Bold,
} from "@expo-google-fonts/allan";

type Props = { props: { id: number; title: string }[] };

const font = StyleSheet.create({
  titleFont: {
    fontFamily: "Allan_400Regular",
  },
});

function RecipeList(props: Props) {
  const DATA = props.props;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  type IdProps = { id: number };
  type TitleProps = { title: string };

  const Item = ({ title }: TitleProps, { id }: IdProps) => (
    <StyledWrapper>
      <StyledPressable
        onPress={() => {
          navigation.navigate("Recipe", { recipeTitle: title });
        }}
        android_disableSound={true}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "lightgrey" : "papayawhip" },
        ]}
      >
        <StyledListItem style={font.titleFont}>{title}</StyledListItem>
      </StyledPressable>
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
