// pages/MainPage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ExperienceCard from '../components/ExperienceCard';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import { GraduationCap, Award, Mail, Github, Linkedin } from 'lucide-react';

const MainPage = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of web applications using React, Node.js, and AWS. Managed a team of 5 developers and improved application performance by 40%.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with designers to create pixel-perfect user interfaces. Implemented modern JavaScript frameworks.",
      skills: ["React", "Vue.js", "JavaScript", "CSS3", "HTML5"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2019 - 2020",
      description: "Built and maintained company website, worked on mobile applications, and learned modern development practices in an agile environment.",
      skills: ["JavaScript", "Python", "React Native", "Git", "Agile"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Jest"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and mobile responsiveness.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"]
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization, location-based forecasts, and responsive design.",
      technologies: ["React", "D3.js", "Weather API", "Tailwind"]
    }
  ];

  return (
    <div >
      <HeroSection />
      
      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey and achievements</p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <SkillCard key={index} {...skillGroup} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Computer Science</h3>
                  <p className="text-blue-600">University of Technology</p>
                  <p className="text-gray-500 text-sm">2016 - 2020</p>
                </div>
              </div>
              <p className="text-gray-600">Bachelor's degree with focus on software engineering and web development.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AWS Certified</h3>
                  <p className="text-blue-600">Amazon Web Services</p>
                  <p className="text-gray-500 text-sm">2023</p>
                </div>
              </div>
              <p className="text-gray-600">AWS Certified Developer - Associate level certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm always interested in new opportunities and collaborations
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center font-medium">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center font-medium">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center font-medium">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;