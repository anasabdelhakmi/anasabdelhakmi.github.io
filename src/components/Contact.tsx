import { Mail, MapPin, Phone, Linkedin, Github, Twitter, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@university.edu',
      href: 'mailto:your.email@university.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Room 123, Building Name\nUniversity Name\nCity, State 12345',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourprofile',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yourusername',
      description: 'Code repositories and research projects'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      description: 'Research insights and academic discussions'
    },
    {
      name: 'ORCID',
      icon: ExternalLink,
      href: 'https://orcid.org/0000-0000-0000-0000',
      description: 'Academic publications and research identity'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing research opportunities, collaborations, 
              or simply connecting with fellow researchers in my field.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-primary mb-1">{contact.label}</div>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Office Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div>Monday - Wednesday: 2:00 PM - 4:00 PM</div>
                    <div>Friday: 10:00 AM - 12:00 PM</div>
                    <div className="text-sm pt-2 border-t border-border">
                      Or by appointment - please email to schedule
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="space-y-8 animate-slide-up delay-200">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Connect Online</h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="bg-background border-border hover:shadow-card-hover transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                            <social.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-primary group-hover:text-primary-hover transition-colors">
                              {social.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {social.description}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Quick Contact</h4>
                  <p className="text-muted-foreground mb-6">
                    Have a research question or collaboration idea? I'd love to hear from you!
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" variant="academic">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests Note */}
              <div className="bg-accent-light p-6 rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">Research Collaboration</h4>
                <p className="text-accent-foreground text-sm">
                  I'm particularly interested in collaborating on projects related to 
                  [your research interests]. Feel free to reach out if you're working 
                  on similar topics or have complementary expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;