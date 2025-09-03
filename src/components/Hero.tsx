import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Hello, I'm{' '}
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    [Anas Abdelhakmi]
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  PhD Candidate in Operations Research at IORA
                </p>
              </div>

              <p className="text-lg text-foreground max-w-2xl leading-relaxed">
                I'm passionate about [your research area] and currently working on 
                [brief description of your research]. My work focuses on [key research interests] 
                with applications in [practical applications].
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="academic" size="lg" className="group">
                  View My Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
                <Button variant="ghost" size="lg">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Research</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Conferences</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-hero rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;