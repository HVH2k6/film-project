import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[350px] rounded-xl p-2 bg-[#312f34] "
      key={item._id}
    >
      <img
        src={`https://ophim8.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${item.thumb_url}&w=192&q=75`}
        alt=""
        className="w-full h-[250px] object-cover"
      />
      <h2 className="my-2 text-white text-ellipsis overflow-hidden whitespace-nowrap">{item.name}</h2>
      <button className="w-full py-2 bg-primary font-bold text-white" onClick={()=>{
        navigate(`/phim/${item.slug}`)
      }}>
        Xem ngay
      </button>
    </div>
  );
};

export default MovieCard;
