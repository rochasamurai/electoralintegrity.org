import { CheckCircle2 } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      phase: "Protocol Development",
      items: [
        "Define research questions and inclusion criteria",
        "Establish systematic search strategy",
        "Register protocol for transparency",
      ],
    },
    {
      phase: "Evidence Identification",
      items: [
        "Comprehensive database searches",
        "Grey literature screening",
        "Forward and backward citation tracking",
      ],
    },
    {
      phase: "Study Selection & Quality Assessment",
      items: [
        "Independent dual screening process",
        "Risk of bias assessment",
        "Data extraction using standardized forms",
      ],
    },
    {
      phase: "Synthesis & Reporting",
      items: [
        "Narrative synthesis of findings",
        "Meta-analysis where appropriate",
        "GRADE evidence quality rating",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic review follows established protocols to ensure rigorous, transparent, and reproducible evidence synthesis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {step.phase}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-foreground">Standards Alignment:</span> This systematic review adheres to PRISMA 2020 reporting guidelines and is registered with PROSPERO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
