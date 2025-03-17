
import AnimatedSection from "./AnimatedSection";
import { RocketIcon } from "lucide-react";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-foreground/80 inline-block mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a collection of my recent work showcasing my skills in design, 
            development, and problem-solving across various domains.
          </p>
        </div>
        
        <div className="animate-on-scroll flex flex-col items-center justify-center py-12 px-4">
          <div className="glass-card p-12 rounded-2xl text-center max-w-xl mx-auto">
            <div className="inline-flex p-4 rounded-full bg-secondary/50 mb-6">
              <RocketIcon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently working on exciting new projects that will be showcased here.
              Stay tuned for updates on my portfolio projects!
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
