import { Text, View, StyleSheet } from "react-native";
import Carousel from "pinar";

import { FirstView } from "../styled-components/S.MyCarousel";

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297",
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold",
  },
});

function MyCarousel() {
  return (
    <Carousel>
      <FirstView>
        <Text style={styles.text}>1</Text>
      </FirstView>
      <View style={styles.slide2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>3</Text>
      </View>
    </Carousel>
  );
}

export default MyCarousel;
