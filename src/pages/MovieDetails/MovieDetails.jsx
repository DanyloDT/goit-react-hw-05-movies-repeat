import { Link, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader, MessageSquare, Users } from 'lucide-react';

import { MovieDetailsInfo } from '../../components/MovieDetailsInfo/MovieDetailsInfo';
import { useHttp } from '../../Hook/useHttp';
import { getMovieDetails } from '../../servise/themoviedb-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(getMovieDetails, null, movieId);

  if (!movie) {
    return (
      <p className="text-center py-12 text-muted-foreground text-lg">
        The resource you requested could not be found.
      </p>
    );
  }
  return (
    <>
      <MovieDetailsInfo movie={movie} />
      <div className=" mx-auto">
        <h3 className="text-2xl font-bold px-6 text-muted mb-2">
          Additional information
        </h3>
        <ul className="flex gap-4 mb-6 text-lg">
          <li>
            <Link to="cast" className="flex items-center  gap-2">
              <Users className="h-4 w-4 text-primary" />
              Actors
            </Link>
          </li>
          <li>
            <Link to="reviews" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              Reviews
            </Link>
          </li>
        </ul>

        <Suspense
          fallback={<Loader className="absolute size-14 top-1/2 left-1/2" />}
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
