import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getImageUrl } from "../../utils/get-image-url";
import Loading from "../../components/ui/Loading";
import MovieCard from "../listItems/MovieCard";
import Paginate from "../ui/Paginate";

const MoviesList = ({
  movies,
  onClick,
  totalPages,
  setPage,
  paddingBottom = 20,
  isLoading = false,
  emptyMessage = "No content yet",
  page = 1,
}) => {
  return (
    <SafeAreaView>
      {isLoading ? (
        <Loading />
      ) : (
        <View
          style={{
            display: "flex",
            height: "100%",
            paddingBottom: 40,
          }}
        >
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                title={item.title ?? item.name}
                popularity={item.popularity}
                releaseDate={item.release_date ?? item.first_air_date}
                image={getImageUrl(item.poster_path ?? item.backdrop_path)}
                onClick={() =>
                  onClick?.({
                    ...item,
                    title: item.title ?? item.name,
                    release_date: item.release_date ?? item.first_air_date,
                  })
                }
              />
            )}
            ListFooterComponent={() => (
              <View style={{ height: paddingBottom }} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListEmptyComponent={() => (
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{emptyMessage}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <Paginate page={page} total={totalPages} setPage={setPage} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MoviesList;
