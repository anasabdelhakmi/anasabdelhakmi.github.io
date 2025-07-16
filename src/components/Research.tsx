import { Microscope, TrendingUp, Globe, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Research = () => {
  const projects = [
    {
      title: 'Primary Research Project',
      description: 'A comprehensive study on [specific research topic] examining [key aspects]. This project aims to [research objectives] and has implications for [practical applications].',
      status: 'Ongoing',
      icon: Microscope,
      tags: ['Methodology', 'Data Analysis', 'Field Work']
    },
    {
      title: 'Collaborative Study',
      description: 'Working with [collaborating institution/researchers] to investigate [research question]. This interdisciplinary approach combines [methodologies] to address [research gap].',
      status: 'Published',
      icon: Globe,
      tags: ['Collaboration', 'Interdisciplinary', 'Innovation']
    },
    {
      title: 'Innovation Project',
      description: 'Developing [new method/tool/framework] to improve [specific area]. This project focuses on [technical aspects] and seeks to [expected outcomes].',
      status: 'In Review',
      icon: Lightbulb,
      tags: ['Innovation', 'Technology', 'Application']
    }
  ];

  const interests = [
    {
      title: '[Research Interest 1]',
      description: 'Exploring [specific aspect] and its implications for [field/application].',
      icon: TrendingUp
    },
    {
      title: '[Research Interest 2]',
      description: 'Investigating [particular phenomenon] using [methodological approach].',
      icon: Microscope
    },
    {
      title: '[Research Interest 3]',
      description: 'Developing [new approaches/methods] for [specific challenge or opportunity].',
      icon: Lightbulb
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Research</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My research focuses on [brief overview of research area] with applications in 
              [practical domains]. I'm particularly interested in [key research themes].
            </p>
          </div>

          {/* Research Interests */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Research Interests</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-card-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <interest.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {interest.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Current Projects</h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-background border-border hover:shadow-card-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              project.status === 'Ongoing' ? 'bg-accent-light text-accent-foreground' :
                              project.status === 'Published' ? 'bg-green-100 text-green-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
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

export default Research;