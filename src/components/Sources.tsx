import { Database } from "lucide-react";

const Sources = () => {
  const sources = [
    { 
      name: "Scopus", 
      type: "Subscription", 
      coverage: "90M+ records", 
      api: "Elsevier Scopus API",
      description: "Multidisciplinary database with comprehensive coverage across political science, governance, law, and engineering."
    },
    { 
      name: "Web of Science", 
      type: "Subscription", 
      coverage: "100M+ records", 
      api: "Clarivate WoS API",
      description: "High-impact journal indexing platform enabling detailed citation analysis across disciplines."
    },
    { 
      name: "IEEE Xplore", 
      type: "Subscription", 
      coverage: "6M+ documents", 
      api: "IEEE Xplore API",
      description: "Technical literature repository covering electronic voting systems, cryptographic security, and system auditability."
    },
    { 
      name: "Semantic Scholar", 
      type: "Open", 
      coverage: "200M+ papers", 
      api: "Open API",
      description: "AI-enhanced bibliographic database with citation graphs and semantic indexing across computer science and interdisciplinary research."
    },
    { 
      name: "OpenAlex", 
      type: "Open", 
      coverage: "250M+ works", 
      api: "Open API",
      description: "Open bibliographic database providing comprehensive metadata including institutions, citations, and concept tagging."
    },
    { 
      name: "CrossRef", 
      type: "Open", 
      coverage: "130M+ records", 
      api: "CrossRef REST API",
      description: "DOI registration agency providing publisher-verified metadata, enabling robust deduplication and citation tracking."
    },
    { 
      name: "CORE", 
      type: "Open", 
      coverage: "300M+ documents", 
      api: "CORE API v3",
      description: "Open access aggregator covering papers, theses, and preprints from institutional repositories worldwide."
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Information Sources
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              7 API Integrations
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coverage across political science, computer science, law, and governance through documented APIs enabling reproducible automated searches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sources.map((source, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">
                      {source.name}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      source.type === 'Open' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {source.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {source.description}
                </p>
                <div className="space-y-1 text-xs text-muted-foreground border-t border-border pt-3">
                  <p><strong>Coverage:</strong> {source.coverage}</p>
                  <p><strong>API:</strong> {source.api}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Source Selection Rationale
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Disciplinary breadth:</strong> Coverage across political science, computer science, law, and governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Methodological diversity:</strong> Inclusion of both empirical studies and technical evaluations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>API accessibility:</strong> All sources provide documented APIs enabling reproducible automated searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Complementary coverage:</strong> Combination of subscription databases and open sources maximizes retrieval</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Unavailable Sources
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                The following sources were considered but not implemented due to API limitations:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span><strong>ACM Digital Library</strong> — No public API available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span><strong>JSTOR</strong> — No real-time API for systematic searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span><strong>Google Scholar</strong> — Terms of Service restrictions on automated access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
