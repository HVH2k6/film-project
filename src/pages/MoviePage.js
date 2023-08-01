import MovieCard from "components/movie/MovieCard";
import React, { useEffect, useState } from "react";
import { fetcher } from "config/config";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;

const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const { data, error } = useSWR(
    `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${nextPage}`,
    fetcher
  );
    
  const movies = data?.items || [];
  useEffect(() => {
    if (!data || !data.pagination.totalItems) return;
    setPageCount(Math.ceil(data?.pagination.totalPages));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  const loading = !data && !error;

  return (
    <div className="container max-[650px]:px-4">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary  border-t-transparent border-t-4 mx-auto animate-spin "></div>
      )}
      {!loading && (
        <div className="">
        <h1 className="font-bold text-3xl text-white py-5">
          Danh sách phim
        </h1>
          <div className="py-10 grid grid-cols-5 gap-7 md:max-lg:grid md:max-lg:grid-cols-3 md:max-lg:gap-5 md:max-lg:px-3 max-[650px]:grid max-[650px]:grid-cols-2">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieCard item={item} key={item._id}></MovieCard>
              ))}
          </div>
          <div className="mt-10 paginate_page md:max-lg:pb-5 ">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              }
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
