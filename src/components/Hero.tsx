
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-50 to-indigo-100 blur-3xl opacity-70"></div>
      </div>

      <div className="section-container flex flex-col items-center justify-center text-center">
        <div className="relative overflow-hidden mb-2">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-foreground/80 animate-fade-in">
            Hi, I'm Michael
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="overflow-hidden">
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-text-reveal opacity-0",
              "reveal-delay-1"
            )}>
              Motivated <span className="text-gradient">4th Year</span> Student At Hilcoe
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-text-reveal opacity-0",
              "reveal-delay-2"
            )}>
             As a 4th year student at Hilcoe School of Computer Science and Technology, I have acquired a broad knowledge of various technologies and programming languages. While my hands-on experience is limited, my enthusiasm for learning and adapting to new challenges is boundless. I am actively seeking internship opportunities where I can apply my skills, gain practical experience, and contribute to innovative projects. I am passionate about technology and eager to collaborate with professionals in the field to further my growth and development.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className={cn(
                "px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all",
                "transform hover:translate-y-[-2px] hover:shadow-lg",
                "animate-fade-in opacity-0 reveal-delay-3"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all",
                "transform hover:translate-y-[-2px]",
                "animate-fade-in opacity-0 reveal-delay-4"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>

        <a 
          href="#projects" 
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center",
            "w-10 h-10 rounded-full border border-border animate-floating"
          )}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
