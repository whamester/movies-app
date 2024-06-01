import MovieContainer from "../containers/MovieContainer";

const MovieDetail = ({ route }) => {
  return (
    <MovieContainer
      id={route?.params?.movieId}
      pageCategory={route?.params?.pageCategory}
    />
  );
}; 

export default MovieDetail;
