import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="container flex flex-col items-center justify-center py-20">
      <h1 className="text-secondary font-extrabold text-9xl pb-10">404</h1>
      <h2 className="font-bold text-[#8aa0b9] text-6xl pb-10 max-[650px]:text-center">
        oops! Page not found
      </h2>
      <p className="text-2xl font-medium text-[#8aa0b9] max-[650px]:text-center">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button className="px-4 py-2 font-bold text-white bg-primary mt-5" onClick={()=>{
        navigate("/")
      }}>
        Trở về trang chủ
      </button>
    </div>
  );
};

export default PageNotFound;
