import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';

const Moviespage = lazy(() => import('./pages/Moviespage/Moviespage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movie" element={<Moviespage />} />
        <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
