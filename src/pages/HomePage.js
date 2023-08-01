import MovieCard from "components/movie/MovieCard";
import React from "react";
import { fetcher } from "config/config";
import useSWR from "swr";
const HomePage = () => {
  const { data } = useSWR(
    `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`,
    fetcher
  );
  const movies = data?.items || [];

  return (
    <div className="py-10 grid grid-cols-5 gap-7 container md:max-lg:grid md:max-lg:grid-cols-3 md:max-lg:gap-5 md:max-lg:px-3 max-[650px]:grid max-[650px]:grid-cols-2">
     {movies.length>0 && movies.map(item=>(
        <MovieCard item={item}></MovieCard>
     ))}
    </div>
  );
};

export default HomePage;
