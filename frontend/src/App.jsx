import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar/NavBar';
import './index.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='dashboard' element={<Dashboard />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
