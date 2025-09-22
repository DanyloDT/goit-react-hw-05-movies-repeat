import React from 'react';
import { useHttp } from '../../Hook/useHttp';
import { getMovieCast } from '../../service/themoviedb-api';
import { useParams } from 'react-router-dom';
import img from '../../images/defaultImg.png';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts] = useHttp(getMovieCast, [], movieId);

  return (
    <>
      {casts.length === 0 ? (
        <h3>We don't have any information about the cast of this movie.</h3>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {casts.map(({ id, profile_path, character = '', name = '' }) => (
            <li
              key={id}
              className="min-h-[500px] flex flex-col justify-between shadow-card"
            >
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : img
                }
                alt={name}
                className="h-full"
              />
              <div className="flex flex-col items-center justify-center gap-[15px] p-5">
                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
