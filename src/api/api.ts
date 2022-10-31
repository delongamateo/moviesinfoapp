import { useQuery } from "react-query";
import { Genres, Movie, MoviesList } from "./apiTypes";

const apikey = `?api_key=${process.env.REACT_APP_API_KEY}`;

const genresUrl = `${process.env.REACT_APP_BASE_URL}/genre/movie/list${apikey}`;

const moviesByGenreUrl = `${process.env.REACT_APP_BASE_URL}/discover/movie${apikey}&with_genres=`;

const movieUrl = `${process.env.REACT_APP_BASE_URL}/movie/`;

export const useGetGenres = () => {
  const fetchGenresList = async () => {
    const resp = await fetch(genresUrl);
    const data = await resp.json();
    return data as Genres;
  };
  const { data: genresList } = useQuery("genresList", fetchGenresList);
  return genresList;
};

export const useGetMoviesByGenre = (genreID: number) => {
  const fetchMoviesByGenre = async (genreID: number) => {
    const resp = await fetch(`${moviesByGenreUrl}${genreID}`);
    const data = await resp.json();
    return data as MoviesList;
  };
  const { data: moviesByGenreList } = useQuery(
    `moviesByGenreList ${genreID}`,
    () => fetchMoviesByGenre(genreID)
  );
  return moviesByGenreList;
};

export const useGetMovieByID = (enabled: boolean,movieID?: string) => {
  const fetchMovieByID = async (movieID?: string) => {
    const resp = await fetch(`${movieUrl}${movieID}${apikey}`);
    const data = await resp.json();
    return data as Movie;
  };

  const { data: movieByID } = useQuery(
    `movie ${movieID}`,
    () => fetchMovieByID(movieID),
    {
      enabled: enabled,
    }
  );
  return movieByID;
};
