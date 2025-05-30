import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Code, Database, Brain, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-fuchsia-600 to-violet-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lime-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Yash <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">Karale</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-400/20 text-teal-200 rounded-full text-sm sm:text-base font-medium flex items-center backdrop-blur-sm border border-teal-400/30 hover:bg-teal-400/30 transition-colors duration-300">
              <Database className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Python Developer
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-fuchsia-400/20 text-fuchsia-200 rounded-full text-sm sm:text-base font-medium flex items-center backdrop-blur-sm border border-fuchsia-400/30 hover:bg-fuchsia-400/30 transition-colors duration-300">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Data Scientist
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-lime-400/20 text-lime-200 rounded-full text-sm sm:text-base font-medium flex items-center backdrop-blur-sm border border-lime-400/30 hover:bg-lime-400/30 transition-colors duration-300">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Web Developer
            </span>
          </div>
        </div>
        
        {/* Description */}
        <div className={`mb-8 sm:mb-10 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-2">
            I'm a <span className="text-blue-400 font-semibold">Python Developer</span> at Sai Ashirwad Group with a background in data science and a growing passion for web development.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            I work with Python, PHP (Laravel), databases, and Filament to build smart, scalable solutions. From machine learning models to dynamic web apps, I love blending data with clean design.
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 italic px-2">
            This site is where I share what I build, explore, and learn—one project at a time.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mb-6 sm:mb-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center font-medium group w-full sm:w-auto">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Contact Me
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center font-medium group w-full sm:w-auto">
            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View GitHub
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`animate-bounce transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;