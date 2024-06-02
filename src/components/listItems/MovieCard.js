import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import Button from "../ui/Button";

const MovieCard = ({ image, title, popularity, releaseDate, onClick }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.popularity}>Popularity: {popularity}</Text>
        <Text style={styles.releaseDate}>Release Date: {releaseDate}</Text>
        <Button onPress={onClick}>More Details</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    width: "100%",
    paddingVertical: 2,
    paddingLeft: 20,
    paddingRight: 40,
  },
  content: {
    display: "flex",
    gap: 2,
    flex: 1,
  },
  image: {
    height: 85,
    width: 85,
  },
  title: {
    fontWeight: "bold",
  },
  popularity: {
    fontSize: 12,
    color: colors.gray,
  },
  releaseDate: {
    fontSize: 12,
    color: colors.gray,
  },
});

export default MovieCard;
