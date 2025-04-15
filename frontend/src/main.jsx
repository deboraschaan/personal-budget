import React from "react";
import './style/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Modal from "./components/ui/Modal";
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
        <Route path="create" element={<Modal>
          <CreateForm />
        </Modal>} />
        <Route path="edit" element={<Modal>
          <EditForm />
        </Modal>} />
        <Route path="delete" element={<Modal>
          <DeleteForm />
        </Modal>} />
        <Route path="transfer" element={<Modal>
          <TransferForm />
        </Modal>} />
        <Route path="add-balance" element={<Modal>
          <AddBalanceForm />
        </Modal>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
