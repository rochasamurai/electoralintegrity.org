import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Methodology from "@/components/Methodology";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
     <Hero />
     <Overview />
     <Methodology />
     <Sources />
     <Footer />
    </div>
  );
};

export default Index;
