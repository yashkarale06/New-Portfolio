// components/ExperienceCard.js
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Python Developer',
    company: 'Sai Ashirwad Group',
    period: 'Jan 2025 – Present',
    description:
      'Working on backend development using Python and Laravel. Built scalable applications, integrated Filament for admin dashboards, and handled relational database design and optimization.',
    skills: ['Python', 'PHP', 'Laravel', 'Filament', 'SQL'],
  },
  {
    title: 'Dynamic Website Development',
    company: 'Freelance Project',
    period: 'Nov 2024 – Dec 2024',
    description:
      'Designed and developed a dynamic website using JavaScript and Vue.js, integrated with Contentful CMS for real-time content updates. Focused on building responsive UIs and scalable front-end architecture.',
    skills: ['JavaScript', 'Vue.js', 'Contentful'],
  },
];

const ExperienceCard = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {exp.period}
            </div>
          </div>
          <p className="text-gray-600 mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
