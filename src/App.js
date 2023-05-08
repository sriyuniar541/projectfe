import AdminPage from './pages/adminPage/adminPage';
import LandingPage from './pages/landingPage/landingPage';
import PageById from './pages/pageId/pageById';
import Login from './pages/sigup/login';
import Register from './pages/sigup/register';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import AuthChecker from './component/authchecker/auth_checker';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}  />
        <Route path='/artikel/admin' element={
          <AuthChecker>  
            <AdminPage/>
            </AuthChecker>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/:id' element={<PageById/>} />
        <Route path='*' element={<page not Found/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
