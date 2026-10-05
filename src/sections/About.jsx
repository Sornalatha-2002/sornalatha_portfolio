import { Check } from 'lucide-react';
import { profile } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead index="01" label="About" title={profile.statement} />
        <div className="about">
          <div className="about__copy" data-reveal>
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="about__focus" data-reveal style={{ '--d': '100ms' }}>
            <h3 className="label mono">Technical Focus</h3>
            <ul className="checklist">
              {profile.focus.map((f) => (
                <li key={f}><Check size={16} strokeWidth={2.25} aria-hidden="true" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
