import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [movielist, setMovielist] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const data = await axios(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        setMovielist(data.data.results);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
      }
    };
    fetchlist();
  }, []);

  return (
    <div>
      <h3>Home</h3>
      {err != null ? (
        <h4>{err}</h4>
      ) : loading == true ? (
        <h3>Loading</h3>
      ) : (
        movielist.map((item, index) => {
          return (
            <div key={index + 1}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                />
              </div>
              <div>
                <Link to={`/movie/${item.id}`}>{item.title}</Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
