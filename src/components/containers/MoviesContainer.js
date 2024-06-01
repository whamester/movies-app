import { View } from "react-native";
import MoviesList from "../lists/MoviesList";
import MovieFilter from "../ui/MovieFilter";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import { STREAMING_FILTERS } from "../../config/contants";

const MoviesContainer = ({ navigation, route }) => {
  const pageCategory = route?.params?.category;
  const filterOptions = STREAMING_FILTERS[pageCategory];

  const [category, setCategory] = useState(filterOptions[0]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [movies, setMovies] = useState([]);

  // const [loading, setLoading] = useState(true);
  // Commented this lines out because it works smoother without the loading page

  useEffect(() => {
    const getData = async () => {
      // setLoading(true);

      const data = await getMovies(category, pageCategory, page);
      // setLoading(false);
      Array.isArray(data.results) ? setMovies(data.results) : setMovies([]);
      setTotalPages(data.total_pages ?? undefined);
    };

    getData();
  }, [category, pageCategory, page]);

  return (
    <View style={{ flex: 1 }}>
      <MovieFilter
        options={filterOptions}
        onChange={(value) => {
          setPage(1);
          setCategory(value);
        }}
        renderFilter={(filter) => {
          return (
            <View
              style={{
                width: "100%",
                paddingHorizontal: "20%",
                minWidth: 200,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {filter}
            </View>
          );
        }}
      >
        <MoviesList
          movies={movies}
          // isLoading={loading}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          onClick={({ id, title }) => {
            navigation.navigate("MovieDetail", {
              movieId: id,
              movieTitle: title,
              pageCategory: pageCategory,
            });
          }}
        />
      </MovieFilter>
    </View>
  );
};

export default MoviesContainer;
