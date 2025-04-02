import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar/NavBar';
import EnvelopeList from "./components/envelope-list/EnvelopeList";
import Modal from './components/modal/Modal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <EnvelopeList />
        <Modal />
        <Routes>
          <Route path='dashboard' element={<Dashboard />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
