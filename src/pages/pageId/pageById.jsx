import React, { useEffect, useState } from "react";
import NavbarLandingPage from "../../component/navbar/navbar";
import gambarTes1 from "../../aset/contack-us.png";
import "./pageById.css";
import Footer from "../../component/footer/footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PageById = () => {
  const id = useParams().id
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY_BE;

  const get_artikel_all = (e) => {
    axios
      .get(api_key + `/artikel`, {})
      .then((res) => {
        setData(res.data.data);
        console.log(" sukses", res.data.data);
      })
      .catch((err) => {
        console.log(err, "post data fail");
        alert(err.response.data.data);
      });
  };

  const get_artikel_Id = (e) => {
    axios
      .get(api_key + `/artikel/${id}`, {})
      .then((res) => {
        // setData(res.data.data[0]);
        setDataById((res.data.data)[0]);
        console.log(" sukses", (res.data.data)[0]);
      })
      .catch((err) => {
        console.log(err, "post data fail");
        alert(err.response.data.data);
      });
  };

  useEffect(() => {
    get_artikel_all();
    get_artikel_Id()
  }, [id]);

  return (
    <div className="bg-light">
      <div className="container cont_landing">
        <NavbarLandingPage />
        <div className="row">
          <div className="col-lg-8 main_content">
            <img
              src={dataById.bacgroundphoto}
              alt="bacground"
              className="bg_landing img-fluid"
            />
            <h2>{dataById.title}</h2>
            <div className="content">
              <p>{dataById.maincontent}</p>
              <p>{dataById.content1 != null ? dataById.content1 : ''}</p>
              <h5>{data.titlecontent2 != null ? data.titlecontent2 : ''}</h5>
              <p>{dataById.content2 != null ? dataById.content2 : ''}</p>
              <h5>{dataById.titlecontent3 != null ? dataById.titlecontent3 : ''}</h5>
              <p>{dataById.content3 != null ? dataById.content3 : ''}</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <p className="title_list">Kunjungi Artikel lainnya</p>
            {data.map((artikelById) => (
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
      <Footer id='footer'/>
    </div>
  );
};

export default PageById;
