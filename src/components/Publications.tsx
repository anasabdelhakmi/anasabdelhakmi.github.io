import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Publications = () => {
  const publications = [
    {
      title: 'Dynamic Black-Litterman',
      authors: 'Anas Abdelhakmi, Andrew Lim, Another Author',
      journal: 'Operations Research',
      year: '2025',
      type: 'Journal Article',
      status: 'Published',
      abstract: 'This study investigates [research question] through [methodology]. Our findings suggest [key findings] with implications for [field/application]. The research contributes to [broader impact].',
      doi: '10.1000/example.doi',
      tags: ['Research Method', 'Data Analysis', 'Innovation']
    },
    {
      title: 'Second Publication: Novel Approaches to [Research Area]',
      authors: 'Your Name, Collaborator A, Collaborator B',
      journal: 'International Conference on [Field Name]',
      year: '2023',
      type: 'Conference Paper',
      status: 'Published',
      abstract: 'We present [new method/approach] for addressing [problem]. Through [experimental setup], we demonstrate [results] and discuss [implications for future research].',
      doi: '10.1000/example.doi.2',
      tags: ['Conference', 'Methodology', 'Collaboration']
    },
    {
      title: 'Upcoming Publication: Advanced Studies in [Your Specialty]',
      authors: 'Your Name, Research Team',
      journal: '[Target Journal Name]',
      year: '2024',
      type: 'Journal Article',
      status: 'Under Review',
      abstract: 'This paper explores [cutting-edge topic] using [innovative methodology]. Preliminary results indicate [promising findings] which could transform [specific application area].',
      tags: ['Cutting-edge', 'Innovation', 'Impact']
    }
  ];

  const metrics = [
    { label: 'Total Publications', value: '8+' },
    { label: 'Citations', value: '150+' },
    { label: 'h-index', value: '5' },
    { label: 'Conferences', value: '4' }
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Publications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My research contributions to the academic community, including peer-reviewed 
              articles, conference papers, and ongoing work.
            </p>
          </div>

          {/* Research Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-card border-border text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-background border-border hover:shadow-card-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{pub.type}</Badge>
                        <Badge 
                          variant={pub.status === 'Published' ? 'default' : 'secondary'}
                          className={pub.status === 'Published' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {pub.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-primary mb-3 leading-tight">
                        {pub.title}
                      </CardTitle>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{pub.authors}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>{pub.journal}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-accent-light text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {pub.status === 'Published' && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </Button>
                    )}
                    {pub.doi && (
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        DOI: {pub.doi}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Complete Publication List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;