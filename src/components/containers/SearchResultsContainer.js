import { StyleSheet, Text, TextInput, View } from "react-native";
import MovieFilter from "../ui/MovieFilter";
import MoviesList from "../lists/MoviesList";
import colors from "../../config/colors";
import { useCallback, useState } from "react";
import { searchMovies } from "../../services/movies";
import Button from "../ui/Button";

const filterOptions = ["multi", "movie", "tv"];

const SearchResultsContainer = ({ navigation }) => {
  const [category, setCategory] = useState(filterOptions[0]);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const getData = async (category, search) => {
    const data = await searchMovies(category, search);
    setQuery("");
    Array.isArray(data.results) && setMovies(data.results);
    setTotalPages(data.total_pages ?? undefined);
  };

  const onSearchClick = useCallback(() => {
    if (!query || !category) {
      setError("Movie/TV show name is required");
      return;
    }

    setError();
    getData(category, query);
  }, [category, query]);

  return (
    <View style={{ flex: 1 }}>
      <MovieFilter
        options={filterOptions}
        onChange={setCategory}
        error={error}
        renderFilter={(filter) => {
          return (
            <View style={styles.filter}>
              <Text>Search Movie/TV Show Name * </Text>
              <TextInput
                value={query}
                placeholder="i.e. James Bond, CSI"
                style={{
                  ...styles.input,
                  ...(!!error ? styles.inputError : {}),
                }}
                onChangeText={setQuery}
              />
              <Text>Choose Search Type * </Text>
              <View style={styles.filterButtonContainer}>
                <View style={{ flex: 1 }}>{filter}</View>

                <Button onPress={onSearchClick}>Search</Button>
              </View>
              <Text style={{ display: error ? "flex" : "none", color: "red" }}>
                {error}
              </Text>
            </View>
          );
        }}
      >
        <MoviesList
          movies={movies}
          paddingBottom={120}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          onClick={({ id, title }) => {
            navigation.navigate("MovieDetail", {
              movieId: id,
              movieTitle: title,
            });
          }}
          emptyMessage="Please initiate a search"
        />
      </MovieFilter>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    backgroundColor: colors.lightGray,
    padding: 6,
    borderRadius: 4,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
  filter: {
    width: "100%",
    paddingHorizontal: "20%",
    minWidth: 200,
    display: "flex",
    gap: 4,
  },
  filterButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
});

export default SearchResultsContainer;
