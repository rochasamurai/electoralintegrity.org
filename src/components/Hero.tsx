import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTZ2Mkgy0Yx2LTJoMTJ6bTAtNnYySDI0di0yaDE1eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Protocol v1.8 • November 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            ELIS SLR Agent
          </h1>
          
          <p className="text-xl sm:text-2xl font-light text-primary-foreground/90 max-w-3xl mx-auto">
            Systematic Literature Review on Electoral Integrity Strategies
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            What operational and technological strategies have been shown to improve the integrity or auditability of electoral systems since 1990? A comprehensive systematic review examining voting technologies, operational mechanisms, and institutional frameworks across electronic, paper-based, and hybrid systems globally.
          </p>
          
          <p className="text-sm text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Principal Investigator: Carlos Rocha (Imperial College Business School) • Supervisor: Prof. Tommaso Valletti • Sponsor: Instituto Voto Legal (IVL), São Paulo, Brazil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group"
              asChild
            >
              <a href="https://github.com/rochasamurai/ELIS-SLR-Agent/blob/main/docs/ELIS_2025_SLR_Protocol_v1.8.pdf" target="_blank" rel="noopener noreferrer">
                View Protocol PDF
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground"
              asChild
            >
              <a href="https://github.com/rochasamurai/ELIS-SLR-Agent" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repository
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
