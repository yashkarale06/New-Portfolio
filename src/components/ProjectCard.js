// components/ProjectCard.js
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-6xl font-bold opacity-20">
          {title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {liveUrl && (
            <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </button>
          )}
          {githubUrl && (
            <button className="flex items-center text-gray-600 hover:text-gray-700 font-medium">
              <Github className="w-4 h-4 mr-1" />
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;