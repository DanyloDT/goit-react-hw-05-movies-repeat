import axios from 'axios';

const API_KEY = 'b839a339e6403065af3bc248bb23e5e8';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b839a339e6403065af3bc248bb23e5e8',
  },
});

export const getMoviesTrending = async () => {
  const { data } = await instance.get(`/trending/all/week`);

  return data.results;
};

export const getMovie = async (query) => {
  const { data } = await instance.get(`/search/movie`, { params: { query } });

  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`);

  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);

  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);

  return data.results;
};
