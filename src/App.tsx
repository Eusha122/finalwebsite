import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Trophy, BookOpen, User, Briefcase, Phone } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "Chess Game Engine",
      description: "A fully functional chess game with AI opponent built using JavaScript and advanced algorithms.",
      tech: ["JavaScript", "HTML5", "CSS3", "AI"],
      github: "#",
      demo: "#"
    },
    {
      title: "School Management System",
      description: "A comprehensive web application for managing student records and academic activities.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my projects and skills as a young developer.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Eusha Ibna Akbor
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-white hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className={`text-center z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center animate-pulse">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            Eusha Ibna Akbor
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8 animate-slide-up">
            Young Developer & Chess Player
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
            Student at Shaheed Colonel Kazi Emdadul Haque Public School, passionate about coding and strategic thinking through chess.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white hover:text-purple-400 transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate young developer currently studying at Shaheed Colonel Kazi Emdadul Haque Public School. 
                My journey in programming started with curiosity and has grown into a deep love for creating digital solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me playing chess, where I've developed strategic thinking skills that 
                complement my programming abilities. I believe both chess and coding require patience, planning, and creativity.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <Code className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Developer</p>
                </div>
                <div className="text-center">
                  <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Chess Player</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Student</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <User className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Whether you want to discuss a project or just say hello, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:eusha@example.com"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Let's Connect
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Eusha Ibna Akbor. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;