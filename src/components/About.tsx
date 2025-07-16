import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Background',
      description: 'PhD in [Your Field], [University Name]. Previously [Previous Degree] from [Previous University].'
    },
    {
      icon: BookOpen,
      title: 'Research Focus',
      description: 'Specializing in [specific research area] with emphasis on [key methodologies or approaches].'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: '[Notable awards, scholarships, or recognitions] including [specific achievement].'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working with [research groups/labs] and contributing to [collaborative projects or initiatives].'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a dedicated researcher passionate about [your field] and committed to 
              advancing knowledge through rigorous scientific inquiry and innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  My journey in academia began with [brief background]. Currently, I'm pursuing 
                  my PhD under the supervision of [Advisor Name] at [University], where I focus 
                  on [specific research area].
                </p>
                <p className="text-foreground leading-relaxed">
                  My research interests span [research interests], with particular emphasis on 
                  [specific focus areas]. I'm passionate about [what drives your research] and 
                  believe that [your research philosophy or vision].
                </p>
                <p className="text-foreground leading-relaxed">
                  When I'm not in the lab or writing, I enjoy [personal interests/hobbies] and 
                  am actively involved in [community activities, mentoring, etc.].
                </p>
              </div>

              {/* Skills/Expertise */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Research Methodology',
                    'Data Analysis',
                    'Statistical Modeling',
                    'Academic Writing',
                    'Python/R',
                    'Machine Learning',
                    'Literature Review',
                    'Experimental Design'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent-light text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-6 animate-slide-up delay-200">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;