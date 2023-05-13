import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY_BE;

  useEffect(() => {
    axios
      .get(api_key + `/artikel`, {})
      .then((res) => {
        setData(res.data.data[0]);
        setDataById(res.data.data);
        console.log(" sukses", data[0]);
      })
      .catch((err) => {
        console.log(err, "post data fail");
        alert(err.response.data.data);
      });
  }, []);

  return (
    <div>
      <p className="title_list">Kunjungi Artikel lainnya</p>
      {dataById.map((artikelById) => (
        <Link to={`/${artikelById.id}`} className="link">
          <div className="card_news ">
            <img
              src={artikelById.bacgroundphoto}
              alt="list-news"
              className="news"
            />
            <div className="title_List_news">
              <p>{artikelById.title}</p>
              <p className="date">Baca Selengkapnya...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
