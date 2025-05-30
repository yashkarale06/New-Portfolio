// components/Navigation.js
import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentPage('main')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'main'
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('blog')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'blog'
                  ? 'bg-blue-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;