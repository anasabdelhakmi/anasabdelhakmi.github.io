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
        When Worst-Case Isn't Robust: Secretary Problems under Model Misspecification
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Anas Abdelhakmi, Andrew Lim
        </p>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Abstract</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Secretary problems are sequential search problems in which a decision-maker (DM) must select the best item from a sequence revealed online. To protect against misspecification of item values and arrival order, we formulate a distributionally robust (DRO) version of the problem and solve it in closed form. Under Kullback-Leibler ambiguity, the problem admits a robust dynamic program whose optimal policy coincides with the nominal one, regardless of the distributional assumptions or information structure. The nominal policy also remains DRO optimal under &phi;-divergence and, in the rank-only setting, Wasserstein ambiguity. In particular, the classical 1/<i>e</i> rule remains optimal no matter how ambiguity averse the DM is.
            </p>
            <p>
              This does not mean the rule is robust. DRO trades expected reward against worst-case sensitivity to misspecification, but the all-or-nothing reward places every policy on the same convex mean-sensitivity frontier, where reducing sensitivity costs too much expected reward for DRO to change the stopping rule. To be robust, the DM must instead change the setup in which she searches.
            </p>
            <p>
              We identify which changes improve robustness. Additional selection rights can raise sensitivity, making them worth less to an ambiguity-averse DM than to a nominal one. Full recall instead makes success certain, and the DM&rsquo;s willingness to pay for it increases with ambiguity. Giving partial credit for near-best items reshapes the frontier and allows the DM to trade expected reward for lower sensitivity by changing the stopping rule.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecretaryPaper;
