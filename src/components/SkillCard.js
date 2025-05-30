// components/SkillCard.js
import React from 'react';
import { Code } from 'lucide-react';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
          <Code className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-700">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;