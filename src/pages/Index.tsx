import { Mail, ExternalLink, FileText } from 'lucide-react';
import profileImage from '@/assets/profile-simple.jpg';

const Index = () => {
  const publications = [
    {
      title: "Your Key Research Paper: A Comprehensive Analysis",
      authors: "Your Name, Co-Author Name",
      journal: "Journal of Your Field",
      year: "2024",
      status: "Forthcoming",
      link: "#",
      notes: [
        "Preliminary version appeared in Conference Proceedings, 2023",
        "Winner, Best Student Paper Award"
      ]
    },
    {
      title: "Another Important Contribution to Your Research Area",
      authors: "Your Name, Collaborator A, Collaborator B",
      journal: "Top Journal in Your Field",
      year: "2023", 
      status: "Published",
      link: "#",
      notes: [
        "Featured Article in Journal Issue",
        "Presented at International Conference 2023"
      ]
    },
    {
      title: "Working Paper: Current Research Direction",
      authors: "Your Name",
      journal: "Under Review",
      year: "2024",
      status: "Working Paper",
      link: "#"
    }
  ];

  const workingPapers = [
    {
      title: "Novel Methodology for [Your Research Problem]",
      authors: "Your Name, Research Partner",
      status: "Under Review at Journal Name"
    },
    {
      title: "Empirical Study on [Specific Topic]",
      authors: "Your Name, Co-authors",
      status: "Working Paper"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">Your Name</h1>
            <nav className="flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">Research</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">CV</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">Your Name</h1>
              <p className="text-xl text-muted-foreground mb-4">
                PhD Student in [Your Field]<br />
                <a href="#" className="text-primary hover:underline">[Your University]</a>
              </p>
              <div className="flex items-center text-muted-foreground mb-6">
                <Mail className="w-4 h-4 mr-2" />
                <span>your.email@university.edu</span>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I am a PhD student in [Your Field] at [Your University]. I received my [Previous Degree] 
                  from [Previous University] where I was advised by [Previous Advisor]. 
                </p>
                <p className="text-foreground leading-relaxed">
                  My research focuses on [your research area] with particular emphasis on [specific topics]. 
                  I am interested in [research interests] and their applications to [practical applications]. 
                  My current work draws on tools from [methodologies] and addresses [key problems].
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">News</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">New paper accepted at [Conference/Journal Name]</h4>
                <span className="text-sm text-muted-foreground">Dec 2024</span>
              </div>
              <p className="text-muted-foreground">Our paper "[Paper Title]" has been accepted for publication.</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Presented research at [Conference Name]</h4>
                <span className="text-sm text-muted-foreground">Nov 2024</span>
              </div>
              <p className="text-muted-foreground">Successfully presented findings on [research topic] at the annual conference.</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Research grant awarded</h4>
                <span className="text-sm text-muted-foreground">Oct 2024</span>
              </div>
              <p className="text-muted-foreground">Received funding for [research project] from [funding agency].</p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Research</h2>
          
          {/* Published Papers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Published or Forthcoming Journal Articles</h3>
            <div className="space-y-8">
              {publications.map((paper, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h4 className="text-lg font-medium text-foreground mb-2">
                    <a href={paper.link} className="text-primary hover:underline">
                      {paper.title}
                    </a> 
                    {paper.authors.split(',').length > 1 && (
                      <span className="text-muted-foreground"> with {paper.authors.split(',').slice(1).join(',')}</span>
                    )}
                  </h4>
                  <p className="text-muted-foreground italic mb-3">
                    {paper.journal} {paper.status === 'Published' ? `, ${paper.year}` : `(${paper.status})`}
                  </p>
                  {paper.notes && (
                    <ul className="space-y-1">
                      {paper.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="text-sm text-muted-foreground">• {note}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Working Papers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Working Papers</h3>
            <div className="space-y-6">
              {workingPapers.map((paper, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h4 className="text-lg font-medium text-foreground mb-2">
                    {paper.title}
                    {paper.authors.split(',').length > 1 && (
                      <span className="text-muted-foreground"> with {paper.authors.split(',').slice(1).join(',')}</span>
                    )}
                  </h4>
                  <p className="text-muted-foreground italic">{paper.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work in Progress */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Work in Progress</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-lg font-medium text-foreground">Ongoing Research Project 1</h4>
                <p className="text-muted-foreground">Brief description of current work</p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-lg font-medium text-foreground">Ongoing Research Project 2</h4>
                <p className="text-muted-foreground">Brief description of current work</p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Teaching</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-foreground">Teaching Assistant</h4>
              <p className="text-muted-foreground">Course Name (Semester Year) - [University]</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground">Teaching Assistant</h4>
              <p className="text-muted-foreground">Another Course (Semester Year) - [University]</p>
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Talks</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">"[Talk Title]"</h4>
                <span className="text-sm text-muted-foreground">Dec 2024</span>
              </div>
              <p className="text-muted-foreground mb-1">[Conference/Seminar Name], [Location]</p>
              <p className="text-sm text-muted-foreground">[Brief description or key points of the talk]</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">"[Another Talk Title]"</h4>
                <span className="text-sm text-muted-foreground">Nov 2024</span>
              </div>
              <p className="text-muted-foreground mb-1">[Workshop/Department Seminar], [University/Institution]</p>
              <p className="text-sm text-muted-foreground">[Brief description or key points of the talk]</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">"[Research Presentation Title]"</h4>
                <span className="text-sm text-muted-foreground">Oct 2024</span>
              </div>
              <p className="text-muted-foreground mb-1">[Graduate Student Conference], [Location]</p>
              <p className="text-sm text-muted-foreground">[Brief description or key points of the talk]</p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;