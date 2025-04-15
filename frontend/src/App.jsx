import './style/index.css';
import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './components/layout/NavBar';
import EnvelopeList from './components/features/envelopes/EnvelopeList';


export default function App() {
  return (
    <div className='min-h-screen bg-theme-background text-theme-text relative'>
      <NavBar />
      <Outlet />
      <EnvelopeList />
    </div>
  )
};
