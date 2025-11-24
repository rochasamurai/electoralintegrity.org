import { Mail, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ELIS SLR Agent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Systematic Literature Review on Electoral Integrity Strategies. 
                Protocol v1.8 • November 2025
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://github.com/rochasamurai/ELIS-SLR-Agent/blob/main/docs/ELIS_2025_SLR_Protocol_v1.8.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Protocol v1.8 (PDF)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/rochasamurai/ELIS-SLR-Agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/rochasamurai/ELIS-SLR-Agent/blob/main/docs/CHANGELOG.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/rochasamurai/ELIS-SLR-Agent/blob/main/docs/CONTRIBUTING.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contributing Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <a 
                      href="mailto:elis@electoralintegrity.org" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      elis@electoralintegrity.org
                    </a>
                    <p className="text-xs text-muted-foreground/70">General inquiries</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <a 
                      href="mailto:research@electoralintegrity.org" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      research@electoralintegrity.org
                    </a>
                    <p className="text-xs text-muted-foreground/70">Academic collaboration</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-4 w-4 mt-0.5 text-primary" />
                  <a 
                    href="https://electoralintegrity.org" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    electoralintegrity.org
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Github className="h-4 w-4 mt-0.5 text-primary" />
                  <a 
                    href="https://github.com/rochasamurai/ELIS-SLR-Agent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © 2025 ELIS SLR Agent • Imperial College Business School
              </p>
              <p>
                Principal Investigator: Carlos Rocha • Supervisor: Prof. Tommaso Valletti
              </p>
            </div>
            <div className="mt-4 text-center text-xs text-muted-foreground/70">
              Sponsored by Instituto Voto Legal (IVL), São Paulo, Brazil
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
