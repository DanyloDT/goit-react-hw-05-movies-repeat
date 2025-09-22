import { Star } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieDesc } from '../MovieDesc/MovieDesc';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies && movies.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <li key={movie.id} className="min-h-[500px]  shadow-card">
              <Link
                to={`/movie/${movie.id}`}
                state={{ from: location }}
                className="h-full flex flex-col justify-between"
              >
                <MovieDesc movie={movie} variant="home" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center py-12 text-muted-foreground text-lg">
          There are currently no movies available.
        </p>
      )}
    </>
  );
};

export default MoviesList;
