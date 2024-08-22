import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Carousel from "pinar";

import { FirstView } from "../styled-components/S.MyCarousel";
import ResponsiveImageView from "react-native-responsive-image-view";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

const bgColor = "papayawhip";

const styles = StyleSheet.create({
  slide1: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
  slide2: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
  slide3: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center",
  },
  // text: {
  //   color: "#1f2d3d",
  //   fontSize: 48,
  //   fontWeight: "bold",
  //   opacity: 0.7,
  // },
});

function MyCarousel() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Carousel>
      <View style={styles.slide1}>
        {/* <a href="https://www.freepik.com/icon/cereal-bowl_13332588#fromView=search&page=1&position=0&uuid=3179e358-a359-4fd2-a3b2-87b571963d40">Icon by Meiliastudio</a> */}
        {/* <Text style={styles.text}>1</Text> */}
        <ResponsiveImageView source={require("../assets/cereal-bowl.png")}>
          {({ getViewProps, getImageProps }) => (
            <FirstView {...getViewProps()}>
              <Pressable
                onPress={() =>
                  navigation.navigate("Recipe", {
                    recipeTitle: "Hemgjord Granola",
                  })
                }
              >
                <Image {...getImageProps()} />
              </Pressable>
            </FirstView>
          )}
        </ResponsiveImageView>
      </View>
      <View style={styles.slide2}>
        {/* <a href="https://www.freepik.com/search">Icon by amoghdesign</a> */}
        {/* <Text style={styles.text}>2</Text> */}
      </View>
      <View style={styles.slide3}>
        {/* <Text style={styles.text}>3</Text> */}
      </View>
    </Carousel>
  );
}

export default MyCarousel;
