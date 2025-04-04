import './style/index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar/NavBar';
import EnvelopeList from "./components/envelope-list/EnvelopeList";
import Modal from './components/modal/Modal';
import SearchBar from './components/searchbar/SearchBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
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
