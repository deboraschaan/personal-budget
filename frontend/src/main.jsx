import React from "react";
import './style/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import App from "./App";
import ModalContainer from "./components/containers/ModalContainer";
import SearchBar from "./components/ui/SearchBar";
import CreateForm from "./components/forms/CreateForm";
import EditForm from "./components/forms/EditForm";
import DeleteForm from "./components/forms/DeleteForm";
import TransferForm from "./components/forms/TransferForm";
import AddBalanceForm from "./components/forms/AddBalanceForm";


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="options" />
        <Route path="search" element={<SearchBar />} />
        <Route path="create" element={<ModalContainer id="form-create">

        </ModalContainer>} />
        <Route path="edit" element={<ModalContainer>
          <EditForm />
        </ModalContainer>} />
        <Route path="delete" element={<ModalContainer>
          <DeleteForm />
        </ModalContainer>} />
        <Route path="transfer" element={<ModalContainer>
          <TransferForm />
        </ModalContainer>} />
        <Route path="add-balance" element={<ModalContainer>
          <AddBalanceForm />
        </ModalContainer>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
