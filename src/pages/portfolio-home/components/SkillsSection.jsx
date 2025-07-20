import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" }
      ]
    },
    {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "REST APIs", level: 90, icon: "🔗" }
      ]
    },
    {
      title: "Database & Tools",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "Git", level: 95, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "Award"
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      date: "2023",
      icon: "Certificate"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "GraduationCap"
    }
  ];

  return (
    <section id="skills-section" className="py-20 bg-muted/5">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on creating scalable, 
            performant applications that deliver exceptional user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-xl p-6 border border-border shadow-elevation-1 hover:shadow-elevation-2 transition-smooth"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium text-card-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg border border-border/50"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={cert.icon} size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-card-foreground text-sm leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;