import AdminPage from "./pages/adminPage/adminPage";
// import LandingPage from "./pages/landingPage/landingPage";
import PageById from "./pages/pageId/pageById";
import PageDian1 from "./pages/pageId/pageById_dian";
import PageAti1 from "./pages/pageId/pageById_ati";
import Login from "./pages/sigup/login";
import Register from "./pages/sigup/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthChecker from "./component/authchecker/auth_checker";
import Jualan from "./pages/websiteJualanSusu/jualan";
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageDian1 />} />
          <Route
            path="/artikel/admin"
            element={
              <AuthChecker>
                <AdminPage />
              </AuthChecker>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id" element={<PageById />} />
          <Route
            path="/PentingnyaNutrisiuntukKesehatan"
            element={<PageDian1 />}
          />
          <Route
            path="/TipsdanTrikbagiMahasiswaAkhirdalamMenyelesaikanSkripsidanProsesPengolahanData"
            element={<PageAti1 />}
          />
          <Route
            path="/manfaatSusukambingBagiKesehatan"
            element={<Jualan />}
          />
          <Route path="*" element={<page not Found />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
