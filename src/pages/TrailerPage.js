import React from "react";
import { fetcher } from "config/config";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
const TrailerPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, error } = useSWR(`https://ophim1.com/phim/${slug}`, fetcher);
  const itemMovie = data?.movie || [];

  const loading = !data && !error;
  if (data?.msg == "slug error" || error) return <PageNotFound></PageNotFound>;
  return (
    <div className="container md:max-lg:px-4 max-[650px]:px-4 ">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary  border-t-transparent border-t-4 mx-auto animate-spin "></div>
      )}
      {!loading && (
        <div>
          <div className="flex items-center my-3 gap-x-5">
            <button
              className="fill-[#94a3b8] text-[#94a3b8] flex items-center"
              onClick={() => {
                navigate(`/`);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
              <span className="font-semibold ml-3">Trang chủ</span>
            </button>
            <span className="fill-[#94a3b8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </span>
            <button
              className="text-[#94a3b8] font-semibold "
              onClick={() => {
                navigate(`/danh-sach-phim`);
              }}
            >
              Danh sách phim
            </button>
            <span className="fill-[#94a3b8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </span>
            <span className="text-[#94a3b8] font-semibold">
              {itemMovie.name}
            </span>
          </div>
          {itemMovie.trailer_url !== "" ? (
            <div className="aspect-video">
                  <h1 className="font-bold text-white text-2xl mb-5 ">
                    {itemMovie.name}
                  </h1>
                <iframe src={`https://www.youtube.com/embed/${itemMovie.trailer_url.slice(32)}`} frameborder="0" className="w-full h-full object-cover"></iframe>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-semibold text-white text-2xl ">
                Bộ phim: {itemMovie.name} không có trailer
              </h1>
              <button className="mt-7 font-semibold text-white px-5 py-2 bg-primary" onClick={()=>{
                navigate("/")
              }}>Trở về trang chủ</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrailerPage;
