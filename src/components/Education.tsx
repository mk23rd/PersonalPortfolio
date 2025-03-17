
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import EducationItem from "./EducationItem";

const Education = () => {
  const educationData = [
    {
      period: "2021 - Present",
      degree: "Bachelor of Science in Computer Science",
      institution: "Hilcoe School Of Computer Science And Technology",
      description: "Studying advanced algorithms, software engineering, and artificial intelligence. Participating in hackathons and research projects focused on machine learning applications.",
      icon: <GraduationCap size={24} />
    },
    {
      period: "March 2023-Present",
      degree: "UI/UX Design Internship",
      institution: "YeMuyaWeg - የሙያ ወግ",
      
      icon: <Briefcase size={24} />
    },
  
    {
      period: "2020",
      degree: "High School Diploma",
      institution: "Ethio Parent's School",
      
      icon: <Award size={24} />
    }
  ];

  return (
    <AnimatedSection id="education" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-foreground/80 inline-block mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my academic achievements and professional experiences.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              period={item.period}
              degree={item.degree}
              institution={item.institution}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
