import './style/index.css';
import { React } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/navbar/Navbar';
import EnvelopeList from './components/envelope-list/EnvelopeList';


export default function App() {
  return (
    <div className='min-h-screen bg-theme-background text-theme-text relative'>
      <Navbar />
      <Outlet />
      <EnvelopeList />
    </div>
  )
};
