import React from "react";
import './style/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Modal from "./components/modal/Modal";
import SearchBar from "./components/searchbar/SearchBar";


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="options" />
        <Route path="search" element={<SearchBar />} />
        <Route path="create" element={<Modal formId="form-create" />} />
        <Route path="edit" element={<Modal formId="form-edit" />} />
        <Route path="delete" element={<Modal formId="form-delete" />} />
        <Route path="transfer" element={<Modal formId="form-transfer" />} />
        <Route path="add-balance" element={<Modal formId="form-add-balance" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
