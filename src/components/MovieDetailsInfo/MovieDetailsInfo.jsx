import { Link, useLocation } from 'react-router-dom';

import { useRef } from 'react';
import { ArrowLeft, Calendar, Clock, Star } from 'lucide-react';
import date from '../../service/date';

export const MovieDetailsInfo = ({ movie }) => {
  const location = useLocation();
  const backLocation = useRef(location?.state?.from);

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}г ${movie.runtime % 60}хв`
    : 'N/A';

  return (
    <div
      className="bg-cover bg-center bg-no-repeat backdrop-opacity-30 mb-8"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-500/60  backdrop-invert backdrop-opacity-10" />
      <div className="relative  mx-auto p-10  flex items-end">
        <Link
          to={backLocation.current || '/'}
          className="absolute top-3 left-5 "
        >
          <button
            type="button"
            className="flex gap-2 justify-center items-center font-medium shadow-sm bg-primary-foreground  hover:bg-primary cursor-pointer py-1.5 px-5 rounded-md "
          >
            <ArrowLeft className="h-4 w-4" />
            back
          </button>
        </Link>
        <div className=" flex gap-10 items-end ">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-64 h-96 object-cover rounded-lg shadow-card"
          />

          <div className="flex-1 space-y-4 ">
            <h1 className="text-5xl font-bold">{movie.title || movie.name}</h1>

            <div className="flex flex-wrap gap-4 text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {date(movie.release_date || movie.first_air_date)}
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {runtime}
              </div>

              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current text-primary" />
                {movie.vote_average.toFixed(1)} ({movie.vote_count} reviews)
              </div>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-1 bg-primary-foreground text-muted rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="text-secondary leading-relaxed max-w-4xl">
              {movie.overview}
            </p>

            {movie.production_companies &&
              movie.production_companies.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-muted mb-2">
                    Production:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.production_companies.slice(0, 3).map((company) => (
                      <span key={company.id} className="text-sm text-secondary">
                        {company.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
