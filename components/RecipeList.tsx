import { Button, FlatList, Text, View } from "react-native";

type Props = { props: { id: number; title: string }[] };
function RecipeList(props: Props) {
  const DATA = props.props;

  type ItemProps = { title: string };
  const Item = ({ title }: ItemProps) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <>
      <Button
        title="Press me"
        onPress={() => console.log(props.props)}
      ></Button>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </>
  );
}

export default RecipeList;
