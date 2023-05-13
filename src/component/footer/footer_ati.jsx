import React from "react";
import "./footer.css";

const Footer_ati = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <h3>Hubungi Saya</h3>
            <p>
              Alamat : Jln Parry, lorong ebenhaezer rumah tiga pantai Rt 002/Rw
              004, Kecamatan Teluk Ambon, Kelurahan Rumahtiga kode pos 97234
            </p>
            <div className="footer_content">
              <p>No Contack : +6285280033852</p>
              <p>Email : beatrictayanan7@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Ikuti Saya</h3>
            <div className="sosial_media">
              <a href="https://www.facebook.com/beatric.tynn">Facebook</a>
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

export default Footer_ati;
