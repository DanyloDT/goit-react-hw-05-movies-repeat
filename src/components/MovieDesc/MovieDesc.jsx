import { Calendar, Star } from 'lucide-react';
import React from 'react';
import date from '../../servise/date';
import img from '../../images/defaultImg.png';

export const MovieDesc = ({ movie }) => {
  const {
    title,
    poster_path,
    vote_average,
    name,
    release_date,
    first_air_date,
  } = movie;
  return (
    <>
      <div className="relative group h-full max-h-[370px]">
        <img
          src={
            poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : img
          }
          alt={title}
          width={300}
          height={450}
          className="h-full object-cover transition duration-300 group-hover:scale-[1.01] group-hover:opacity-60"
          loading="lazy"
        />

        <div className="absolute inset-0 transition-transform group-hover:scale-[1.02]  from-black/40 border-6 border-accent opacity-0 group-hover:opacity-100 " />
        {vote_average > 0 && (
          <div className=" absolute top-2 right-2 bg-black/70 group-hover:scale-[1.03] transition-transform text-primary px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            {vote_average.toFixed(1)}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center group justify-center gap-[10px] p-5 ">
        <h3 className="font-semibold text-muted group-hover:scale-[1.02] transition-transform group-hover:text-accent group-hover:underline group-hover:underline-offset-2 text-center text-lg h-14 line-clamp-3">
          {title || name}
        </h3>

        <div className="flex items-center text-secondary text-sm">
          <Calendar className="h-3 w-3 mr-1 " />
          {date(release_date || first_air_date)}
        </div>
      </div>
    </>
  );
};
