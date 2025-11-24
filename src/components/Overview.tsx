import { Database, Target, FileSearch } from "lucide-react";

const Overview = () => {
  const features = [
    {
      icon: Database,
      title: "7 API Sources",
      description: "Scopus, Web of Science, IEEE Xplore, Semantic Scholar, OpenAlex, CrossRef, and CORE. Each source provides 90M+ to 300M+ records with documented APIs for reproducible searches.",
    },
    {
      icon: Target,
      title: "Comprehensive Coverage",
      description: "Global evidence from 1990-2025 examining electronic, paper-based, and hybrid voting systems. Covers operational, technological, and institutional strategies across diverse political contexts.",
    },
    {
      icon: FileSearch,
      title: "Open Methodology",
      description: "Full code publicly available on GitHub. Protocol v1.8 published and registered. AI-assisted workflow with rigorous human oversight ensuring transparency and reproducibility.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About the ELIS Systematic Review
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The ELIS Systematic Review represents a rigorous, API-driven approach to synthesizing evidence on electoral integrity strategies. Following PRISMA-P 2015 guidelines, this review queries 7 academic databases to provide comprehensive coverage across political science, computer science, law, and governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Research Objectives
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Identify operational and technological strategies that improve electoral integrity and auditability</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Evaluate evidence across voting technologies (electronic, paper-based, hybrid systems)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Assess operational mechanisms (audits, transparency measures, oversight frameworks)</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Synthesize institutional frameworks and governance structures supporting electoral integrity</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Provide evidence-based recommendations for electoral reform and policy design</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
