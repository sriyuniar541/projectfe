import React from "react";
import NavbarLandingPage from "../../component/navbar/navbar";
import gizi from "../../aset/gizi (1).jpg";
import skripsi from "../../aset/skripsi.jpg";
import "./pageById.css";
import Footer from "../../component/footer/footer_dian";
import { Link } from "react-router-dom";

const PageDian1 = () => {
  return (
    <div className="bg-light">
      <div className="container cont_landing">
        <NavbarLandingPage />
        <div className="row">
          <div className="col-lg-8 main_content">
            <img src={gizi} alt="bacground" className="bg_landing img-fluid" />
            <h2>Pentingnya Nutrisi untuk Kesehatan</h2>
            <p className="text-secondary author">Author : Dian Wijayanti, A. Md, Rd (Ahli Gizi)</p>
            <div className="content">
              <p>
                Selama beberapa dekade terakhir, di seluruh dunia telah terjadi
                peningkatan prevalensi sindrom metabolik seperti obesitas,
                diabetes, penyakit perlemakan hati, dan kardiovaskular. Dalam
                beberapa tahun terakhir, tren peningkatan sindrom metabolik
                sangat mencolok di negaranegara berkembang yang disebabkan
                perubahan pola makan dan gaya hidup. Pergeseran pola makan dari
                tradisional ke modern dibarengi dengan peningkatan perilaku
                sedentari, yang terjadi seiring dengan modernisasi.
              </p>
              <p>
                Makanan merupakan kombinasi kompleks dari komponen nutrisi dan
                non-nutrisi. Nutrisi diklasifikasikan sebagai makronutrien dan
                mikronutrien. Mikronutrien, yang meliputi vitamin dan mineral,
                dibutuhkan hanya dalam jumlah kecil. Makronutrien, yang meliputi
                karbohidrat, protein, dan lemak, dibutuhkan dalam jumlah besar.
                Kelebihan asupan karbohidrat memicu stres seluler yang mengarah
                pada perkembangan penyakit diabetes mellitus dan perlemakan
                hati. Sedangkan asupan tinggi lemak jenuh merupakan salah satu
                faktor risiko penyakit kardiovaskular.
              </p>
              <p>
                Komponen makanan non-gizi adalah komponen yang tidak dapat
                dikategorikan sebagai makronutrien atau mikronutrien. Zat-zat
                ini termasuk senyawa alami dan sintetis, misalnya serat, senyawa
                polifenol, bahan tambahan pangan, dan pengawet.
              </p>
              <p>
                Nutrisi yang optimal bukan hanya masalah kecukupan energi tetapi
                juga keragaman nutrisi. Makanan olahan merupakan salah satu
                faktor pemicu munculnya sindrom metabolik. Makanan olahan
                memiliki keragaman nutrisi yang buruk dan kandungan energi yang
                berlebihan, sehingga konsumsi makanan olahan dalam jangka
                panjang dapat menyebabkan kekurangan nutrisi dan kelebihan
                energi. Sedangkan konsumsi makanan dengan kepadatan energi
                rendah dan keanekaragaman nutrisi yang tinggi merupakan perilaku
                yang bijaksana untuk meningkatkan fungsi dan kesehatan yang
                optimal.
              </p>
              <p className="text-secondary">
                Referensi Chen Y, Michalak M, Agellon LB. Importance of
                Nutrients and Nutrient Metabolism on Human Health. Yale J Biol
                Med. 2018 Jun 28;91(2):95- 103. PMID: 29955217; PMCID:
                PMC6020734
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <p className="title_list">Kunjungi Artikel lainnya</p>
            {/* {dataById.map((artikelById) => ( */}
            <Link
              to={`/TipsdanTrikbagiMahasiswaAkhirdalamMenyelesaikanSkripsidanProsesPengolahanData`}
              className="link"
            >
              <div className="card_news ">
                <img src={skripsi} alt="list-news" className="news" />
                <div className="title_List_news">
                  <p>
                    Tips dan Trik bagi Mahasiswa Akhir dalam Menyelesaikan
                    Skripsi dan Proses Pengolahan Data
                  </p>
                  <p className="date">Baca Selengkapnya...</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
};

export default PageDian1;
