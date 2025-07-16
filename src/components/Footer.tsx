import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About This Site</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                This website showcases my academic journey, research contributions, 
                and ongoing projects as a PhD student in [Your Field].
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#publications" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Academic Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Academic Affiliation</h3>
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <div>[Your University Name]</div>
                <div>[Your Department]</div>
                <div>[Your Program/Lab]</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-accent" /> by [Your Name] • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;