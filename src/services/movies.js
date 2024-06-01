const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a8ae8c3e4566f68c03934934f44ae3a9";

export const getMovies = async (category, screen = "movie", page = 1) => {
  try {
    const url = `${API_URL}/${screen}/${category}?api_key=${API_KEY}&page=${page}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMovie = async (id, screen = "movie") => {
  try {
    const url = `${API_URL}/${screen}/${id}?api_key=${API_KEY}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchMovies = async (category, query) => {
  try {
    const url = `${API_URL}/search/${category}?api_key=${API_KEY}&query=${query}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
