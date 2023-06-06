import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
              Authorization: "Bearer b07d37045fff43fdd7b6e6dbca697741",
            },
          }
        );
        console.log(data.data.results);
        setMovielist(data.data.results);
        setLoading(false);
        // console.log(data.data);
      } catch (error) {
        // console.log(error.message);
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
        movielist.map((item) => {
          return (
            <div>
              <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} />
              <h3>{item.title}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
