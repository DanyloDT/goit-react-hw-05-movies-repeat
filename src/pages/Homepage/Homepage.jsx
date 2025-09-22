import { getMoviesTrending } from '../../servise/themoviedb-api';
import { Link } from 'react-router-dom';
import { Star, TrendingUp } from 'lucide-react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useHttp } from '../../Hook/useHttp';

const Homepage = () => {
  const [movies] = useHttp(getMoviesTrending, []);

  return (
    <div className=" ">
      <div className="relative mb-12 p-8 rounded-xl dark-gradient overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold hero-gradient text-secondary">
              Popular Movies
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover today's most popular movies. From blockbusters to
            independent films, find your next favorite.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      </div>

      <MoviesList movies={movies} />
    </div>
  );
};

export default Homepage;
