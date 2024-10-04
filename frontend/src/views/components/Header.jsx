import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <a href="/" className="flex items-center">
          <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
            ION Assignment
          </span>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-6">
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            onClick={() => navigate('/filetable')}
          >
            FileTable
          </button>
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            onClick={() => navigate('/')}
          >
            FileUpload
          </button>
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            onClick={() => navigate('/admin-dashboard')}
          >
            Admin Dashboard
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 dark:text-gray-300 hover:text-cyan-400">
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
        <button
          className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400"
          onClick={() => navigate('/filetable')}
        >
          FileTable
        </button>
        <button
          className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400"
          onClick={() => navigate('/')}
        >
          FileUpload
        </button>
      </div>
    </header>
  );
}

export default Header;
