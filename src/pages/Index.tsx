import { Mail, ExternalLink, FileText, Linkedin, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/me.jpg';

const Index = () => {
  const publications = [
    {
      title: "Dynamic Black-Litterman",
      authors: "Anas Abdelhakmi, Andrew Lim",
      journal: "Operations Research",
      year: "2025",
      status: "Articles in Advance",
      link: "https://pubsonline.informs.org/doi/10.1287/opre.2024.1010",
      notes: [
      ]
    }
  ];

  const workingPapers = [
    {
      title: "Dynamic Factor Models with Forward-Looking Views",
      authors: "Anas Abdelhakmi, Andrew Lim",
      status: "Under Review in Management Science",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5486366"
    },
    {
      title: "When Worst-Case Isn't Robust: On the Limitations of Distributionally Robust Optimization in Secretary Problems",
      authors: "Anas Abdelhakmi, Andrew Lim",
      status: "In preparation for submission"
    },
    {
      title: "Brownian Bridge from Noisy Observations",
      authors: "Anas Abdelhakmi, Andrew Lim",
      status: "In preparation for submission"
    },
    {
      title: "Personalized Learning in Partially Observable Environments",
      authors: "Anas Abdelhakmi, Jussi Keppo, Hong Ming Tan",
      status: "Work in Progress (with industry partner)",
      notes: [ "Industrial Project with a Major Airline Company"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">Anas Abdelhakmi</h1>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">About</a>
              <a href="#news" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">News</a>
              <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">Research</a>
              <a href="#teaching" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">Teaching</a>
              <a href="#talks" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">Talks</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <section id="about" className="mb-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">Anas Abdelhakmi</h1>
              <p className="text-xl text-muted-foreground mb-4">
                PhD Candidate in Operations Research<br />
                <a href="https://iora.nus.edu.sg" className="text-primary hover:underline">National University of Singapore</a>
              </p>
              <div className="flex items-center text-muted-foreground mb-4">
                <Mail className="w-4 h-4 mr-2" />
                <span>a.anas[at]u.nus.edu</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href="Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>CV</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/anas-abdelhakmi-a74331182/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=xvn2L9MAAAAJ&hl=en&oi=ao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>Google Scholar</span>
                </a>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I am a fifth-year PhD candidate in Operations Research at <a href = "https://iora.nus.edu.sg" className="text-primary hover:underline">the Insitute of Operations Research & Analytics (IORA)</a> at NUS, working with Prof. <a href = "https://www.andreaslimoncello.net" className="text-primary hover:underline">Andrew Lim</a> and Prof. <a href = "https://www.jussikeppo.com" className="text-primary hover:underline">Jussi Keppo</a>.
                </p>
                <br></br>
                <p className="text-foreground leading-relaxed">
                I study <b>data-driven sequential decision-making under uncertainty</b>, with an emphasis on learning in multi-period, dynamic settings. At a high level, I design new methods that deepen our understanding of  <b>learning</b> and <b>robustness</b>, including their interaction, in sequential decision-making. I apply my research to solve operational problems in sequential search, financial engineering, and inventory management.

                </p>
                <br></br><p className="text-foreground leading-relaxed"> Prior to joining NUS, I earned a BSc and MSc in Industrial Engineering from <a href = "https://um6p.ma" className="text-primary hover:underline">EMINES&ndash;University Mohammed VI Polytechnic (UM6P)</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recent News</h2>
          <div className="space-y-6">

          <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Presenting at the INFORMS Job Market Showcase</h4>
                <span className="text-sm text-muted-foreground">October 2025</span>
              </div>
              <p className="text-muted-foreground">I will be presenting my job market paper, <b>"When Worst-Case Isn't Robust,"</b> at the INFORMS Annual Meeting in Atlanta, US. Find me in the Machine Learning and Applied Probability Job Market Session on Sunday, October 26 at 8am.</p>
            </div>

          <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Upcoming talk at: <a href = "https://iora.nus.edu.sg/afx2025/" className="text-primary hover:underline">Next-Gen Scholar's Symposium 2025</a></h4>
                <span className="text-sm text-muted-foreground">September 2025</span>
              </div>
              <p className="text-muted-foreground">I'll be presenting our paper <b>"When Worst-Case Isn't Robust"</b> at NUS Next-Gen Scholar's Symposium. I'll share our recent work on understanding the interplay between learning and robustness in multi-period, sequential decision-making.</p>
            </div>


            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">New Paper Out!</h4>
                <span className="text-sm text-muted-foreground">September 2025</span>
              </div>
              <p className="text-muted-foreground">Our paper <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5486366" className="text-primary hover:underline">Dynamic Factor Models with Forward-Looking Views</a> is now available online. In this work, we show how decision-makers can integrate forward-looking views and forecasts about covariates into dynamic, data-driven models.</p>
            </div>
           
       
            
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16 scroll-mt-20">
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
            <h3 className="text-2xl font-semibold text-foreground mb-6">Under Revision or Working Papers</h3>
            <div className="space-y-6">
              {workingPapers.map((paper, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h4  className="text-lg font-medium text-foreground mb-2">
                  {paper.link ? (
                    <a href={paper.link} className="text-primary hover:underline">{paper.title}</a>
                  ) : (
                    <span>{paper.title}</span>
                  )}
                    {paper.authors.split(',').length > 1 && (
                      <span className="text-muted-foreground"> with {paper.authors.split(',').slice(1).join(',')}</span>
                    )}
                  </h4>
                  <p className="text-muted-foreground italic">{paper.status}</p>
                </div>
              ))}
            </div>
          </div>

       {false && (
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Work in Progress</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-lg font-medium text-foreground">Personalized Learning in Partially Observable Environments</h4>
                <p className="text-muted-foreground">Brief description of current work</p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h4 className="text-lg font-medium text-foreground">Ongoing Research Project 2</h4>
                <p className="text-muted-foreground">Brief description of current work</p>
              </div>
            </div>
          </div> ) }
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Teaching</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-foreground">Instructor</h4>
              <p className="text-muted-foreground"><b>DAO1704 Decision Analytics using Spreadsheets</b> (Undergraduate Core, NUS Business School), Fall 2024 -</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground">Teaching Assistant</h4>
              <p className="text-muted-foreground"><b>DBA3803 Predictive Analytics in Business</b> (Undergraduate Core, NUS Business School), Spring 2024</p>
              <p className="text-muted-foreground"><b>BDC6112 Stochastic Processes</b> (PhD Core, NUS Business School), Fall 2022</p>
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section id="talks" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Selected Talks</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">When Worst-Case Isn't Robust</h4>
              </div>
              <p className="text-muted-foreground mb-1">INFORMS International 2025, Singapore, July 2025</p>
              <p className="text-muted-foreground mb-1">INFORMS APS 2025, Atlanta, USA, July 2025</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Dynamic Factor Models with Forward-Looking Views</h4>
              </div>
              <p className="text-muted-foreground mb-1">Quantitative Finance Workshop, Singapore Management University, Singapore, July 2025</p>
              <p className="text-muted-foreground mb-1">INFORMS International 2025, Singapore, July 2025</p>
              <p className="text-muted-foreground mb-1">INFORMS Annual Meeting 2024, Seattle, USA, October 2024</p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Dynamic Black-Litterman</h4>
              </div>
              <p className="text-muted-foreground mb-1">INFORMS APS Market Showcases, Seattle, USA, October 2024</p>
              <p className="text-muted-foreground mb-1">Quantitative Finance Workshop, Singapore Management University, Singapore, July 2024</p>
              <p className="text-muted-foreground mb-1">Mathematics & Decisions Conference and IRIS Seminar, UM6P, Morocco, December 2023</p>
              <p className="text-muted-foreground mb-1">INFORMS APS 2023, Nancy, France, June 2023</p>

              

              <p className="text-sm text-muted-foreground"><a href = "https://youtu.be/0XsvzKQcBwQ" className="text-primary hover:underline">[talk]</a> </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Personalized Learning in Partially Observable Environments </h4>
              </div>
              <p className="text-muted-foreground mb-1">INFORMS Annual Meeting 2023, Phoenix, USA, October 2023</p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Anas Abdelhakmi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;