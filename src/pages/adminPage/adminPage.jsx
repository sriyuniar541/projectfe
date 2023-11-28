import React, { useState } from "react";
import "./adminPage.css";
import axios from "axios";



const AdminPage = () => {
  const api_key = process.env.REACT_APP_API_KEY_BE;
  const token = localStorage.getItem("token");
  const users_id = JSON.parse(localStorage.getItem("user"));
  const [inputData, setInputData] = useState({
    title: "",
    mainContent: "",
    content1: "",
    titleContent2: "",
    content2: "",
    titleContent3: "",
    content3: "",
    users_id: users_id.id,
    subTema: "",
  });
  const [bacgroundPhoto, setBacgroundPhoto] = useState(null);
  const [isLoading,setIsLoading] = useState(false)

  const inputHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("mainContent", inputData.mainContent);
    formData.append("content1", inputData.content1);
    formData.append("titleContent2", inputData.titleContent2);
    formData.append("content2", inputData.content2);
    formData.append("titleContent3", inputData.titleContent3);
    formData.append("content3", inputData.content3);
    formData.append("users_id", inputData.users_id);
    formData.append("subTema", inputData.subTema);
    formData.append("bacgroundPhoto", bacgroundPhoto);

    axios
      .post(api_key + `/artikel`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Baearer ${token}`,
        },
      })
      .then((res) => {
        alert("Insert data success");
        setInputData({
          title: "",
          mainContent: "",
          content1: "",
          titleContent2: "",
          content2: "",
          titleContent3: "",
          content3: "",
          subTema: "",
        });
        setBacgroundPhoto ({
          bacgroundPhoto : ""
        })
      })
      .catch((err) => {
        console.log(err.response, "Insert data fail");
        alert('Sesi anda berakhir silahkan login lagi');
      });
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handleBacground = (e) => {
    setBacgroundPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };


  return (
    <div className="container">
      <div className="card_admin"></div>
      <div className="input_news bg-light">
        <h3>Form Pengisian Content</h3>
        {/* paragraf 1 */}
        <textarea
          id="mainTitle"
          placeholder="Judul Utama"
          onChange={onChangeHandler}
          name="title"
          value={inputData.title}
        />
        <label htmlFor="mainImage">Pilih bacground utama</label>
        <input type="file" id="mainImage" onChange={handleBacground} />
        <textarea
          id="paragraf1"
          placeholder="paragraf 1"
          onChange={onChangeHandler}
          name="mainContent"
          value={inputData.mainContent}
        />
        <textarea
          id="paragraf1"
          placeholder="paragraf 1"
          onChange={onChangeHandler}
          name="content1"
          value={inputData.content1}
        />
        {/* paragraf 2 */}
        <textarea
          id="mainTitle"
          placeholder="Sub Judul paragraf 2"
          onChange={onChangeHandler}
          name="titleContent2"
          value={inputData.titleContent2}
        />
        <textarea
          id="paragraf2"
          placeholder="paragraf 2"
          onChange={onChangeHandler}
          name="content2"
          value={inputData.content2}
        />
        {/* paragraf 3 */}
        <textarea
          id="mainTitle"
          placeholder="Sub Judul paragraf 3"
          onChange={onChangeHandler}
          name="titleContent3"
          value={inputData.titleContent3}
        />
        <textarea
          id="paragraf3"
          placeholder="paragraf 3"
          onChange={onChangeHandler}
          name="content3"
          value={inputData.content3}
        />
        <input
          type="text"
          placeholder="content artikel"
          onChange={onChangeHandler}
          name="subTema"
          value={inputData.subTema}
          className="btn_subTema"
        />
        <button className="btn btn-primary" onClick={inputHandle}>
          Save
        </button>
      </div>
      <div className="warning">
        <p>Warning...!</p>
        <li>Bacground photo wajib diisi</li>
        <li>Silahkan lakukan pengisian data-data yang dibutuhkan</li>
        <li>
          Bisa hanya satu paragraf dan bisa juga lebih, tidak boleh lebih dari
          2 paragraf
        </li>
        <li> Untuk content artikel ketik 1 jika artikel ini content kesehatan, dan ketik 2 jika artikel ini selain kesehatan</li>
      </div>
    </div>
  );
};

export default AdminPage;
