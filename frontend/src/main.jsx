import React from "react";
import './style/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import NavbarOptions from './components/navbar/NavbarOptions';
import Modal from "./components/modal/Modal";


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="options" element={<NavbarOptions />} />
        <Route path="create" element={<Modal formId="form-create" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
