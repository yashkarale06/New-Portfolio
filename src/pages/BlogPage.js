// pages/BlogPage.js
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { Search, Filter } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure and build React applications that can scale with your team and user base. We'll cover component architecture, state management, and performance optimization techniques.",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "React",
      content: "Full article content would go here..."
    },
    {
      title: "Modern CSS Techniques for Responsive Design",
      excerpt: "Explore the latest CSS features including Grid, Flexbox, and Container Queries to create truly responsive designs that work across all devices and screen sizes.",
      date: "May 10, 2024",
      readTime: "6 min read",
      category: "CSS",
      content: "Full article content would go here..."
    },
    {
      title: "API Design Best Practices",
      excerpt: "A comprehensive guide to designing RESTful APIs that are maintainable, scalable, and developer-friendly. Learn about proper endpoint structure, error handling, and documentation.",
      date: "May 5, 2024",
      readTime: "10 min read",
      category: "Backend",
      content: "Full article content would go here..."
    },
    {
      title: "JavaScript Performance Optimization",
      excerpt: "Discover techniques to optimize JavaScript performance in your web applications. From code splitting to memory management, learn how to make your apps lightning fast.",
      date: "April 28, 2024",
      readTime: "7 min read",
      category: "JavaScript",
      content: "Full article content would go here..."
    },
    {
      title: "Getting Started with TypeScript",
      excerpt: "A beginner-friendly introduction to TypeScript. Learn how to add type safety to your JavaScript projects and improve your development experience with better tooling.",
      date: "April 20, 2024",
      readTime: "12 min read",
      category: "TypeScript",
      content: "Full article content would go here..."
    },
    {
      title: "Docker for Frontend Developers",
      excerpt: "Learn how to use Docker to containerize your frontend applications, create consistent development environments, and streamline your deployment process.",
      date: "April 15, 2024",
      readTime: "9 min read",
      category: "DevOps",
      content: "Full article content would go here..."
    }
  ];

  const categories = ['All', 'React', 'JavaScript', 'TypeScript', 'CSS', 'Backend', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBlogClick = (post) => {
    // In a real app, this would navigate to a detailed blog post page
    alert(`Opening blog post: ${post.title}`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">My Blog</h1>
          <p className="text-xl text-blue-100">
            Sharing knowledge about web development, programming, and technology
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  {...post}
                  onClick={() => handleBlogClick(post)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to get notified when I publish new articles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;