import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-5 pb-10">
      <div className="container flex items-center justify-center gap-x-5">
        <NavLink className={({ isActive }) => (isActive ? "font-semibold text-primary" : "font-semibold")} to="/">Trang chủ</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "font-semibold text-primary" : "font-semibold")} to="/danh-sach-phim">Phim</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "font-semibold text-primary" : "font-semibold")} to="/lien-he">Liên hệ</NavLink>
      </div>
    </header>
  );
};

export default Header;
