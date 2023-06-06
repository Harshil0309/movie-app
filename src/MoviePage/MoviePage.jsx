import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviePage() {
  const params = useParams();

  // console.log(params);
  const [moviedetails, setMovieDetails] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const data = await axios(
          `https://api.themoviedb.org/3/movie/${Number(
            params.movieId
          )}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        console.log(data.data);
        setMovieDetails(data.data);
        // console.log(data.data.results);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
        // console.log(error.message);
      }
    };
    fetchlist();
  }, []);

  return (
    <div>
      <Link to="/">Go back to Home Page!!</Link>
      {err != null ? (
        <h3>{err}</h3>
      ) : loading == true ? (
        <h3>Loading, Please Wait!!</h3>
      ) : (
        <div>
          <h3>{moviedetails.original_title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w185/${moviedetails.poster_path}`}
          />
          <h3>Rating: {moviedetails.vote_average}</h3>
          <h3>Released Date: {moviedetails.release_date}</h3>
          <h3>
            Genres:{" "}
            {moviedetails.genres.map((item, index) => {
              return <div key={index + 1}>{item.name} </div>;
            })}
          </h3>
          <div>
            <img
              style={{ width: "60%", height: "60%", opacity: "0.4" }}
              src={`https://image.tmdb.org/t/p/w185/${moviedetails.backdrop_path}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviePage;
