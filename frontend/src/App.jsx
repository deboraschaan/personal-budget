import './style/index.css';
import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './components/layout/NavBar';
import EnvelopeList from './components/features/envelopes/EnvelopeList';
import { envelopes } from './utils/mockdata';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      <Dashboard>
        <NavBar />
        <Outlet />
        <EnvelopeList envelopes={envelopes} />
      </Dashboard>
    </>
  )
};
