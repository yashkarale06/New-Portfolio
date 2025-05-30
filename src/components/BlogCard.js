// components/BlogCard.js
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const BlogCard = ({ title, excerpt, date, readTime, category, onClick }) => {
  return (
    <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-blue-200" onClick={onClick}>
      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          {category}
        </span>
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      <div className="mt-4 text-blue-600 font-medium hover:text-blue-700">
        Read More →
      </div>
    </article>
  );
};

export default BlogCard;