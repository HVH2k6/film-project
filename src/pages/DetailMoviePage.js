import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { fetcher } from "config/config";
import useSWR from "swr";
import PageNotFound from "./PageNotFound";
const DetailMoviePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, error } = useSWR(`https://ophim1.com/phim/${slug}`, fetcher);

  const itemMovie = data?.movie || [];
  if (data?.msg == "slug error" || error) return <PageNotFound></PageNotFound>;
  const { director, country, category, actor } = itemMovie;
  if (!director || director.length <= 0) return null;
  if (!country || country.length <= 0) return null;
  if (!category || category.length <= 0) return null;
  if (!actor || actor.length <= 0) return null;

  const loading = !data && !error;

  return (
    <div className="container pb-10 md:max-lg:px-3 max-[650px]:px-3">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary  border-t-transparent border-t-4 mx-auto animate-spin "></div>
      )}
      {!loading && (
        <div className="">
          <div className="flex items-center my-3 gap-x-5 flex-wrap">
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
          <div className="flex h-[450px] bg-gray_2 p-3 max-[767px]:flex-col max-[767px]:h-auto">
            <div className="w-[300px] h-full rounded-xl max-[767px]:mx-auto max-[767px]:w-[80%]">
              <img
                src={itemMovie.thumb_url}
                alt=""
                className="w-full object-cover h-[350px] rounded-xl"
              />
              <div className="pt-4 flex gap-5 justify-center items-center">
                <button
                  className="bg-primary px-4 py-2 text-white font-bold"
                  onClick={() => {
                    navigate(`/xem-phim/${itemMovie.slug}`);
                  }}
                >
                  Xem ngay
                </button>
                <button
                  className="bg-secondary px-4 py-2 text-white font-bold"
                  onClick={() => {
                    navigate(`/xem-trailer/${itemMovie.slug}`);
                  }}
                >
                  Trailer
                </button>
              </div>
            </div>
            <div className="ml-3 flex-1 max-[767px]:mt-5">
              <div className="flex flex-col items-center">
                <h1 className="text-secondary font-bold text-2xl mb-2 ">
                  {itemMovie.name}
                </h1>
                <h3 className="text-thirdary ">{itemMovie.origin_name}</h3>
              </div>
              <div className="">
                <table className="w-full text-left border-collapse">
                  <tbody className="align-baseline capitalize">
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Trạng thái
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.episode_current}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Số tập
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.episode_total}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Thời lượng
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.time}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Năm Phát Hành
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.year}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Chất Lượng
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.quality}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Ngôn Ngữ
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {itemMovie.lang}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Đạo diễn
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {director.map((item, index) =>
                          item !== "" ? (
                            <span key={item.name}>
                              {item}
                              {index !== director.length - 1 ? ", " : ""}
                            </span>
                          ) : (
                            "Đang cập nhật"
                          )
                        )}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        diễn viên
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {actor.map((item, index) =>
                          item !== "" ? (
                            <span key={item.name}>
                              {item}
                              {index !== actor.length - 1 ? ", " : ""}
                            </span>
                          ) : (
                            "Đang cập nhật"
                          )
                        )}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Thể loại
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {category.map((item, index) =>
                          item.name !== "" ? (
                            <span key={item.name}>
                              {item.name}
                              {index !== category.length - 1 ? ", " : ""}
                            </span>
                          ) : (
                            "Đang cập nhật"
                          )
                        )}
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 dark:border-slate-400/20">
                      <td className="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400">
                        Quốc gia
                      </td>
                      <td className="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300">
                        {country.map((item) =>
                          item.name != "" ? item.name : "Đang cập nhật"
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-gray_2 p-3">
            <h1 className="w-full py-3 px-5 bg-[#0c4a6e] rounded-2xl font-semibold text-[#258bbc]">
              Nội dung phim
            </h1>
            <p className="pt-5 text-white">
              {itemMovie.content.replace(/<\/?p>/g, "")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMoviePage;
