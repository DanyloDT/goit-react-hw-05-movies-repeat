import React from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../Hook/useHttp';
import { getMovieReviews } from '../../service/themoviedb-api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(getMovieReviews, [], movieId);

  return (
    <>
      {reviews.length === 0 ? (
        <h3>We don't have any reviews for this movie.</h3>
      ) : (
        <ul className="flex flex-col gap-5">
          {reviews.map(({ id, author, content }) => (
            <li className="flex flex-col gap-4" key={id}>
              <h3 className="font-bold text-[20px] text-muted">{`Author: ${author}`}</h3>
              <p className="text-secondary text-base">{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
