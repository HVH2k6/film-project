import Banner from "components/banner/Banner";
import Main from "components/layout/Main";
import ContactPage from "pages/ContactPage";

import DetailMoviePage from "pages/DetailMoviePage";
import HomePage from "pages/HomePage";
import MoviePage from "pages/MoviePage";
import PageNotFound from "pages/PageNotFound";
import TrailerPage from "pages/TrailerPage";
import WacthFilmPage from "pages/WacthFilmPage";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route
            path="/danh-sach-phim"
            element={<MoviePage></MoviePage>}
          ></Route>
          <Route
            path="/phim/:slug"
            element={<DetailMoviePage></DetailMoviePage>}
          ></Route>
          <Route
            path="/lien-he"
            element={<ContactPage></ContactPage>}
          ></Route>
          
          <Route
            path="/xem-phim/:slug"
            element={<WacthFilmPage></WacthFilmPage>}
          ></Route>
          <Route
            path="/xem-trailer/:slug"
            element={<TrailerPage></TrailerPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
