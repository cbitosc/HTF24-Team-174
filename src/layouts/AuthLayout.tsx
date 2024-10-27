import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;