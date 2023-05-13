import React from "react";
import "./footer.css";

const Footer_dian = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <h3>Hubungi Saya</h3>
            <p>
              Alamat : Sanggrahan RT 04 RW 16 Tlogoadi, Mlati, Sleman, Daerah
              Istimewa Yogyakarta
            </p>
            <div className="footer_content">
              <p>No Contack : +6281326018016</p>
              <p>Email : dianwijayanti077@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Ikuti Saya</h3>
            <div className="sosial_media">
              <a href="https://www.facebook.com/profile.php?id=100064115947784&mibextid=ZbWKwL">
                Facebook
              </a>
              {/* <a href="">Instagram</a>
              <a href="">Telegram</a>
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

export default Footer_dian;
