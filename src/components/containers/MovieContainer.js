import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getMovie } from "../../services/movies";
import { getImageUrl } from "../../utils/get-image-url";
import Loading from "../ui/Loading";

const MovieContainer = ({ id, pageCategory }) => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovie(id, pageCategory);
      setMovie(data);
      setLoading(false);
    };

    getData();
  }, [id, pageCategory]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{movie.title ?? movie.name}</Text>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: getImageUrl(movie.poster_path),
          }}
        />
      </View>
      <Text>{movie.overview}</Text>

      <Text>
        Popularity: {movie.popularity} | Release Date:{" "}
        {movie.release_date ?? movie.first_air_date}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingVertical: 24,
    alignItems: "center",
    gap: 40,
    paddingHorizontal: 40,
  },
  content: {
    display: "flex",
    gap: 2,
  },
  image: {
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  popularity: {
    fontSize: 12,
  },
  releaseDate: {
    fontSize: 12,
  },
});

export default MovieContainer;
