import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import ProjectSkeleton from './components/ProjectSkeleton';
import Icon from '../../components/AppIcon';

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    technology: [],
    projectType: []
  });

  // Mock projects data
  const mockProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, and admin dashboard.",
      fullDescription: `A comprehensive e-commerce platform built with modern web technologies. This project demonstrates full-stack development capabilities with a focus on user experience and scalability. The platform includes features like product catalog management, shopping cart functionality, secure payment processing, and comprehensive admin tools for inventory management.

The frontend is built with React 18 and utilizes modern hooks for state management. The backend API is developed with Node.js and Express, providing RESTful endpoints for all platform operations. PostgreSQL is used for data persistence with optimized queries for performance.`,
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Stripe", "JWT"],
      type: "Web App",
      completedDate: "Dec 2024",
      duration: "3 months",
      teamSize: "Solo Project",
      featured: true,
      liveUrl: "https://demo-ecommerce.spideyofficial.com",
      githubUrl: "https://github.com/spideyofficial/ecommerce-platform",
      keyFeatures: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Secure payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history",
        "Responsive design for all devices",
        "Email notifications for orders"
      ],
      challenges: "The main challenge was implementing a scalable architecture that could handle concurrent users while maintaining fast response times. I solved this by implementing proper database indexing, caching strategies with Redis, and optimizing API endpoints for minimal data transfer.",
      lessonsLearned: "This project taught me the importance of planning database schema early and the value of implementing proper error handling throughout the application. I also learned advanced React patterns for state management and the intricacies of payment processing integration."
    },
    {
      id: 2,
      title: "Task Management API",
      description: "RESTful API built with Node.js and Express for task management applications. Includes user authentication, CRUD operations, and real-time notifications.",
      fullDescription: `A robust RESTful API designed for task management applications with comprehensive features for team collaboration. Built with Node.js and Express, this API provides secure endpoints for user management, task operations, and team collaboration features.

The API follows REST principles and includes comprehensive documentation with Swagger. It features JWT-based authentication, role-based access control, and real-time notifications using WebSocket connections. The database design is optimized for complex queries involving task relationships and user permissions.`,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Swagger"],
      type: "API",
      completedDate: "Nov 2024",
      duration: "2 months",
      teamSize: "Solo Project",
      featured: false,
      liveUrl: "https://api-tasks.spideyofficial.com/docs",
      githubUrl: "https://github.com/spideyofficial/task-management-api",
      keyFeatures: [
        "RESTful API design with comprehensive endpoints",
        "JWT-based authentication and authorization",
        "Role-based access control (Admin, Manager, User)",
        "Real-time notifications with WebSocket",
        "Task CRUD operations with advanced filtering",
        "Team collaboration features",
        "API documentation with Swagger",
        "Rate limiting and security middleware"
      ],
      challenges: "Implementing real-time notifications while maintaining API performance was challenging. I used Socket.io for WebSocket connections and implemented efficient event handling to ensure notifications were delivered instantly without impacting API response times.",
      lessonsLearned: "This project deepened my understanding of API design principles and the importance of proper documentation. I learned how to implement efficient real-time features and the value of comprehensive testing for API endpoints."
    },
    {
      id: 3,
      title: "React Dashboard",
      description: "Modern admin dashboard built with React and TypeScript. Features data visualization, user management, and responsive design with dark/light theme support.",
      fullDescription: `A comprehensive admin dashboard application built with React 18 and TypeScript, featuring modern UI components and advanced data visualization capabilities. The dashboard provides a complete solution for managing users, analyzing data, and monitoring system performance.

The application uses a component-based architecture with reusable UI elements and follows TypeScript best practices for type safety. It includes advanced features like data export, real-time updates, and customizable dashboard layouts. The design system is built with Tailwind CSS and supports both dark and light themes.`,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Query"],
      type: "Web App",
      completedDate: "Oct 2024",
      duration: "6 weeks",
      teamSize: "Solo Project",
      featured: true,
      liveUrl: "https://dashboard.spideyofficial.com",
      githubUrl: "https://github.com/spideyofficial/react-dashboard",
      keyFeatures: [
        "Interactive data visualization with charts",
        "User management with role-based permissions",
        "Dark/light theme toggle",
        "Responsive design for all screen sizes",
        "Real-time data updates",
        "Export functionality for reports",
        "Customizable dashboard layouts",
        "Advanced filtering and search capabilities"
      ],
      challenges: "Creating a performant dashboard with real-time data updates while maintaining smooth user interactions was the primary challenge. I implemented efficient data fetching strategies using React Query and optimized re-renders with proper memoization techniques.",
      lessonsLearned: "This project enhanced my TypeScript skills and taught me advanced React patterns for building scalable applications. I learned the importance of performance optimization in data-heavy applications and effective state management strategies."
    },
    {
      id: 4,
      title: "Mobile-First Blog Platform",
      description: "A responsive blog platform with content management system, SEO optimization, and social sharing features. Built with React and headless CMS integration.",
      fullDescription: `A modern blog platform designed with mobile-first principles, featuring a comprehensive content management system and advanced SEO capabilities. The platform supports multiple content types, author management, and social media integration for maximum reach.

Built with React and integrated with a headless CMS for flexible content management. The platform includes advanced features like content scheduling, SEO optimization tools, and detailed analytics. The responsive design ensures optimal reading experience across all devices.`,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Contentful", "Vercel"],
      type: "Web App",
      completedDate: "Sep 2024",
      duration: "2 months",
      teamSize: "2 developers",
      featured: false,
      liveUrl: "https://blog.spideyofficial.com",
      githubUrl: "https://github.com/spideyofficial/blog-platform",
      keyFeatures: [
        "Mobile-first responsive design",
        "Content management with headless CMS",
        "SEO optimization and meta tag management",
        "Social media sharing integration",
        "Author profiles and multi-author support",
        "Content categorization and tagging",
        "Search functionality with filters",
        "Comment system with moderation"
      ],
      challenges: "Optimizing the platform for SEO while maintaining fast loading times required careful implementation of server-side rendering and image optimization. I used Next.js for SSR and implemented lazy loading for images and content.",
      lessonsLearned: "Working with a headless CMS taught me the benefits of decoupled architecture and the importance of SEO in content platforms. I gained experience in Next.js and learned advanced techniques for performance optimization."
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and group chat functionality. Built with React, Node.js, and Socket.io.",
      fullDescription: `A comprehensive real-time chat application supporting individual and group conversations with advanced features like file sharing, message encryption, and user presence indicators. The application provides a seamless communication experience with modern UI design.

The backend is built with Node.js and Socket.io for real-time communication, while the frontend uses React with context API for state management. The application includes features like message history, typing indicators, and push notifications for enhanced user experience.`,
      thumbnail: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      type: "Web App",
      completedDate: "Aug 2024",
      duration: "2.5 months",
      teamSize: "Solo Project",
      featured: true,
      liveUrl: "https://chat.spideyofficial.com",
      githubUrl: "https://github.com/spideyofficial/realtime-chat",
      keyFeatures: [
        "Real-time messaging with Socket.io",
        "Individual and group chat support",
        "File and image sharing capabilities",
        "User presence and typing indicators",
        "Message history and search",
        "Push notifications for new messages",
        "User authentication and profiles",
        "Responsive design for mobile and desktop"
      ],
      challenges: "Managing real-time connections for multiple users while ensuring message delivery and handling connection drops was complex. I implemented connection pooling and message queuing to ensure reliable message delivery even during network issues.",
      lessonsLearned: "This project taught me the intricacies of real-time web applications and the importance of handling edge cases in network communication. I learned advanced Socket.io techniques and gained experience in building scalable real-time systems."
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills. Built with React, featuring smooth animations, responsive design, and contact form integration.",
      fullDescription: `A professional portfolio website designed to showcase development skills and projects with an emphasis on user experience and visual appeal. The site features smooth animations, interactive elements, and a clean, modern design that reflects professional capabilities.

Built with React and styled with Tailwind CSS, the portfolio includes sections for projects, skills, experience, and contact information. The site is optimized for performance and SEO, ensuring fast loading times and good search engine visibility.`,
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify", "EmailJS"],
      type: "Web App",
      completedDate: "Jul 2024",
      duration: "1 month",
      teamSize: "Solo Project",
      featured: false,
      liveUrl: "https://spideyofficial.com",
      githubUrl: "https://github.com/spideyofficial/portfolio",
      keyFeatures: [
        "Responsive design for all devices",
        "Smooth animations with Framer Motion",
        "Interactive project showcase",
        "Skills and experience timeline",
        "Contact form with email integration",
        "SEO optimization",
        "Fast loading performance",
        "Modern, clean design aesthetic"
      ],
      challenges: "Creating smooth animations that work well across different devices and browsers while maintaining performance was challenging. I used Framer Motion with careful optimization to ensure animations enhance rather than hinder the user experience.",
      lessonsLearned: "Building my portfolio taught me the importance of storytelling in web design and how to effectively showcase technical skills. I learned advanced animation techniques and gained experience in performance optimization for visual-heavy websites."
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply technology filters
    if (activeFilters.technology.length > 0) {
      filtered = filtered.filter(project =>
        activeFilters.technology.some(tech => {
          const techMap = {
            'react': 'React',
            'nodejs': 'Node.js',
            'fullstack': ['React', 'Node.js'],
            'typescript': 'TypeScript'
          };
          
          const requiredTechs = Array.isArray(techMap[tech]) ? techMap[tech] : [techMap[tech]];
          return requiredTechs.every(reqTech => 
            project.technologies.includes(reqTech)
          );
        })
      );
    }

    // Apply project type filters
    if (activeFilters.projectType.length > 0) {
      filtered = filtered.filter(project =>
        activeFilters.projectType.some(type => {
          const typeMap = {
            'webapp': 'Web App',
            'api': 'API',
            'mobile': 'Mobile'
          };
          return project.type === typeMap[type];
        })
      );
    }

    return filtered;
  }, [projects, searchTerm, activeFilters]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <Breadcrumb />
        
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Icon name="FolderOpen" size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Projects Gallery</h1>
              <p className="text-muted-foreground">
                Explore my complete portfolio of development work and technical projects
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Code" size={16} />
              <span>{projects.length} Projects</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} />
              <span>{projects.filter(p => p.featured).length} Featured</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>Updated {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          resultsCount={filteredProjects.length}
        />

        <FilterChips
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="flex items-center justify-center w-16 h-16 bg-muted/50 rounded-lg mx-auto mb-4">
              <Icon name="Search" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setSearchTerm('')}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                Clear search
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => setActiveFilters({ technology: [], projectType: [] })}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                Reset filters
              </button>
            </div>
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>
    </div>
  );
};

export default ProjectsGallery;