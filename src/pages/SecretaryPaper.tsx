import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecretaryPaper = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          When Worst-Case Isn't Robust: On the Limitations of Distributionally Robust Optimization in Secretary Problems
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Anas Abdelhakmi, Andrew Lim
        </p>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Abstract</h2>
          <p className="text-foreground leading-relaxed">
            Secretary Problems are a fundamental class of sequential search decision-making problems where the decision-maker's objective is to select the best item from a sequence presented online. We formulate a Distributionally Robust Optimization (DRO) version of secretary problems and show that the optimal robust decision coincides exactly with the nominal decision across various secretary problem variants and under various uncertainty sets (e.g., Kullback-Leibler divergence, Wasserstein distance). In the special case where only items relative ranks are shown, the well-known 1/<i>e</i> rule is worst-case optimal. We show, however, that the DRO solution is not robust in that it does not reduce the sensitivity of the expected reward to worst-case deviation from the nominal model. We show that sensitivity in the expected reward comes from the exploration shocks over time and that sensitivity can be reduced by introducing hedging instruments that offset these shocks. Simple levers, such as granting an option to recall previously rejected items at a cost, can reduce sensitivity. More generally, these results offer new insights of what it means for sequential decisions to be robust and show how practitioners can achieve robustness beyond traditional worst-case strategies.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SecretaryPaper;
