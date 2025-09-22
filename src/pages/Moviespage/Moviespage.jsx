import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../../servise/themoviedb-api';

import MoviesList from '../../components/MoviesList/MoviesList';
import { useHttp } from '../../Hook/useHttp';
import { MovieSearch } from '../../components/MovieSearch/MovieSearch';

const Moviespage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies] = useHttp(getMovie, [], query);

  return (
    <div className="mx-auto">
      <MovieSearch setSearchParams={setSearchParams} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Moviespage;
