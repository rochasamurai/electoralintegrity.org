import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTZ2Mkgy0Yx2LTJoMTJ6bTAtNnYySDI0di0yaDE1eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Open Science Protocol</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            ELIS Protocol
          </h1>
          
          <p className="text-xl sm:text-2xl font-light text-primary-foreground/90 max-w-3xl mx-auto">
            Electoral Integrity Strategies Systematic Review
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, evidence-based systematic review of strategies to strengthen electoral integrity worldwide, supporting researchers, policymakers, and civil society organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="group">
              Access Protocol
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
              <Users className="mr-2 h-4 w-4" />
              Contribute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
