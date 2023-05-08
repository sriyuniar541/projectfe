import React, { useEffect, useState } from "react";
import NavbarLandingPage from "../../component/navbar/navbar";
import gambarTes1 from "../../aset/contack-us.png";
import "./landingPage.css";
import Footer from "../../component/footer/footer";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY_BE;

  const get_artikel_all = (e) => {
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
  };

  useEffect(() => {
    get_artikel_all();
  }, []);

  return (
    <div className="bg-light">
      <div className="container cont_landing">
        <NavbarLandingPage />
        <div className="row">
          <div className="col-lg-8 main_content">
            <img
              // src={data?data.bacgroundphoto : gambarTes1}
              src={gambarTes1}
              alt="bacground"
              className="bg_landing img-fluid"
            />
            <h2>{data.title}</h2>
            <div className="content">
            <p>{data.maincontent}</p>
              <p>{data.content1 != null ? data.content1 : ''}</p>
              <h5>{data.titlecontent2 != null ? data.titlecontent2 : ''}</h5>
              <p>{data.content2 != null ? data.content2 : ''}</p>
              <h5>{data.titlecontent3 != null ? data.titlecontent3 : ''}</h5>
              <p>{data.content3 != null ? data.content3 : ''}</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
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
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
};

export default LandingPage;
