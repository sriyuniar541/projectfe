import React from "react";
import "./footer.css";

const Footer_jualan = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <h3>Hubungi Saya</h3>
            <p>
              Alamat : Tegal Rt 01/Rw 03, Sumberrejo, Tempel, Sleman, Yogyakarta
            </p>
            <div className="footer_content">
              <p>No Contack : +6289674498437</p>
              <p>Email : trisumasti.r@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Ikuti Saya</h3>
            <div className="sosial_media">
              {/* <a href="https://www.facebook.com/beatric.tynn">Facebook</a> */}
              <a href=" https://instagram.com/beatrictynn">Instagram</a>
              {/* <a href="">Telegram</a>
              <a href="">Twiter</a> */}
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Tautan</h3>
            <div className="footer_content">
              <a href="">Beranda</a>
              <a href="">Artikel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_jualan;
