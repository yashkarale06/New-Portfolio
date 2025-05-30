// App.js
import React, { useState } from 'react';
// import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      {currentPage === 'main' ? <MainPage /> : <BlogPage />}
    </div>
  );
};

export default App;