import { Button, FlatList, Text, View, Pressable } from "react-native";
import { StyledListItem } from "../styled-components/S.ListItem";

type Props = { props: { id: number; title: string }[] };

function RecipeList(props: Props) {
  const DATA = props.props;

  type ItemProps = { title: string };
  const Item = ({ title }: ItemProps) => (
    <View>
      <Pressable onPress={() => console.log(DATA)}>
        <StyledListItem>{title}</StyledListItem>
        {/* <StyledListItem>{id}</StyledListItem> */}
      </Pressable>
    </View>
  );
  return (
    <>
      {/* <Button title="Press me" onPress={() => console.log(props)}></Button> */}
      <FlatList
        data={DATA}
        horizontal={false}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </>
  );
}

export default RecipeList;
