import React from "react";
import Home from "./Home/Home";
import ReactDOM from "react-dom/client";
import MoviePage from "./MoviePage/MoviePage";
import GenreList from "./GenreList/GenreList"
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
      <Route path="/genres" element={<GenreList/>}/>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
