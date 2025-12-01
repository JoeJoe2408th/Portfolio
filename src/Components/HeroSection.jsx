import { ArrowDown } from "lucide-react";
import GradientText from "./ui/gradientText";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen mb-50 md:mb-0 flex flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col mt-32 md:mt-0 md:flex-row container max-w-4xl mx-auto text-center">

        {/* Content */}
        <div className="space-y-6 flex-1 text-left mr-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm Vũ</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              (Joe)
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Duy
            </span>
          </h1>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-class animate-gradient text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3"
          >
            I'm a passionate Web Developer . I create engaging and responsive user interfaces with modern web technologies, aiming to deliver both beauty and usability..   
          </GradientText>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-center mt-20 md:mt-0 ">
          <img src ="/projects/Hinh dai dien 2.png" alt="My Avatar" className="w-84 h-84 object-cover rounded-full shadow-lg border-4 border-primary" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-50 md:translate-y-0 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
