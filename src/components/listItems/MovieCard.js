import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import colors from "../../config/colors";

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
        <TouchableHighlight style={styles.button} onPress={onClick}>
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableHighlight>
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
  button: {
    backgroundColor: colors.darkBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    width: "100%",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default MovieCard;
