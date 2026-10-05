import { process } from '../data/portfolio';
import { SectionHead } from '../components/ui.jsx';

export default function Process() {
  return (
    <section className="section section--tint section--compact" id="process">
      <div className="wrap">
        <SectionHead index="06" label="Process" title="How I Work" />
        <ol className="process" data-reveal>
          {process.map((step, i) => (
            <li key={step} style={{ '--d': `${i * 60}ms` }}>
              <span className="process__num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="process__text">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
