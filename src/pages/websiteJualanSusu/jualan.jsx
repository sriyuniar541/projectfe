import React from "react";
import profile from "../../aset/IMG-20230524-WA0009-removebg-preview.png";
import whatshaap from "../../aset/whatshaap.png";
import milk from "../../aset/susu.png";
import milk_bacground from "../../aset/susu (2).png";
import "./jualan.css";
import manfaat_1 from "../../aset/manfaat (2).png";
import manfaat_2 from "../../aset/manfaat (3).png";
import manfaat_3 from "../../aset/manfaat (4).png";
import "./jualan.css";
import manfaat_4 from "../../aset/manfaat (5).png";
import "./jualan.css";
import manfaat_6 from "../../aset/manfaat (7).png";
import "./jualan.css";
import manfaat_7 from "../../aset/manfaat (1).png";
import "./jualan.css";
import manfaat_8 from "../../aset/manfaat (8).png";
import "./jualan.css";
import manfaat_5 from "../../aset/manfaat (6).png";
import "./jualan.css";

import "./jualan.css";
import Footer_jualan from "../../component/footer/footer_jualan";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "../../component/navbar/navbar_jualan";

const Jualan = () => {
  return (
    <div className="page_jualan">
      <div className="navbar_jualan">
        <Navbar />
      </div>
      <div className=" container jualan">
        <div className="row">
          <div className=" col-lg-6 col-10  card_bacground_2 offset-lg-0 offset-1">
            <div>
              <h2>Awali Hari Sehatmu degan Satu Gelas Susu kambing</h2>
              <div className="image_hp"></div>
              <p>
                Mengapa? karena susu kambing mengandung zat gizi yang lengkap
                meliputi karbohidrat, vitamin, mineral, elektrolit, unsur
                kimiawi, protein, asam lemak esensial yang bermanfaat bagi tubuh
                cocok untuk siapa saja, mulai dari anak-anak, remaja, orang
                dewasa hingga usila
              </p>
              <a href="#manfaat">
                <button className="learn_more">Learn More</button>
              </a>
            </div>
          </div>
          <div className="card_bacground col-lg-6 col-10 offset-lg-0 offset-1">
            <img
              src={milk_bacground}
              alt="bacground_susu"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="about col-lg-6 offset-lg-3" id="about">
        <img src={profile} alt="card_1" className="img-fluid" />
        <p>
          Susu kambing adalah makanan paling lengkap yang diketahui. Ia
          mengandung vitamin, mineral, elektrolit, unsur kimiawi, enzim,
          protein, dan asam lemak yang mudah dimanfaatkan tubuh . Bahkan, tubuh
          kita dapat mencerna susu kambing hanya dalam 20 menit. Bandingkan
          dengan 2-3 jam yang dibutuhkan untuk mencerna susu sapi.
        </p>
        <div className="author_jualan">
          <p>Di Rangkum Oleh : </p>
          <p className="text-secondary">Tri Sumasti R, S. Gz. RD</p>
        </div>
        {/* <a href="https://wa.me/+6289674498437?text=Saya%ingin%konsultasi%lebih%lanjut%">
        <button className="btn_whatshaap">
        <img src={whatshaap} alt="whatshaap" className=" img-fluid" />
           Chat via Whatshapp
         </button> </a> */}
      </div>
      <div className="container manfaat" id="manfaat">
        <div className="list_manfaat col-10">
          <h2>MANFAAT</h2>
          <Accordion defaultActiveKey="">
            <Accordion.Item className="acordion" eventKey="0">
              <Accordion.Header>
                <img src={manfaat_1} alt="manfaat_1" />
                Baik untuk jantung
              </Accordion.Header>
              <Accordion.Body>
                Susu kambing diketahui mengandung asam lemak tak jenuh tunggal
                maupun ganda, serta trigliserida rantai sedang (MCT) yang cukup
                potensial daripada susu sapi. Berkat kandungan tersebut, manfaat
                susu kambing lainnya adalah dapat membantu mencegah penyakit
                kardiovaskular, seperti aterosklerosis, serangan jantung,
                stroke, dan penyakit jantung koroner. Susu kambing punya
                kandungan kalium, yaitu mineral penting yang dibutuhkan tubuh.
                Tertulis bahwa pada takaran 100 mililiter, jumlah kalium pada
                susu kambing mencapai 160 miligram. Kalium pada susu kambing
                ternyata dapat menjaga tekanan darah tetap stabil. Caranya,
                dengan mengurangi kadar natrium dalam tubuh. Kadar natrium yang
                berlebihan dapat memicu naiknya tekanan darah. Semakin tinggi
                tekanan darah, jantung yang bertugas untuk memompa darah tentu
                harus bekerja lebih keras. Sebaliknya, jika tekanan darah lebih
                terkendali, kesehatan jantung tentu akan lebih terjaga. susu
                kambing mengandung kadar magnesium yang tinggi yang bermanfaat
                untuk kesehatan jantung. Magnesium di dalamnya akan menjaga
                detak jantung normal dan mencegah kumpulan gumpalan darah yang
                meningkatkan level kolesterol. Selain itu, magnesium juga akan
                bekerja sama dengan Vitamin D yang sangat penting untuk
                kesehatan jantung. Jumlah magnesium dalam susu kambing etawa
                bahkan ditemukan lebih banyak daripada dalam susu sapi. Susu
                kambing juga mengandung lemak tetapi lebih mudah diserap karena
                memiliki butiran lemak yang lebih kecil walaupun bentuknya mirip
                seperti kandungan lemak susu sapi. Lemak yang ada dalam susu
                kambing memiliki asam lemak esensial yang tinggi seperti
                linoleat dan arakidonat. Kedua asam lemak tersebut menjadi
                sumber energi yang cepat dibakar dan tidak disimpan dalam tubuh
                menjadi lemak. Karena itu, pengendapan kolesterol jadi
                berkurang. Hal ini sekaligus juga akan membantu mengurangi
                risiko terkena penyakit jantung. Susu kambing diyakini dapat
                mengurangi kadar kolesterol terutama pada arteri dan kantong
                empedu. Hal ini baik untuk orang yang memiliki kadar kolesterol
                tinggi, sehingga mereka bisa mengatur tingkat kolesterol lebih
                baik. Susu kambing mengandung enzim xantin oksidase dalam jumlah
                terbatas. Enzim ini diyakini dapat menyebabkan masalah pada
                jantung ketika memasuki aliran darah. Karena itu, konsumsi susu
                kambing dapat memperkecil risiko aterosklerosis atau penyempitan
                pembuluh darah oleh karena penumpukan kolesterol, lemak, atau
                kalsium.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="1">
              <Accordion.Header>
                <img src={manfaat_2} alt="manfaat_2" />
                Menjaga kesehatan sel tubuh
              </Accordion.Header>
              <Accordion.Body>
                Selain membantu mengendalikan tekanan darah, kalium pada susu
                kambing ditemukan pada banyak sel tubuh, misalnya sel otot, sel
                darah merah, organ hati, dan tulang. Itu artinya, sel di dalam
                tubuh akan bekerja dengan baik jika asupan kalium tercukupi.
                Bukan hanya kalium, susu kambing juga mengandung asam amino
                triptofan. Kenyataannya, protein dan kalsium di dalam susu
                kambing jenis ini lebih banyak kadarnya jika dibandingkan dengan
                susu sapi Tidak hanya membantu menjaga kesehatan saraf, asam ini
                juga berperan dalam pembentukan hormon serotonin, yaitu hormon
                yang mengatur suasana hati.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="2">
              <Accordion.Header>
                <img src={manfaat_3} alt="manfaat_3" />
                Mendukung kesehatan sistem pencernaan
              </Accordion.Header>
              <Accordion.Body>
                susu kambing tidak mengandung aglutinin. Akibatnya globula lemak
                susu kambing tidak mengalami klusterisasi, sehingga lebih mudah
                dicerna hal ini disebabkan karena Molekul-molekul lemaknya hanya
                sebesar 1/9 ukuran molekul susu sapi. Susu kambing memiliki
                jumlah protein yang lebih banyak daripada susu sapi biasa, susu
                kedelai, atau susu kacang. Meskipun lebih banyak secara
                kuantitas, tapi kandungan protein dalam susu kambing lebih mudah
                dicerna sehingga memberikan manfaat yang lebih cepat bagi tubuh.
                Disatu sisi, di dalam perut kita terdapat bakteri baik yang
                membantu pencernaan. Namun, jumlah bakteri baik ini tergantung
                dengan jenis makanan yang Anda konsumsi. Susu kambing memiliki
                karbohidrat yang bersifat prebiotik. Kandungan karbohidrat
                prebiotik dalam susu kambing ini disebut oligosaccharides, yang
                merupakan jenis karbohidrat yang sama dengan yang ada dalam susu
                manusia. Keunggulan prebiotik yaitu merupakan makanan untuk si
                bakteri baik. Jika jumlah bakteri baik dalam tubuh normal atau
                bahkan meningkat, maka proses metabolisme tubuh akan lebih baik.
                Bakteri tersebut nantinya akan membantu kerja usus untuk
                mencerna makanan dan melawan bakteri jahat. Itu artinya, susu
                kambing memiliki manfaat untuk menjaga kesehatan pencernaan..
                Karbohidrat prebiotik ini bisa mendukung perkembangan bakteri
                baik dalam sistem pencernaan dan sangat bermanfaat bagi manusia.
                Perkembangan bakteri sistem pencernaan yang baik ini akan
                mendukung sistem kekebalan tubuh dan mampu melawan inflamasi,
                khususnya yang terjadi pada sistem pencernaan.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="3">
              <Accordion.Header>
                <img src={manfaat_4} alt="manfaat_4" />
                Melawan inflamasi
              </Accordion.Header>
              <Accordion.Body>
                Jika kita mengalami gangguan kesehatan yang disebabkan oleh
                inflamasi atau peradangan dan alergi, maka minum susu kambing
                etawa merupakan salah satu solusinya Pasalnya, mikrobiota yang
                ada dalam susu kambing ini bisa memicu respon imun dalam tubuh
                yang lebih baik dan kemudian melawan peradangan secara alami.
                Menyambung manfaat soal intoleransi laktosa, susu kambing juga
                memiliki kelebihan yakni mengandung kasein A2. Kandungan ini
                membuat susu kambing memiliki protein mirip ASI dan tidak
                menyebabkan peradangan pada anak, seperti radang usus atau
                irritable bowel syndrome.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="4">
              <Accordion.Header>
                <img src={manfaat_5} alt="manfaat_5" />
                Meningkatkan pH dalam tubuh yang memperkuat kekebalan tubuh
              </Accordion.Header>
              <Accordion.Body>
                pH atau potential Hydrogen merupakan tingkat asam atau basa
                dalam suatu zat. Bukan hanya pada makanan atau minuman, tubuh
                kita juga memiliki standar pH normal yaitu 7 – 7,4. Namun,
                sejumlah masalah kesehatan dapat membuat tubuh Anda terlalu
                asam. Kadar keasaman pada tubuh yang tidak ideal bisa melemahkan
                sistem kekebalan tubuh sehingga membuat kita mudah jatuh sakit.
                Untuk menstabilkan tingkat pH dalam tubuh, kita perlu
                mengontrolnya dengan asupan makanan dan minuman. Salah satu
                caranya yaitu dengan mengonsumsi susu kambing. Susu ini
                mengandung asam amino L glutamin yang sifatnya basa (alkali)
                sehingga membantu menormalkan kembali pH tubuh yang asam dan
                meningkatkan sistem imun manusia. Kekebalan tubuh yang kuat
                adalah salah satu kunci untuk bisa hidup sehat. Untungnya di
                dalam susu ini juga terdapat selenium, yang merupakah salah satu
                zat yang penting dalam sistem imun. Sebetulnya selenium juga
                ditemukan dalam susu sapi, akan tetapi lebih sedikit daripada di
                susu kambing.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="5">
              <Accordion.Header>
                <img src={manfaat_6} alt="manfaat_6" />
                Membantu tidur lebih nyenyak
              </Accordion.Header>
              <Accordion.Body>
                Asam amino triptofan yang terkandung pada susu kambing akan
                membantu tubuh memproduksi hormon serotonin. Hormon ini tidak
                hanya berfungsi untuk mengatur suasana hati, tapi juga
                merangsang bagian otak yang mengendalikan waktu bangun dan
                tidur. Jika tubuh Anda tahu kapan waktu bangun dan tidur dengan
                baik, tentu siklus tidur Anda akan membaik. Anda bisa memulai
                tidur dengan mudah dan tidur sepanjang malam
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="6">
              <Accordion.Header>
                <img src={manfaat_7} alt="manfaat_7" />
                Manfaat susu kambing untuk kulit
              </Accordion.Header>
              <Accordion.Body>
                Ternyata, asam lemak yang terkandung dalam susu kambing tidak
                hanya baik untuk mengurangi risiko penyakit jantung, tapi juga
                baik untuk menjaga kesehatan kulit. Kadar asam laktat di
                dalamnya juga bisa membantu membersihkan tubuh dari sel kulit
                mati dan mencerahkan warna kulit Anda. Maka itu, tak heran bila
                banyak tersedia produk skincare yang menggunakan susu kambing
                sebagai salah satu bahan utamanya. Selain manfaat untuk bagian
                dalam tubuh, susu kambing juga memberikan manfaat bagi luar
                tubuh. Kulit akan menjadi lebih cerah dan lembab jika
                mengkonsumsi susu kambing secara rutin. Hal ini terjadi karena
                adanya kandungan asam lemak dan trigliserida. Vitamin A yang
                tinggi dalam susu kambing juga berguna untuk melawan jerawat dan
                memperbaiki warna kulit. Tidak heran jika susu kambing kerap
                dijadikan salah satu remedi untuk jerawat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="acordion" eventKey="7">
              <Accordion.Header>
                <img src={manfaat_8} alt="manfaat_1" />
                Mencegah Pengeroposan Tulang, nyeri sendi dan Anemia
              </Accordion.Header>
              <Accordion.Body>
                Tak hanya untuk anak-anak dan orang dewasa, susu kambing ini
                juga cocok untuk dikonsumsi lansia. Pasalnya, ia bisa
                mempercepat regenerasi hemoglobin, yang kemudian membuatnya
                menjadi cara yang aman dan alami untuk mengatasi masalah
                pengeroposan tulang dan juga anemia. Berkat kandungan seng yang
                tinggi dan selenium di dalamnya juga bisa mencegah penyakit
                neurodegeneratif. Susu kambing diketahui memiliki manfaat yang
                potensial dalam menjaga serta menguatkan tulang dan gigi. Hal
                ini terjadi karena susu kambing mengandung kalsium yang cukup
                banyak. Dalam satu gelas susu kambing (± 235 ml) terdapat
                sekitar 330 mg kalsium. Susu kambing juga relatif rendah sodium
                dan karbohidrat, serta tinggi protein dan kalsium. Dalam satu
                gelas susu kambing mengandung sekitar delapan gram protein dan
                30 persen dari nilai harian kalsium yang disarankan. Selain
                mengandung kalsium, susu juga kaya akan protein, lemak, dan
                karbohidrat sekaligus. Karbohidrat pada susu yang memengaruhi
                gula darah adalah laktosa. Laktosa merupakan gula alami yang
                membuat susu menjadi terasa manis. Kandungan laktosa pada susu
                dapat mencapai 40% dari total seluruh kalori yang terdapat pada
                susu. Di dalam tubuh Anda, terdapat enzim bernama laktase yang
                mengubah laktosa menjadi glukosa dan galaktosa. Namun, proses
                mengubah laktosa menjadi glukosa membutuhkan waktu yang lebih
                lama dibandingkan jenis gula lainnya. Maka dari itu, susu
                tergolong memiliki indeks glikemiks (IG) yang rendah, yaitu
                sekitar 39. Artinya, gula darah akan lebih lama naiknya bila
                Anda mengonsumsi susu dibandingkan dengan sumber karbohidrat
                lain yang punya nilai IG lebih besar. Nah, dalam satu gelas susu
                mengandung setidaknya 12 gram karbohidrat. Ini setara dengan
                kebutuhan karbohidrat satu kali makan. Ada hal lain yang perlu
                untuk diperhatikan sebelum kita minum susu kambing. Menurut
                penelitian, susu ini dapat mendetoksifikasi tubuh atau
                mengeluarkan racun dalam tubuh. Setelah diminum, tubuh akan
                menimbulkan gejala yang mirip dengan intoleransi laktosa,
                seperti mual, diare, dan perut kembung. Untungnya, gejala ini
                akan membaik dengan cepat. Jika tidak, kemungkinan besar ini
                merupakan gejala intoleransi laktosa. Susu ini dapat diminum di
                pagi hari untuk sumber energi untuk mengawali hari, sebelum atau
                sesudah olahraga, serta di malam hari untuk membantu tidur lebih
                nyenyak. Jangan lupa untuk memastikan bahwa susu kambing yang
                Anda konsumsi sudah melewati proses pasteurisasi, sehingga
                keamanannya lebih terjamin.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="container kandungan_gizi" id="kandungan">
        <div className="zat_gizi">
          <h2>KANDUNGAN ZAT GIZI</h2>
          <img src={milk} alt="card_1" className="img-fluid" />
          <ul>
            <li>Air: 85,9 gram</li>
            <li>Energi: 64 kalori</li>
            <li>Protein: 4,3 gram</li>
            <li>Lemak: 2,3 gram</li>
            <li>Karbohidrat: 6,6 gram</li>
            <li>Kalsium: 98 miligram</li>
            <li>Fosfor: 78 miligram</li>
            <li>Besi: 2,7 miligram</li>
            <li> Natrium: 35 miligram</li>
            <li>Kalium: 160 miligram</li>
          </ul>
        </div>
      </div>
      <div className="container col-lg-6 whatshap_card">
        <div>
          <h2>Punya pertanyaan lebih lanjut?</h2>
          <p>klik link dibawah ini untuk konsultasi gratis..!</p>
          <a href="https://wa.me/+6289674498437?text=Saya%20ingin%20konsultasi%20lebih%20lanjut">
            <button className="btn_whatshaap">
              <img src={whatshaap} alt="whatshaap" className=" img-fluid" />
              Chat via Whatshapp
            </button>{" "}
          </a>
        </div>
      </div>
      <Footer_jualan />
    </div>
  );
};

export default Jualan;
