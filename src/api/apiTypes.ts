export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type Movie = {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type MoviesList = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};
