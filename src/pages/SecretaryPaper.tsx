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
        When Worst-Case Isn't Robust: Characterizing Robustness in Secretary Problems
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Anas Abdelhakmi, Andrew Lim
        </p>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Abstract</h2>
          <p className="text-foreground leading-relaxed">
          <p>
  Secretary Problems are a fundamental class of sequential search problems in which a decision-maker must select the best item from a sequence revealed online, with applications in hiring, online auctions, and asset allocation. To guard against misspecification in the assumed distribution of item values and arrival order, we formulate a distributionally robust optimization (DRO) version of the problem and solve it in closed form.
</p>

<p>
  We show that the DRO optimal policy coincides with the nominal one: the classical 1/<i>e</i> rule remains worst-case optimal in the rank-only problem, and this coincidence extends to a broad class of secretary problems under KL and &phi;-divergence ambiguity, as well as to Wasserstein ambiguity in the rank-only setting.
</p>

<p>
  We show, however, that this coincidence is not evidence of robustness. A distributionally robust decision-maker implicitly trades expected reward against worst-case sensitivity to model misspecification, and in secretary problems this tradeoff is unfavorable: every policy lies on the same convex mean-sensitivity frontier, so changing the stopping rule cannot reduce sensitivity without sacrificing more reward.
</p>

<p>
  Consequently, solving a DRO problem and being robust are not the same. We trace sensitivity to information shocks, meaning changes in the expected reward triggered by new observations, and show that robustness must instead come from designing operational levers that offset these shocks. Some intuitive levers, such as additional selections, can raise sensitivity; others, such as the option to recall a rejected item or a payoff that credits near-best items, offset these shocks and change the shape of the frontier.
</p>

<p>
  Beyond secretary problems, our results clarify what it means for a sequential decision to be robust and how robustness can be achieved beyond worst-case optimization.
</p>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SecretaryPaper;
