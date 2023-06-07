import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GenreList() {
  const [genrelist, setGenreList] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const data = await axios(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDdkMzcwNDVmZmY0M2ZkZDdiNmU2ZGJjYTY5Nzc0MSIsInN1YiI6IjYyYzViOGI4ZTg2MDE3MDBkMmU1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STosxagdr6iiV_JiUuqY9IVf57n1I2C4yhfqz8iXfjU",
            },
          }
        );
        setGenreList(data.data.genres);
        // console.log(data.data.genres);
        setLoading(false);
      } catch (error) {
        setErr(error.message);
      }
    };
    fetchlist();
  }, []);

  return (
    <div>
      <h3>List of Genres</h3>
      <div>
        {genrelist.map((item, index) => {
          return (
            <div key={index + 1}>
              {index + 1}) {item.name}
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <Link to="/">Go back to Home Page!!</Link>
    </div>
  );
}

export default GenreList;
